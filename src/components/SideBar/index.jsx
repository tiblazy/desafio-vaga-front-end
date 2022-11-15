import { List } from "../List";
import { Typograph } from "../Typograph";

import "../List/list.css";
import "./sidebar.css";

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div>
        <Typograph
          typographClass={"side-bar-typograph"}
          text={"Você receberá:".toUpperCase()}
        />
        <hr className="sidebar__hr" />

        {<List />}
      </div>
    </div>
  );
};
