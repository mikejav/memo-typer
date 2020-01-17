import React, { FC, useCallback } from 'react';
import { Load } from 'shared/components';
import { useDispatch } from 'react-redux';
import { InsightsEffects } from 'state/insights/insights.effects';
import { InsightsLoading } from 'pages/insights/insights-loading';
import { InsightsLoaded } from 'pages/insights/insights-loaded';

export const Insights: FC = () => {
  const dispatch = useDispatch();
  const insights = useInsightsSelector();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadAction = useCallback(() => dispatch(InsightsEffects.load()), []);

  return (
    <Load
      isLoaded={insights.lastFetchedAt}
      loadAction={loadAction}
      LoadingComponent={InsightsLoading}
      LoadedComponent={InsightsLoaded}
    />
  );
};
