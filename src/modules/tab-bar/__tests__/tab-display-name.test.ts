// SPDX-License-Identifier: GPL-3.0-or-later
// License: GNU GPLv3 or later. See the license file in the project root for more information.
// Copyright © 2021 - present Aleksey Hoffman. All rights reserved.

import { describe, expect, it } from 'vitest';
import type { Tab } from '@/types/workspaces';
import {
  getTabDisplayName,
  getTabGroupDisplayName,
  getTabGroupPathLabel,
} from '../tab-display-name';

function createTab(overrides: Partial<Tab> = {}): Tab {
  return {
    id: 'tab-1',
    name: 'folder',
    path: 'C:/Users/Admin/folder',
    type: 'directory',
    paneWidth: 100,
    filterQuery: '',
    dirEntries: [],
    selectedDirEntries: [],
    ...overrides,
  };
}

describe('getTabDisplayName', () => {
  it('uses the leaf name of the path', () => {
    expect(getTabDisplayName(createTab())).toBe('folder');
  });

  it('returns an empty string for a missing tab', () => {
    expect(getTabDisplayName(undefined)).toBe('');
  });
});

describe('getTabGroupDisplayName', () => {
  it('joins both panes with a pipe for split view groups', () => {
    const tabGroup = [
      createTab({
        id: 'a',
        path: 'C:/Users/Admin/folder',
      }),
      createTab({
        id: 'b',
        path: 'D:/Projects/demo',
      }),
    ];

    expect(getTabGroupDisplayName(tabGroup)).toBe('folder | demo');
  });

  it('uses only the first tab for single pane groups', () => {
    expect(getTabGroupDisplayName([createTab()])).toBe('folder');
  });

  it('returns an empty string for an empty group', () => {
    expect(getTabGroupDisplayName([])).toBe('');
    expect(getTabGroupDisplayName(undefined)).toBe('');
  });
});

describe('getTabGroupPathLabel', () => {
  it('joins normalized paths of every pane', () => {
    const tabGroup = [
      createTab({
        id: 'a',
        path: 'C:\\Users\\Admin\\folder',
      }),
      createTab({
        id: 'b',
        path: 'D:/Projects/demo',
      }),
    ];

    expect(getTabGroupPathLabel(tabGroup)).toBe('C:/Users/Admin/folder  |  D:/Projects/demo');
  });

  it('returns an empty string for an empty group', () => {
    expect(getTabGroupPathLabel([])).toBe('');
  });
});
