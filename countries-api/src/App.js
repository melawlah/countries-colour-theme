import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Pages />
        {/* <home></home> */}
        {/* <individual country></individual> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
