import "./App.css";
import Groups from "./component/Groups";
import House from "./component/House";
import Library from "./component/library/Library";
import Nav from "./component/Nav";

function App() {
  return (
    <>
      <Nav />
      <House />
      <Groups />
      <Library />
    </>
  );
}

export default App;
