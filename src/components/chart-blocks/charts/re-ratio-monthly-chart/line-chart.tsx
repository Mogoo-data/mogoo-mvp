import { VChart } from "@visactor/react-vchart";

export default function Chart({ data }) {
  const spec = {
    type: 'line',
    data: {
      values: data,
    },
    xField: 'month',
    yField: 'value',
    seriesField: 'period',
    legends: [{ visible: true, position: 'middle', orient: 'bottom' }],
    axes: [
      {
        orient: 'left',
        label: {
          formatMethod(val) {
            return `${(val * 100).toFixed(0)}%`;
          }
        }
      }
    ],
    tooltip: {
      mark: {
        title: {
          visible: false
        },
        content: [
          {
            key: (datum) => datum.period,
            value: (datum) => `${(datum.value * 100).toFixed(0)}%`
          }
        ]
      },
      dimension: {
        title: {
          visible: false
        },
        content: [
          {
            key: (datum) => datum.period,
            value: (datum) => `${(datum.value * 100).toFixed(0)}%`
          }
        ]
      }
    }
  };
  
  return <VChart spec={spec} />;

}