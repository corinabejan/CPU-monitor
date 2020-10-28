import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user } = useAuth0();
  console.log(user);

  return (
    <div className="App">
      <h1>CPU MONITOR</h1>
      {user ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}

export default App;
