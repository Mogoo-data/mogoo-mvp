import { VChart } from "@visactor/react-vchart";

export default function Chart({ data }) {
  const spec = {
    type: 'bar',
    data: [
      {
        id: 'barData',
        values: data
      }
    ],
    direction: 'horizontal',
    xField: 'value',
    yField: 'period',
    seriesField: 'period',
    padding: { right: 50, left: 10 },
    axes: [
      {
        orient: 'bottom',
        visible: false,
        nice: false,
        min: 0,
        max: 1
      },
      {
        orient: 'left',
        maxWidth: 130,
        label: {
          autoLimit: true
        },
        domainLine: {
          visible: false
        },
        tick: {
          visible: false
        }
      }
    ],
    stackCornerRadius: 0,
    bar: {
      style: {
        cornerRadius: [5, 5, 5, 5],
        height: 10
      }
    },
    barBackground: {
      visible: true,
      style: {
        cornerRadius: [5, 5, 5, 5],
        height: 10
      },
      state: {
        hover: {
          stroke: '#D9D9D9',
          lineWidth: 1
        }
      }
    },
    extensionMark: [
      {
        type: 'text',
        dataId: 'barData',
        visible: true,
        style: {
          text: (datam) => `${(datam.value * 100).toFixed(0)}%`,
          fontSize: 12,
          x: (datum, ctx) => {
            return ctx.getRegion().getLayoutRect().width + 10;
          },
          y: (datum, ctx) => {
            return ctx.valueToY([datum.period]) + ctx.yBandwidth() / 2;
          },
          textBaseline: 'middle',
          textAlign: 'left',
          fill: '#595959',
          size: 20
        }
      }
    ],
    crosshair: {
      yField: {
        visible: false
      }
    },
    tooltip: {
      mark: {
        title: {
          visible: false
        },
        content: [
          {
            key: (datum) => datum.key,
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
      },
      style: {
        shape: {
          shapeType: 'circle'
        }
      }
    }
  };
  return <VChart spec={spec} />;
}