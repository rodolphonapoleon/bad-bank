import NavBar from "./navbar.js";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AllData from "./components/alldata.js";
import CreateAccount from "./components/createaccount.js";
import Deposit from "./components/deposit.js";
import Home from "./components/home.js";
import Withdraw from "./components/withdraw.js";
import { UserContext } from "./context.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <UserContext.Provider
          value={{
            users: [
              {
                name: "abel",
                email: "abel@mit.edu",
                password: "secret",
                balance: 100,
              },
            ],
          }}
        >
          <div className="container" style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/CreateAccount/" element={<CreateAccount />} />
              <Route path="/deposit/" element={<Deposit />} />
              <Route path="/withdraw/" element={<Withdraw />} />
              <Route path="/alldata/" element={<AllData />} />
            </Routes>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
