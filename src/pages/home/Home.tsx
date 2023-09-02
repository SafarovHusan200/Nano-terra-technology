import ComposChart from "../../components/composedChart/ComposChart";
import History from "../../components/history/History";
import Piechart from "../../components/pieChart/PieChart";
import Total from "../../components/total/Total";
import Balance from "../../components/yourBalance/Balance";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <ComposChart />
      </div>
      <div className="box box2">
        <Balance />
      </div>
      <div className="box box3">
        <Piechart />
      </div>
      <div className="box box4">
        <History />
      </div>
      <div className="box box5">
        <Total />
      </div>
    </div>
  );
}
