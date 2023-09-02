import "./historydata.scss";

export default function Historytable() {
  const data = [
    {
      name: "Bank Transfer",
      img: "bank.png",
      data: "Jan 01,2022",
      amount: "$2,000.00",
      complated: "Completed",
      color: "#7FB519",
    },
    {
      name: "Paypal Account",
      img: "paypal.png",
      data: "Jan 04,2022",
      amount: "$2,000.00",
      complated: "Pending ",
      color: "#DBA32A",
    },
    {
      name: "Bank Transfer",
      img: "figma.png",
      data: "Jan 06,2022",
      amount: "$2,000.00",
      complated: "On Hold ",
      color: "#DB2719",
    },
  ];
  return (
    <div className="historyTable">
      <table>
        <thead>
          <tr>
            <th>Transactions</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>
                <img src={item.img} alt="" />
                <b>{item.name}</b>
              </td>
              <td>{item.data}</td>
              <td>{item.amount}</td>
              <td>
                <div
                  className="status_color"
                  style={{ background: item.color }}
                >
                  <div style={{ background: item.color }}></div>
                </div>
                <span>{item.complated}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
