import React, { FC } from 'react';
import { useInsightsSelector } from 'selectors';
import { InsightsEmptyState } from 'pages/insights/insights-empty-state';

export const InsightsLoaded: FC = () => {
  const insights = useInsightsSelector();

  return (
    insights.data.lastActivity
      ? <InsightsEmptyState/>
      : <div>TODO: wyświetl jakieś statystyki</div>
  );
};
