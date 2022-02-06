import { useContext } from "react";
import { UserContext } from "../context";
import Card from "../context";

function AllData() {
  const ctx = useContext(UserContext);

  const TableBody = () => {
    const userdata = ctx.users.filter((item) => item.name != "");
    const rows = userdata.map((row, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{row.name}</td>
          <td>{row.email}</td>
          <td>{row.password}</td>
          <td>{row.balance}</td>
        </tr>
      );
    });

    return <tbody>{rows}</tbody>;
  };

  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
    );
  };

  return (
    <Card
      txtcolor="dark"
      header="All data"
      body={
        <table className="table table-striped">
          <TableHeader />
          <TableBody />
        </table>
      }
    />
  );
}

export default AllData;
