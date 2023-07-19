import { useEffect, useState, Button } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

function Tabel() {
  const [racking, setRacking] = useState([]);

  const deleteData = (id) => {
    try {
      let response = axios.delete(
        `http://192.168.88.254/db/deletedatacimory.php/${id}}`
      );
      setRacking(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

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
      width: "80px",
    },
    {
      name: "Rack ID",
      selector: (row) => row.rid,
      sortable: true,
      width: "80px",
    },
    {
      name: "Material",
      selector: (row) => row.mtrl,
      sortable: true,
      width: "80px",
    },
    {
      name: "Batch",
      selector: (row) => row.bch,
      sortable: true,
      width: "90px",
    },
    {
      name: "SAP Batch",
      selector: (row) => row.bsap,
      sortable: true,
      width: "150px",
    },
    {
      name: "BoQ",
      selector: (row) => row.boq,
      sortable: true,
      width: "80px",
    },
    {
      name: "Qty Pack",
      selector: (row) => row.qtyp,
      sortable: true,
      width: "80px",
    },
    {
      name: "Supplier",
      selector: (row) => row.spl,
      sortable: true,
      width: "80px",
    },
    {
      name: "Qty per pack",
      selector: (row) => row.qtys,
      sortable: true,
      width: "80px",
    },
    {
      name: "Qty UoM",
      selector: (row) => row.qtyw,
      sortable: true,
      width: "80px",
    },
    {
      name: "Action",
      button: true,
      cell: (row) => (
        <button
          className="btn btn-outline btn-xs btn-danger"
          onClick={(e) => deleteData(e, row.rid)}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <div>
      <DataTable columns={column} data={racking} pagination></DataTable>
    </div>
  );
}

export default Tabel;
