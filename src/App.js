import NavBar from "./navbar.js";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AllData from "./components/alldata.js";
import CreateAccount from "./components/createaccount.js";
import Deposit from "./components/deposit.js";
import Home from "./components/home.js";
import Withdraw from "./components/withdraw.js";
import Login from "./components/login.js";
import Logout from "./components/logout";
import { UserContext } from "./context.js";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider
          value={{
            users: [
              {
                name: "",
                email: "",
                password: "",
                balance: null,
              },
            ],
            log: false,
            login: false,
          }}
        >
          <div
            className=""
            style={{
              backgroundColor: "#F0F8FF",
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <NavBar />
            <div
              className="container pb-5"
              style={{ padding: "20px", flex: 1 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/CreateAccount/" element={<CreateAccount />} />
                <Route path="/deposit/" element={<Deposit />} />
                <Route path="/withdraw/" element={<Withdraw />} />
                <Route path="/alldata/" element={<AllData />} />
                <Route path="/login/" element={<Login />} />
                <Route path="/logout/" element={<Logout />} />
              </Routes>
            </div>
            <div className="row bg-primary">
              <div
                className="col"
                style={{
                  width: "100%",
                  height: "6px",
                }}
              ></div>
            </div>
            <Footer />
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
