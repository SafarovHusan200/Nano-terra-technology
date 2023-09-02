import HistoryTable from "../historyTable/Historytable";
import "./history.scss";

export default function History() {
  return (
    <div className="history">
      <div className="history_top">
        <div className="history_name">Transaction History</div>
        <div className="history_data">
          <input type="date" />
        </div>
      </div>

      <div className="history_table">
        <HistoryTable />
      </div>
    </div>
  );
}
