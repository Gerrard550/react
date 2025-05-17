import "./App.css";
import Groups from "./component/Groups";
import House from "./component/House";
import Library from "./component/library/Library";
import Menu from "./component/Menu";
import Nav from "./component/Nav";
import Professions from "./component/Professions";

function App() {
  return (
    <>
      <Nav />
      <House />
      <Groups />
      <Library />

      <Menu />
      <Professions />
    </>
  );
}

export default App;
