// SPDX-License-Identifier: GPL-3.0-or-later
// License: GNU GPLv3 or later. See the license file in the project root for more information.
// Copyright © 2021 - present Aleksey Hoffman. All rights reserved.

export const TAB_BAR_OVERFLOW_THRESHOLD_PX = 1;
export const TAB_BAR_ITEM_GAP_PX = 4;

/**
 * Fixed slot width of a single tab, in CSS pixels.
 *
 * The tab bar relies on this value instead of measuring rendered tabs, because
 * the tabs are laid out inside a flex container that can squeeze them. Measuring
 * squeezed tabs would feed a collapsed width back into the overflow calculation
 * and every tab would end up clipped.
 */
export const TAB_BAR_TAB_WIDTH_PX = 100;

export interface TabBarOverflowMetrics {
  scrollWidth: number;
  clientWidth: number;
}

export function isTabBarOverflowing(
  metrics: TabBarOverflowMetrics,
  threshold = TAB_BAR_OVERFLOW_THRESHOLD_PX,
): boolean {
  if (metrics.clientWidth <= 0) {
    return false;
  }

  return metrics.scrollWidth - metrics.clientWidth > threshold;
}

/**
 * Returns how many tabs fit in the available width.
 *
 * Tabs are consumed from the start of the list, which is ordered by the time the
 * tabs were opened, so the leftmost tab always stays fully visible. Tabs that do
 * not fit are surfaced through the overflow counter instead of being clipped.
 */
export function getVisibleTabCount(options: {
  tabWidths: number[];
  availableWidth: number;
  gap?: number;
}): number {
  const { tabWidths, availableWidth } = options;
  const gap = options.gap ?? TAB_BAR_ITEM_GAP_PX;
  const tabCount = tabWidths.length;

  if (tabCount === 0 || availableWidth <= 0) {
    return 0;
  }

  let usedWidth = 0;
  let visibleCount = 0;

  for (const tabWidth of tabWidths) {
    const widthWithTab = usedWidth + (visibleCount > 0 ? gap : 0) + tabWidth;

    if (widthWithTab > availableWidth) {
      break;
    }

    usedWidth = widthWithTab;
    visibleCount += 1;
  }

  return visibleCount;
}

/**
 * Returns the indexes of the tabs that do not fit in the available width.
 *
 * The first tab is always treated as visible so the tab bar never ends up as an
 * empty strip that only shows the overflow counter.
 */
export function getOverflowingTabIndexes(options: {
  tabWidths: number[];
  availableWidth: number;
  gap?: number;
}): number[] {
  const tabCount = options.tabWidths.length;
  const visibleCount = Math.max(
    getVisibleTabCount(options),
    tabCount > 0 ? 1 : 0,
  );

  return options.tabWidths
    .map((_, index) => index)
    .slice(visibleCount);
}
