// SPDX-License-Identifier: GPL-3.0-or-later
// License: GNU GPLv3 or later. See the license file in the project root for more information.
// Copyright © 2021 - present Aleksey Hoffman. All rights reserved.

import type { Tab } from '@/types/workspaces';
import { getPathDisplayName, getPathDisplayValue } from '@/utils/normalize-path';

type TranslateFn = (key: string) => string;

export function getTabDisplayName(tab: Tab | undefined, translate?: TranslateFn): string {
  if (!tab) {
    return '';
  }

  return getPathDisplayName(tab.path, translate) || getPathDisplayName(tab.name, translate) || tab.name || tab.path;
}

export function getTabGroupDisplayName(tabGroup: Tab[] | undefined, translate?: TranslateFn): string {
  const firstTab = tabGroup?.[0];
  const secondTab = tabGroup?.[1];

  if (tabGroup?.length === 2 && secondTab) {
    return `${getTabDisplayName(firstTab, translate)} | ${getTabDisplayName(secondTab, translate)}`;
  }

  return getTabDisplayName(firstTab, translate);
}

export function getTabGroupPathLabel(tabGroup: Tab[] | undefined): string {
  return (tabGroup ?? [])
    .map(tab => getPathDisplayValue(tab.path) || tab.name)
    .filter(Boolean)
    .join('  |  ');
}
