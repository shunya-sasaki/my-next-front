import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export const TrendView = () => {
  const viewClass = ['pl-4', 'pt-4'].join(' ');
  return (
    <div className={viewClass}>
      <div className="flex pt-2">
        <div className="text-2xl font-bold">
          <FontAwesomeIcon icon={faArrowTrendUp} />
        </div>
        <div className="text-2xl font-bold pl-2">Trend</div>
      </div>
    </div>
  );
};
