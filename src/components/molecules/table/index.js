import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import DataTable from "react-data-table-component";

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

  const column = [
    {
      name: "Rack",
      selector: (row) => row.rack,
      sortable: true,
    },
    {
      name: "Rack ID",
      selector: (row) => row.rid,
      sortable: true,
    },
    {
      name: "Material",
      selector: (row) => row.mtrl,
      sortable: true,
    },
    {
      name: "Batch",
      selector: (row) => row.bch,
      sortable: true,
    },
    {
      name: "SAP Batch",
      selector: (row) => row.bsap,
      sortable: true,
    },
    {
      name: "BoQ",
      selector: (row) => row.boq,
      sortable: true,
    },
    {
      name: "Qty Pack",
      selector: (row) => row.qtyp,
      sortable: true,
    },
    {
      name: "Supplier",
      selector: (row) => row.spl,
      sortable: true,
    },
    {
      name: "Qty per pack",
      selector: (row) => row.qtys,
      sortable: true,
    },
    {
      name: "Qty UoM",
      selector: (row) => row.qtyw,
      sortable: true,
    },
  ];

  return (
    <div>
      <DataTable columns={column} data={racking} pagination></DataTable>
    </div>
  );
}

export default Tabel;
