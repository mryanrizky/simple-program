import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

function Tabel() {
  const [racking, setRacking] = useState([]);

  const getData = async () => {
    try {
      let response = await axios.get(
        "http://192.168.88.254/db/getdatacimory.php"
      );
      setRacking(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Table striped bordered hover variant="white">
        <thead>
          <tr>
            <th>Rack</th>
            <th>Rack Code</th>
            <th>Material</th>
            <th>Batch</th>
            <th>SAP Batch</th>
            <th>BoQ</th>
            <th>Qty Pack</th>
            <th>Supplier</th>
            <th>Qty per Pack</th>
            <th>Qty in UoM</th>
          </tr>
        </thead>
        <tbody>
          {racking.map((rack, index) => {
            return (
              <tr key={index}>
                <td>{rack.rack}</td>
                <td>{rack.rid}</td>
                <td>{rack.mtrl}</td>
                <td>{rack.bch}</td>
                <td>{rack.bsap}</td>
                <td>{rack.boq}</td>
                <td>{rack.qtyp}</td>
                <td>{rack.spl}</td>
                <td>{rack.qtys}</td>
                <td>{rack.qtyw}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Tabel;
