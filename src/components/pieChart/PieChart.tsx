import { PieChart, Pie, Cell, Tooltip } from "recharts";

import "./piechart.scss";
const data = [
  { name: "Employees Salary", value: 800000 },
  { name: "Material Supplies", value: 213000 },
  { name: "Company tax", value: 151000 },
  { name: "Maintenance system", value: 224500 },
  { name: "Development System", value: 438500 },
  { name: "Production Tools ", value: 100000 },
];
const COLORS = [
  "#EB7CA6",
  "#FFACC8",
  "#CC6FF8",
  "#7C5CFC",
  "#5CAFFC",
  "#A1A9FE",
];
export default function Piechart() {
  return (
    <div className="pieChart">
      <div className="pie_top">
        <div className="pie_title">Spend by category</div>
        <div className="pie_set">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="chart">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx={150}
            cy={150}
            innerRadius={80}
            outerRadius={105}
            cornerRadius={5}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div className="pie_info">
        {data.map((item, index) => (
          <div key={item.name} className="pie_item">
            <div
              className="pie_color"
              style={{ background: COLORS[index] }}
            ></div>
            <div className="pie_name">{item.name}</div>
            <div className="pie_value">${item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
