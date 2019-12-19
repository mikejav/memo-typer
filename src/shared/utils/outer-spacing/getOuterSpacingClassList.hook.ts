import { useMemo } from 'react';
import { OuterSpacing } from 'shared/utils/outer-spacing/OuterSpacing';

function buildOuterSpacingClassList(outerSpacing: OuterSpacing): string {
  if (Array.isArray(outerSpacing)) {
    return outerSpacing.join(' ');
  }

  return outerSpacing;
}

export function useSpacingClassMemo(outerSpacing?: OuterSpacing) {
  return useMemo(() => buildOuterSpacingClassList(outerSpacing || '' as string), [outerSpacing]);
}
