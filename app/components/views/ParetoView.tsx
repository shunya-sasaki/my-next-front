import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { PlotlyPlotData } from '../../interfaces/PlotlyPlotData';
import { DummyPlotObject } from '../DummyPlotObject';
import { DynamicPlotlyPlot } from '../DynamicPlotlyPlot';

export const ParetoView = () => {
  const selectorClass = [
    'pl-2',
    'ml-4',
    'text-white',
    'bg-slate-500',
    'rounded-lg',
    'border-2',
    'content-center',
  ].join(' ');
  const viewClass = ['pl-4', 'pt-4'].join(' ');
  const [colorParameter, setColorParameter] = useState('パラメータ1');
  const colorParameterCandidates = [
    'パラメータ1',
    'パラメータ2',
    'パラメータ3',
  ];
  const paretoPlotData: PlotlyPlotData = {
    data: [],
    layout: {},
  };
  return (
    <div className={viewClass}>
      <div className="flex pt-2">
        <div className="text-2xl font-bold">
          <FontAwesomeIcon icon={faMagnifyingGlassChart} />
        </div>
        <div className="text-2xl font-bold pl-2">Pareto</div>
      </div>
      <section className="pl-2">
        <div className="flex pt-2">
          <div className="content-center">表示パラメータ:</div>
          <select
            className={selectorClass}
            onChange={(e) => setColorParameter(e.target.value)}
            key="parameterSelector"
          >
            {colorParameterCandidates.map((parameter, index) => {
              return (
                <option
                  value={parameter}
                  key={'colorParameter-' + index.toString()}
                >
                  {parameter}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-5/6 pt-4 h-full">
          {paretoPlotData.data.length > 0 ? (
            <DynamicPlotlyPlot
              data={paretoPlotData.data}
              layout={paretoPlotData.layout}
            />
          ) : (
            <DummyPlotObject />
          )}
        </div>
      </section>
    </div>
  );
};
