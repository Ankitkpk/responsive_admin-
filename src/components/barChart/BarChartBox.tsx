import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './barChartBox.scss';

// Define the interface for the component props
interface BarChartBoxProps {
  color: string;
  title: string;
  dataKey: string;
  chartData: object[];
}

const BarChartBox: React.FC<BarChartBoxProps> = ({ color, title, dataKey, chartData }) => {
  return (
    <div className="barchart">
      <span>{title}</span>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={chartData}>
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
