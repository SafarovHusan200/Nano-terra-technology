import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";
import "./composedChart.scss";

const data = [
  {
    name: "Yan",
    Expense: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Feb",
    Expense: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Mar",
    Expense: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Apr",
    Expense: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "May",
    Expense: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Jun",
    Expense: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: "Jul",
    Expense: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: "Avg",
    Expense: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: "Sen",
    Expense: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: "Okt",
    Expense: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: "Nov",
    Expense: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: "Dec",
    Expense: 1400,
    pv: 680,
    amt: 1700,
  },
];
export default function ComposChart() {
  return (
    <div className="composchart">
      <div className="composchart_top">
        <div className="composchart_top_title">Spending Statistics</div>
        <div className="composchart_data">
          <div className="l_btn">
            <img src="left.png" alt="" />
          </div>

          <span className="year">2024</span>
          <div className="l_btn">
            <img src="right.png" alt="" />
          </div>
        </div>
      </div>

      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={500}
            data={data}
            margin={{
              top: 30,
              right: 10,
              bottom: 20,
              left: 0,
            }}
          >
            <XAxis dataKey="name" scale="auto" fontSize={"14px"} />
            <YAxis fontSize={"14px"} />
            <Tooltip
              contentStyle={{
                borderRadius: "5px",
              }}
              labelStyle={{ display: "none", color: "white" }}
              cursor={{ fill: "none" }}
            />

            <Bar dataKey="Expense" barSize={15} fill="#4623E9" radius={8} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
