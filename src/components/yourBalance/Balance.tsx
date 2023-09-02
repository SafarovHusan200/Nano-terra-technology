import "./balance.scss";

export default function Balance() {
  return (
    <div className="balance">
      <div className="blance_top">
        <div className="blance_name">Your balance</div>
        <div className="balance_set">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="balance_price">
        <h1>$120,435.00</h1>
        <span>{"( USD )"}</span>
      </div>
      <p className="balance_data">From Jan 01, 2022 to Jan 31, 2022</p>

      <div className="balance_btns">
        <button className="balance_btn">
          <img src="money2.png" alt="" />
          <span>Top Up</span>
        </button>
        <button className="balance_btn">
          <img src="money1.png" alt="" />
          <span>Transfer</span>
        </button>
      </div>
    </div>
  );
}
