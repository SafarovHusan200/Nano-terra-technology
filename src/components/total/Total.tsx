import "./total.scss";

export default function Total() {
  return (
    <div className="total">
      <div className="total_left">
        <div className="total_top">
          <div className="total_name">Total Income</div>
          <div className="total_position">
            <img src="arrow-up.png" alt="" />
          </div>
        </div>

        <div className="total_price">
          <h1>$50,530.00</h1>
          <span>( USD )</span>
        </div>
        <div className="total_pro">
          <div className="pro">20%</div>
          <span> increase compared to last week</span>
        </div>
      </div>

      <div className="total_right">
        <div className="total_top">
          <div className="total_name">Total Expense</div>
          <div className="total_position">
            <img src="arrow-down.png" alt="" />
          </div>
        </div>

        <div className="total_price">
          <h1>$19,760.00</h1>
          <span>( USD )</span>
        </div>
        <div className="total_pro">
          <div className="pro">10%</div>
          <span> increase compared to last week</span>
        </div>
      </div>
    </div>
  );
}
