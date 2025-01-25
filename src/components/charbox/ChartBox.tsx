import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import './chartbox.scss';

interface ChartData {
  name: string;
  value: number;
}

interface Props {
  color: string;
  title: string;
  icon: string;
  number: number | string;
  percentage: number;
  dataKey: string;
  chartData: object[];
}

const ChartBox: React.FC<Props> = ({
  color,
  title,
  icon,
  number,
  percentage,
  dataKey,
  chartData,
}) => {
  const percentageColor = percentage < 0 ? "tomato" : "limegreen";

  return (
    <div className="charts">
      <div className="boxinfo">
        <div className="userinfo">
          <img src={icon} alt={`${title} Icon`} />
          <span>{title}</span>
        </div>
        <h1>{number}</h1>
        <Link to="/" style={{ color }}>
          View All
        </Link>
      </div>
      <div className="chartinfo">
        <div className="chart">
          {chartData.length > 0 ? (
            <ResponsiveContainer width="99%" height="100%">
              <LineChart data={chartData}>
                <Tooltip contentStyle={{ background: "transparent", border: "none" }} />
                <Line
                  type="monotone"
                  dataKey={dataKey}
                  stroke={color}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p>No data available</p>
          )}
        </div>
        <div className="percentage">
          <p style={{ color: percentageColor }}>{percentage}%</p>
          <span>This month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
