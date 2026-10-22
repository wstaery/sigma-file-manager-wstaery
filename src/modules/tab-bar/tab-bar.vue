<!-- SPDX-License-Identifier: GPL-3.0-or-later
License: GNU GPLv3 or later. See the license file in the project root for more information.
Copyright © 2021 - present Aleksey Hoffman. All rights reserved.
-->

<script setup lang="ts">
import {
  ref, onMounted, computed, watch, nextTick,
} from 'vue';
import { useI18n } from 'vue-i18n';
import { Tab, TabDraggable } from '.';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { ContextMenuShortcut } from '@/components/ui/context-menu';
import { useWorkspacesStore } from '@/stores/storage/workspaces';
import { useShortcutsStore } from '@/stores/runtime/shortcuts';
import type { Tab as TabType, TabGroup } from '@/types/workspaces';
import { PlusIcon } from '@lucide/vue';
import TabBarOverflowMenu from './tab-bar-overflow-menu.vue';
import { useTabBarOverflow } from './use-tab-bar-overflow';

const { t } = useI18n();

const props = withDefaults(defineProps<{
  teleportTarget?: string;
  compact?: boolean;
}>(), {
  teleportTarget: '.window-toolbar-primary-teleport-target',
  compact: false,
});

const workspacesStore = useWorkspacesStore();
const shortcutsStore = useShortcutsStore();

const tabGroupCount = computed(() => workspacesStore.currentWorkspace?.tabGroups?.length ?? 0);
const teleportDisabled = computed(() => !props.teleportTarget);
const teleportTo = computed(() => props.teleportTarget || 'body');
const { openNewTabGroup, openTabGroup, closeTabGroup, setTabs } = workspacesStore;

const previewEnabled = ref(true);
const isOverflowMenuOpen = ref(false);
const scrollContainerRef = ref<HTMLElement | null>(null);
const scrollContentRef = ref<HTMLElement | null>(null);

const tabGroups = computed(() => workspacesStore.currentWorkspace?.tabGroups ?? []);

const {
  visibleTabCount,
  hiddenTabGroupIndexes,
  updateTabBarOverflow,
} = useTabBarOverflow({
  scrollContainerRef,
  scrollContentRef,
  tabGroups,
});

const isOverflowing = computed(() => hiddenTabGroupIndexes.value.length > 0);

const visibleTabGroups = computed(() => {
  if (!Number.isFinite(visibleTabCount.value)) {
    return tabGroups.value;
  }

  return tabGroups.value.slice(0, visibleTabCount.value);
});

watch(tabGroupCount, () => {
  nextTick(() => {
    updateTabBarOverflow();
  });
});

watch(isOverflowing, (overflowing) => {
  if (!overflowing) {
    isOverflowMenuOpen.value = false;
  }
});

watch(isOverflowMenuOpen, (isOpen) => {
  if (!isOpen) {
    return;
  }

  updateTabBarOverflow();
});

function handleOverflowTabSelect(tabGroup: TabGroup) {
  isOverflowMenuOpen.value = false;
  openTabGroup(tabGroup);
}

async function handleOverflowAddTab() {
  isOverflowMenuOpen.value = false;
  await openNewTabGroup();
}

function handleDragStart() {
  previewEnabled.value = false;
}

function handleDragEnd() {
  previewEnabled.value = true;
}

function handleTabsSet(nextTabGroups: TabGroup[]) {
  setTabs(nextTabGroups);
}

onMounted(() => {
  updateTabBarOverflow();
});
</script>

<template>
  <Teleport
    :to="teleportTo"
    :disabled="teleportDisabled"
  >
    <div
      class="tab-bar animate-sigma-ui-fade-in"
      :class="{ 'tab-bar--compact': compact }"
    >
      <div
        ref="scrollContainerRef"
        class="tab-bar__base-container"
      >
        <div
          ref="scrollContentRef"
          class="tab-bar__base"
        >
          <TabDraggable
            :items="visibleTabGroups"
            :draggable-bg-color-var="'window-toolbar-color'"
            parent-selector=".tab-bar"
            @set="handleTabsSet($event as TabGroup[])"
            @drag-start="handleDragStart"
            @drag-end="handleDragEnd"
          >
            <template #item="{ item }">
              <Tab
                :tab-group="(item as TabType[])"
                :preview-enabled="previewEnabled"
                @close-tab="closeTabGroup($event)"
              />
            </template>
          </TabDraggable>
        </div>
      </div>

      <Tooltip>
        <TooltipTrigger as-child>
          <Button
            class="tab-bar__add-tab-button"
            variant="ghost"
            size="xs"
            :aria-label="t('tabs.newTab')"
            @click="openNewTabGroup()"
          >
            <PlusIcon :size="14" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div class="tab-bar__tooltip">
            <div class="tab-bar__tooltip-row">
              {{ t('tabs.newTab') }}
              <ContextMenuShortcut>{{ shortcutsStore.getShortcutLabel('openNewTab') }}</ContextMenuShortcut>
            </div>
            <div class="tab-bar__tooltip-row">
              {{ t('shortcuts.duplicateCurrentTab') }}
              <ContextMenuShortcut>{{ shortcutsStore.getShortcutLabel('duplicateCurrentTab') }}</ContextMenuShortcut>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>

      <TabBarOverflowMenu
        v-if="isOverflowing"
        v-model:open="isOverflowMenuOpen"
        :tab-groups="tabGroups"
        :active-tab-group="workspacesStore.currentTabGroup"
        :hidden-tab-group-indexes="hiddenTabGroupIndexes"
        @select="handleOverflowTabSelect"
        @add-tab="handleOverflowAddTab"
      />
    </div>
  </Teleport>
</template>

<style>
.tab-bar,
.tab-bar * {
  -webkit-app-region: no-drag;
}

.tab-bar {
  display: flex;
  overflow: hidden;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  height: 100%;
  align-items: center;
  gap: 4px;
}

.tab-bar__base-container {
  display: flex;
  overflow: hidden;
  min-width: 0;
  flex: 1 1 auto;
  align-items: center;
  justify-content: flex-start;
}

.tab-bar__base {
  display: flex;
  width: max-content;
  height: calc(var(--window-toolbar-height) - 4px);
  flex: 0 0 auto;
  align-items: center;
  justify-content: flex-start;
}

.tab-bar__add-tab-button {
  flex-shrink: 0;
  color: hsl(var(--muted-foreground));
}

.tab-bar__tooltip {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tab-bar__tooltip-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.tab-bar--compact {
  width: 100%;
  height: var(--window-toolbar-height);
  padding: 0;
}

.tab-bar--compact .tab-bar__base-container {
  overflow: hidden;
  min-width: 0;
  flex: 1;
}
</style>
