import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";

function Forms() {
  const [post, setPost] = useState({
    rack: "",
    rack_code: "",
    material: "",
    batch: "",
    batch_sap: "",
    boq: "",
    qty_pack: "",
    supplier: "",
    qty_ps: "",
    qty_pw: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPost((values) => ({ ...post, [name]: value }));
  };

  function handleSubmit(e) {
    // e.preventDefault();
    // axios
    //   .post("http://192.168.88.254/db/inputdatacimory.php", { post })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    var API_Url = "http://192.168.88.254/db/inputdatacimory.php";
    var Data = {
      rack: post.rack,
      rack_code: post.rack_code,
      material: post.material,
      batch: post.batch,
      batch_sap: post.batch_sap,
      boq: post.boq,
      qty_pack: post.qty_pack,
      supplier: post.supplier,
      qty_ps: post.qty_ps,
      qty_pw: post.qty_pw,
    };

    fetch(API_Url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((response) => {
        alert(response[0].Message);
      })
      .catch((error) => {
        alert("Error" + error);
      });
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h2>Form Input Data</h2>
        <Form.Group className="mb-1" controlId="rack">
          <Form.Label>Rack</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan Rack"
            name="rack"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="rackid">
          <Form.Label>Rack Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masuk Code Rack"
            name="rack_code"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="material">
          <Form.Label>Material</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan material code"
            name="material"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="batch">
          <Form.Label>Batch Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan batch number"
            name="batch"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="batchsap">
          <Form.Label>SAP Batch Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan SAP batch Number"
            name="batch_sap"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="boq">
          <Form.Label>BoQ</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan BoQ"
            name="boq"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="qtypack">
          <Form.Label>Qty Pack</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan jumlah qty pack"
            name="qty_pack"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="supplier">
          <Form.Label>Supplier</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan nama supplier"
            name="supplier"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="qtyps">
          <Form.Label>Qty per Pack</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan qty pack size"
            name="qty_ps"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="qtypw">
          <Form.Label>Qty in UoM</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan jumlah qty in UoM"
            name="qty_pw"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Forms;
