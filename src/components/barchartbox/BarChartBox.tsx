import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barbox.scss";

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const BarChartBox = (props: Props) => {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        
      <ResponsiveContainer width="99%" height={150}>
        <BarChart  data={props.chartData}>
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;