<!-- SPDX-License-Identifier: GPL-3.0-or-later
License: GNU GPLv3 or later. See the license file in the project root for more information.
Copyright © 2021 - present Aleksey Hoffman. All rights reserved.
-->

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { PlusIcon } from '@lucide/vue';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useShortcutsStore } from '@/stores/runtime/shortcuts';
import { ContextMenuShortcut } from '@/components/ui/context-menu';
import type { TabGroup } from '@/types/workspaces';
import { getTabGroupDisplayName, getTabGroupPathLabel } from './tab-display-name';

interface Props {
  open: boolean;
  tabGroups: TabGroup[];
  activeTabGroup: TabGroup | null;
  hiddenTabGroupIndexes: number[];
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (event: 'update:open', value: boolean): void;
  (event: 'select', value: TabGroup): void;
  (event: 'add-tab'): void;
}>();

const { t } = useI18n();
const shortcutsStore = useShortcutsStore();

const isOpen = computed({
  get: () => props.open,
  set: (value: boolean) => emit('update:open', value),
});

const hiddenTabGroups = computed(() => (
  props.hiddenTabGroupIndexes
    .map(index => props.tabGroups[index])
    .filter((tabGroup): tabGroup is TabGroup => Array.isArray(tabGroup) && tabGroup.length > 0)
));

const tabCountLabel = computed(() => String(props.tabGroups.length));

const tabsTooltipLabel = computed(() => (
  t('tabs.showHiddenTabs', { count: props.tabGroups.length })
));

function isTabGroupActive(tabGroup: TabGroup): boolean {
  return tabGroup[0]?.id === props.activeTabGroup?.[0]?.id;
}

function selectTabGroup(tabGroup: TabGroup) {
  emit('select', tabGroup);
}

function addTab() {
  emit('add-tab');
}
</script>

<template>
  <DropdownMenu v-model:open="isOpen">
    <DropdownMenuTrigger as-child>
      <Button
        class="tab-bar__overflow-button"
        variant="ghost"
        size="xs"
        :title="tabsTooltipLabel"
        :aria-label="tabsTooltipLabel"
      >
        <span class="tab-bar__overflow-button-count">{{ tabCountLabel }}</span>
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent
      align="end"
      side="bottom"
      class="tab-bar__overflow-menu"
    >
      <DropdownMenuItem
        class="tab-bar__overflow-menu-add"
        @select="addTab"
      >
        <PlusIcon
          class="tab-bar__overflow-menu-icon"
          :size="14"
        />
        {{ t('tabs.newTab') }}
        <ContextMenuShortcut v-if="shortcutsStore.getShortcutLabel('openNewTab')">
          {{ shortcutsStore.getShortcutLabel('openNewTab') }}
        </ContextMenuShortcut>
      </DropdownMenuItem>

      <template v-if="hiddenTabGroups.length > 0">
        <DropdownMenuSeparator />

        <DropdownMenuLabel class="tab-bar__overflow-menu-label">
          {{ t('tabs.hiddenTabs') }}
        </DropdownMenuLabel>

        <div class="tab-bar__overflow-menu-scroll">
          <DropdownMenuItem
            v-for="tabGroup in hiddenTabGroups"
            :key="tabGroup[0]?.id"
            class="tab-bar__overflow-menu-item"
            :data-active="isTabGroupActive(tabGroup) || undefined"
            @select="selectTabGroup(tabGroup)"
          >
            <span class="tab-bar__overflow-menu-item-text">
              <span class="tab-bar__overflow-menu-item-title">
                {{ getTabGroupDisplayName(tabGroup, t) }}
              </span>
              <span class="tab-bar__overflow-menu-item-path">
                {{ getTabGroupPathLabel(tabGroup) }}
              </span>
            </span>
          </DropdownMenuItem>
        </div>
      </template>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style>
.sigma-ui-button.tab-bar__overflow-button {
  min-width: 24px;
  height: 22px;
  flex-shrink: 0;
  padding: 0 5px;
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius-sm);
  color: hsl(var(--muted-foreground));
}

.sigma-ui-button.tab-bar__overflow-button:hover {
  border-color: hsl(var(--border) / 60%);
  background-color: hsl(var(--secondary));
  color: hsl(var(--foreground));
}

.tab-bar__overflow-button-count {
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  line-height: 1;
}

.sigma-ui-dropdown-menu-content.tab-bar__overflow-menu {
  display: flex;
  overflow: hidden;
  min-width: 240px;
  max-width: 360px;
  flex-direction: column;
  padding: 0.25rem;
}

.tab-bar__overflow-menu-add {
  flex-shrink: 0;
  color: hsl(var(--foreground));
}

.tab-bar__overflow-menu-icon {
  margin-right: 8px;
}

.tab-bar__overflow-menu-label {
  flex-shrink: 0;
  font-size: 11px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.tab-bar__overflow-menu-scroll {
  max-height: min(
    320px,
    var(--reka-dropdown-menu-content-available-height, calc(100vh - 200px))
  );
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-color: hsl(var(--muted-foreground) / 45%) transparent;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
}

.tab-bar__overflow-menu-scroll::-webkit-scrollbar {
  width: 8px;
}

.tab-bar__overflow-menu-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.tab-bar__overflow-menu-scroll::-webkit-scrollbar-thumb {
  border: 2px solid transparent;
  border-radius: 999px;
  background-clip: content-box;
  background-color: hsl(var(--muted-foreground) / 40%);
}

.tab-bar__overflow-menu-scroll::-webkit-scrollbar-thumb:hover {
  background-color: hsl(var(--muted-foreground) / 65%);
}

.tab-bar__overflow-menu-item {
  align-items: flex-start;
  padding-block: 6px;
}

.tab-bar__overflow-menu-item[data-active] {
  background-color: hsl(var(--secondary));
}

.tab-bar__overflow-menu-item-text {
  display: flex;
  overflow: hidden;
  min-width: 0;
  flex-direction: column;
  gap: 2px;
}

.tab-bar__overflow-menu-item-title {
  overflow: hidden;
  font-size: 13px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tab-bar__overflow-menu-item-path {
  overflow: hidden;
  color: hsl(var(--muted-foreground));
  font-size: 11px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
