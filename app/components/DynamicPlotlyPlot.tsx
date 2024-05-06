import dynamic from 'next/dynamic';

export const DynamicPlotlyPlot = dynamic(() => import('react-plotly.js'), {
  ssr: false,
});
