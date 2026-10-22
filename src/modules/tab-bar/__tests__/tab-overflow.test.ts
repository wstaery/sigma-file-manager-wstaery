// SPDX-License-Identifier: GPL-3.0-or-later
// License: GNU GPLv3 or later. See the license file in the project root for more information.
// Copyright © 2021 - present Aleksey Hoffman. All rights reserved.

import { describe, expect, it } from 'vitest';
import {
  getOverflowingTabIndexes,
  getVisibleTabCount,
  isTabBarOverflowing,
} from '../tab-overflow';

describe('isTabBarOverflowing', () => {
  it('returns false when content fits the container', () => {
    expect(isTabBarOverflowing({
      scrollWidth: 400,
      clientWidth: 400,
    })).toBe(false);
  });

  it('returns false when the overflow is within the threshold', () => {
    expect(isTabBarOverflowing({
      scrollWidth: 400.5,
      clientWidth: 400,
    })).toBe(false);
  });

  it('returns true when content is wider than the container', () => {
    expect(isTabBarOverflowing({
      scrollWidth: 480,
      clientWidth: 400,
    })).toBe(true);
  });

  it('returns false for an unmeasured container', () => {
    expect(isTabBarOverflowing({
      scrollWidth: 480,
      clientWidth: 0,
    })).toBe(false);
  });
});

describe('getVisibleTabCount', () => {
  it('returns every tab when they all fit', () => {
    expect(getVisibleTabCount({
      tabWidths: [100, 100, 100],
      availableWidth: 400,
    })).toBe(3);
  });

  it('counts the gaps between tabs', () => {
    expect(getVisibleTabCount({
      tabWidths: [100, 100, 100],
      availableWidth: 308,
      gap: 4,
    })).toBe(3);

    expect(getVisibleTabCount({
      tabWidths: [100, 100, 100],
      availableWidth: 307,
      gap: 4,
    })).toBe(2);
  });

  it('fills tabs from the start of the list', () => {
    expect(getVisibleTabCount({
      tabWidths: [100, 100, 100, 100],
      availableWidth: 250,
      gap: 4,
    })).toBe(2);
  });

  it('returns zero when the available width is zero', () => {
    expect(getVisibleTabCount({
      tabWidths: [100, 100],
      availableWidth: 0,
    })).toBe(0);
  });

  it('returns zero for an empty tab list', () => {
    expect(getVisibleTabCount({
      tabWidths: [],
      availableWidth: 400,
    })).toBe(0);
  });
});

describe('getOverflowingTabIndexes', () => {
  it('returns no indexes when every tab fits', () => {
    expect(getOverflowingTabIndexes({
      tabWidths: [100, 100],
      availableWidth: 400,
    })).toEqual([]);
  });

  it('returns the indexes of the tabs that do not fit', () => {
    expect(getOverflowingTabIndexes({
      tabWidths: [100, 100, 100, 100],
      availableWidth: 250,
      gap: 4,
    })).toEqual([2, 3]);
  });

  it('keeps at least the first tab visible when nothing fits', () => {
    expect(getOverflowingTabIndexes({
      tabWidths: [300, 300],
      availableWidth: 100,
      gap: 4,
    })).toEqual([1]);
  });

  it('returns no indexes for an empty tab list', () => {
    expect(getOverflowingTabIndexes({
      tabWidths: [],
      availableWidth: 100,
    })).toEqual([]);
  });
});
