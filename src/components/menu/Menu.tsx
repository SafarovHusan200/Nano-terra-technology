import "./menu.scss";
import { menu } from "../../../data.tsx";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <div className="logo">
        <img src="logo.png" alt="" />
        <h3>Dashbord</h3>
      </div>

      <div className="menu_main">
        {menu.map((item) => (
          <div className={`menu_top ${item.listItems[0].title.toLowerCase()}`}>
            <h5>{item.title}</h5>
            <div className="menu_list">
              {item.listItems.map((listItem) => (
                <Link
                  to={listItem.url}
                  className={`menu_list_item ${listItem.title.toLowerCase()}`}
                >
                  <img src={listItem.icon} alt="" />
                  <span>{listItem.title}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
