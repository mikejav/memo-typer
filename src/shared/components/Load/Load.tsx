import React, { FC, useEffect, useRef } from 'react';

interface LoadProps {
  loadAction: Function,
  isLoadedPredicate: Function,
  cancelLoading?: Function,
  LoadingComponent: FC,
  LoadedComponent: FC
}

export const Load: FC<LoadProps> = (
  { loadAction, isLoadedPredicate, cancelLoading, LoadingComponent, LoadedComponent }
) => {
  const isLoadingTriggeredRef = useRef(false);

  useEffect(() => {
    if (!isLoadedPredicate()) {
      loadAction();

      isLoadingTriggeredRef.current = true;
      if (cancelLoading) {

        return () => {
          if (isLoadingTriggeredRef.current) {
            cancelLoading();
          }
        };
      }
    }
  }, []);

  if (isLoadedPredicate()) {
    isLoadingTriggeredRef.current = false;
    return <LoadedComponent/>;
  }
  return <LoadingComponent/>;
};
