// SPDX-License-Identifier: GPL-3.0-or-later
// License: GNU GPLv3 or later. See the license file in the project root for more information.
// Copyright © 2021 - present Aleksey Hoffman. All rights reserved.

import {
  computed, nextTick, onBeforeUnmount, ref, watch, type Ref,
} from 'vue';
import { useEventListener, useResizeObserver } from '@vueuse/core';
import type { TabGroup } from '@/types/workspaces';
import {
  TAB_BAR_ITEM_GAP_PX,
  TAB_BAR_TAB_WIDTH_PX,
  getVisibleTabCount,
} from './tab-overflow';

interface TabBarOverflowOptions {
  scrollContainerRef: Ref<HTMLElement | null>;
  scrollContentRef?: Ref<HTMLElement | null>;
  tabGroups: Ref<TabGroup[]>;
}

export function useTabBarOverflow(options: TabBarOverflowOptions) {
  const visibleTabCount = ref(Number.POSITIVE_INFINITY);
  let animationFrameId: number | null = null;

  const tabGroupKey = computed(() => (
    (options.tabGroups.value ?? [])
      .map(tabGroup => tabGroup.map(tab => tab.id).join(','))
      .join('\n')
  ));

  const hiddenTabGroupIndexes = computed(() => {
    const total = options.tabGroups.value.length;

    if (!Number.isFinite(visibleTabCount.value)) {
      return [];
    }

    return Array.from(
      { length: Math.max(total - visibleTabCount.value, 0) },
      (_, index) => visibleTabCount.value + index,
    );
  });

  function cancelScheduledUpdate() {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }

  function updateTabBarOverflow() {
    const container = options.scrollContainerRef.value;

    if (!container) {
      visibleTabCount.value = Number.POSITIVE_INFINITY;
      return;
    }

    const availableWidth = container.clientWidth;

    if (availableWidth <= 0) {
      visibleTabCount.value = Number.POSITIVE_INFINITY;
      return;
    }

    const tabWidths = (options.tabGroups.value ?? []).map(tabGroup => (
      tabGroup.length === 2 ? TAB_BAR_TAB_WIDTH_PX * 2 : TAB_BAR_TAB_WIDTH_PX
    ));

    visibleTabCount.value = getVisibleTabCount({
      tabWidths,
      availableWidth,
      gap: TAB_BAR_ITEM_GAP_PX,
    });
  }

  function scheduleTabBarOverflowUpdate() {
    cancelScheduledUpdate();

    animationFrameId = requestAnimationFrame(() => {
      animationFrameId = null;
      updateTabBarOverflow();
    });
  }

  function updateTabBarOverflowAfterRender() {
    nextTick(scheduleTabBarOverflowUpdate);
  }

  useResizeObserver(options.scrollContainerRef, scheduleTabBarOverflowUpdate);

  if (options.scrollContentRef) {
    useResizeObserver(options.scrollContentRef, scheduleTabBarOverflowUpdate);
  }

  useEventListener(window, 'resize', scheduleTabBarOverflowUpdate);

  watch(tabGroupKey, updateTabBarOverflowAfterRender);

  onBeforeUnmount(cancelScheduledUpdate);

  return {
    visibleTabCount,
    hiddenTabGroupIndexes,
    updateTabBarOverflow,
    scheduleTabBarOverflowUpdate,
  };
}
