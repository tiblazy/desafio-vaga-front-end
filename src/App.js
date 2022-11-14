import { FlexContainer } from "./components/FlexContainer";
import { Main } from "./components/Main";
import { SideBar } from "./components/SideBar";

import "./App.css";

function App() {
  return (
    <div className="app">
      <FlexContainer>
        <Main />
        <SideBar />
      </FlexContainer>
    </div>
  );
}

export default App;
