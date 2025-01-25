import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const PieChartBox = () => {
  const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
  ];

  return (
    <div className='PieChartBox'>
        <h1>Lead By Source</h1>
      <ResponsiveContainer width="99%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%" // Center horizontally
            cy="50%" // Center vertically
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartBox;
