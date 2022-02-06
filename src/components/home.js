import Card from "../context";
import banner from "../bank.png";
import belfoto from "../belpic.jpg";
import { Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context";
import LoginButton from "./loginbutton";

function Home() {
  const ctx = useContext(UserContext);
  return (
    <>
      <div className="text-end text-uppercase">{ctx.users[0].name}</div>
      <Row>
        <Col className="text-end">
          <LoginButton />
        </Col>
      </Row>
      <div className="card mt-3">
        <div className="row g-0 text-center">
          <div className="col-md-6 bg-primary">
            <Card
              style={{ maxWidth: "18rem" }}
              txtcolor="white"
              bgcolor="primary"
              title="Welcome to BadBank"
              text="The best online banking in US"
              body={
                <Image
                  src={banner}
                  className="img-fluid"
                  alt="Responsive image"
                />
              }
            />
          </div>
          <div className="col-md-6">
            <Image src={belfoto} className="img-fluid" alt="image" />
          </div>
        </div>
      </div>
      <div className="card text-center">
        <h5 className="card-header fs-1">
          Finally a bank that lets you start saving online
        </h5>
        <div className="card-body">
          <h5 className="card-title fs-4">Choose smarter</h5>
          <p className="card-text mx-5">
            Along with a competitive, variable rate and no monthly maintenance
            fees, BadBank comes with tools to help grow your money faster. We
            found people have saved, on average, 2x more when they’ve used our
            smart savings tools.
          </p>
          <Link
            to="/createaccount"
            className="btn btn-primary rounded-pill fs-5 px-3"
          >
            Create an Account
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
