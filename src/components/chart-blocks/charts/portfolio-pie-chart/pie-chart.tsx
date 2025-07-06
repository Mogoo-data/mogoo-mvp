
import { VChart } from "@visactor/react-vchart";
import React, { useMemo } from "react";

export default function Chart({ data }) {
const spec = useMemo(() => ({
  type: 'pie',
  data: [
    {
      id: 'id0',
      values: data
    }
  ],
  outerRadius: 0.7,
  innerRadius: 0.4,
  padAngle: 0.6,
  valueField: 'value',
  categoryField: 'type',
  pie: {
    style: {
      cornerRadius: 10
    },
    state: {
      hover: {
        outerRadius: 0.85,
        stroke: '#000',
        lineWidth: 1
      },
      selected: {
        outerRadius: 0.85,
        stroke: '#000',
        lineWidth: 1
      }
    }
  },
  legends: {
    visible: true,
    orient: 'bottom',
  },
  label: {
    visible: true
  },
  tooltip: {
    mark: {
      content: [
        {
          key: datum => datum['type'],
          value: datum => datum['value'].toFixed(2) + datum['unit'],
        }
      ]
    }
  }
}), [data]);

return <VChart spec={spec} />;

}