import React, { FC } from 'react';
import { InsightsEmptyState } from 'pages/insights/insights-empty-state';
import { useInsightsSelector } from 'state/insights/insights.selectors';

export const InsightsLoaded: FC = () => {
  const insights = useInsightsSelector();

  return (
    // insights.data.lastActivity
    true
      ? <InsightsEmptyState/>
      : <div>TODO: wyświetl jakieś statystyki</div>
  );
};
