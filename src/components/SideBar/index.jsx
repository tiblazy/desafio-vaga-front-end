import { Typograph } from "../Typograph";

import "../List/list.css";
import "./sidebar.css";

export const SideBar = () => {
  // const mapDays =

  return (
    <div className="sidebar">
      <div>
        <Typograph
          typographClass={"side-bar-typograph"}
          text={"Você receberá:".toUpperCase()}
        />
        <hr className="sidebar__hr" />

        <ul className="days__list"></ul>
        {/* {mapDays} */}
      </div>
    </div>
  );
};
