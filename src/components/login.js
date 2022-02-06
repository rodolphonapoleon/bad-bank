import { useState, useContext } from "react";
import Card from "../context";
import { UserContext } from "../context";
import { NavLink } from "react-router-dom";

export const LoginUser = ({ user }) => {
  return (
    <>
      <h3>Welcome {user.name}</h3>
      <h5>Your balance is: ${user.balance}</h5>
    </>
  );
};
function Login() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsdisabled] = useState(true);
  const [user, setUser] = useState({});
  const ctx = useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      alert(`${label} is required. You can't leave it blank.`);
      // setStatus("Error: " + label);
      // setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleLogin() {
    // if (!validate(email, "Email")) return;
    const userLogin = ctx.users.filter(
      (item) => item.email == email && item.password == password
    );

    if (userLogin.length == 0) {
      alert("email or password is incorrect");
      clearForm();
    }
    if (userLogin.length != 0) {
      setShow(false);
      const elementIndex = ctx.users.findIndex(
        (item) => item.email == email && item.password == password
      );
      //   const element = ctx.users[elementIndex]
      ctx.users.splice(elementIndex, 1);
      ctx.users.splice(0, 0, userLogin[0]);
      setUser(userLogin[0]);
    }
    ctx.log = true;
  }

  function clearForm() {
    setEmail("");
    setPassword("");
    setIsdisabled(true);
    setShow(true);
  }

  return (
    <>
      {show ? (
        <Card
          style={{ maxWidth: "25rem", marginTop: "8rem" }}
          bgcolor="dark"
          status={status}
          body={
            <>
              <br />
              <label htmlFor="email">Email address</label>
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                  setIsdisabled(false);
                  if (!e.currentTarget.value) setIsdisabled(true);
                }}
              />
              <br />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                  setIsdisabled(false);
                  if (!e.currentTarget.value) setIsdisabled(true);
                }}
              />
              <br />
              <button
                disabled={isDisabled ? true : false}
                type="submit"
                className="btn btn-primary"
                onClick={handleLogin}
              >
                Login
              </button>
            </>
          }
        />
      ) : (
        <Card
          style={{ maxWidth: "25rem", marginTop: "8rem" }}
          bgcolor="dark"
          status={status}
          body={
            <>
              <LoginUser user={user} />
              <br />
              <NavLink to="/deposit" className="btn btn-primary rounded-pill">
                Make a deposit
              </NavLink>
              <NavLink to="/withdraw" className="btn btn-primary rounded-pill">
                Make a withdraw
              </NavLink>
            </>
          }
        />
      )}
    </>
  );
}

export default Login;
