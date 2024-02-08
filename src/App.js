import { AllRoutes } from "./routes/AllRoutes";
import { Header} from "./components"


function App() {
  return (
    <div className="App dark:bg-slate-800 ">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;
