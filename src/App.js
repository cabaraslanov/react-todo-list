import TodoWrapper from "./components/TodoWrapper";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Provider from "./context/TodoContext";
import "./index.css";

function App() {

  return (
    <div className="App">
      <Provider>
        <TodoWrapper />

        <ToastContainer />

      </Provider>
    </div>
  );
}

export default App;
