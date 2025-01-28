import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import './PieChartBox.scss';

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MyPieChart = () => {
  return (
    <div className="charts">
      <span>Leads By Source</span>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <PieChart width={800} height={300}>
            <Pie
              data={data}
              cx={400}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
           
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MyPieChart;
