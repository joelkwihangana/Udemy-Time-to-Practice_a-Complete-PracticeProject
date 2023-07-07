import "./App.css";
import AddUser from "./components/Users/AddUser";

function App() {
  const getDataFromAddUser = (formDAta) => {
    console.log(formDAta);
  };
  return (
    <div className="App">
      <AddUser getDataFromAddUser />
    </div>
  );
}

export default App;
