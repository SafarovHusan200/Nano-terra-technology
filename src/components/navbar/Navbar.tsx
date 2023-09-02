import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_roll">
        <img src="home.png" alt="" />
        <img src="right.png" alt="" />
        <span>Document</span>
      </div>

      <div className="navbar_info">
        <div className="navbar_search">
          <input type="search" placeholder="John Doe" />
          <img src="search.png" alt="" />
        </div>

        <img src="notification.png" alt="" className="notification" />

        <div className="navbar_user">
          <div className="navbar_username">Kruluz Utsman</div>
          <img src="user.png" alt="" />
        </div>
      </div>
    </div>
  );
}
