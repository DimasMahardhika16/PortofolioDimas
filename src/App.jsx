import Player from "./component/Player.jsx";
import Sidebar from "./component/Sidebar.jsx";
import Display from "./component/Display.jsx";

const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
    </div>
  );
};

export default App;
