import React from "react";
import { useState, useContext } from "react";
import Card from "../context";
import { UserContext } from "../context";
import { NavLink } from "react-router-dom";
import LoginButton from "./loginbutton";
import { Row, Col } from "react-bootstrap";

function CreateAccount() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsdisabled] = useState(true);
  const [login, setLogin] = useState(false);
  const ctx = useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      alert(`${label} is required. You can't leave it blank.`);
      // setStatus("Error: " + label);
      // setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (field === password && password.length < 8) {
      alert("Password must be at least 8 characters");
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    console.log(password.length);
    if (!validate(name, "Name")) return;
    if (!validate(email, "Email")) return;
    if (!validate(password, "Password")) return;
    ctx.users.push({ name, email, password, balance: 0 });
    setShow(false);
    ctx.login = true;
  }

  function handleLogin() {
    console.log(ctx.log);
    if (ctx.login) {
      const elementIndex = ctx.users.findIndex(
        (item) => item.email == email && item.password == password
      );
      ctx.users.splice(elementIndex, 1);
      ctx.users.splice(0, 0, {
        name: name,
        email: email,
        password: password,
        balance: 0,
      });
      ctx.log = true;
    } else return;
  }

  // function clearForm() {
  //   setName("");
  //   setEmail("");
  //   setPassword("");
  //   setIsdisabled(true);
  //   setShow(true);
  // }

  return (
    <>
      {ctx.users[0].name != "" &&
      ctx.users[0].email != "" &&
      ctx.users[0].password != "" &&
      show ? (
        <>
          <Row>
            <Col className="text-end">
              <LoginButton />
            </Col>
          </Row>
          <h1>You have to logout to be able to create another account</h1>
        </>
      ) : (
        <>
          <Row>
            <Col className="text-end">
              <LoginButton />
            </Col>
          </Row>

          {show ? (
            <>
              <div className="fs-1 mt-4 text-center text-primary">
                Let's create your account
              </div>

              <Card
                style={{ maxWidth: "25rem", marginTop: "3rem" }}
                bgcolor="dark"
                header="Create Account"
                status={status}
                body={
                  <>
                    <label htmlFor="name">Name</label>
                    <input
                      type="input"
                      className="form-control"
                      id="name"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => {
                        setName(e.currentTarget.value);
                        setIsdisabled(false);
                        if (!e.currentTarget.value) setIsdisabled(true);
                      }}
                    />
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
                      onClick={() => {
                        handleCreate();
                        handleLogin();
                      }}
                    >
                      Create Account
                    </button>
                  </>
                }
              />
            </>
          ) : (
            <>
              <div className="fs-1 mt-4 text-center text-primary">
                Congratulations, {ctx.users[0].name}
              </div>
              <Card
                style={{ maxWidth: "25rem", marginTop: "3rem" }}
                bgcolor="dark"
                header="Create Account"
                status={status}
                body={
                  <>
                    <h5 className="fs-2">Success</h5>
                    <br />
                    <NavLink
                      to="/deposit"
                      className="btn btn-primary rounded-pill ms-4"
                    >
                      Make your first deposit
                    </NavLink>
                  </>
                }
              />
            </>
          )}
        </>
      )}
    </>
  );
}

export default CreateAccount;
