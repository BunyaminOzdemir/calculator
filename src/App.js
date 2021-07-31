import React from "react";
import { useState } from "react";
import { Button } from "reactstrap";
import { InputGroup } from "reactstrap";

function App() {
  const [value, setValue] = useState("0");

  const inputValueHandle = (e) => {
    setValue(value.concat(e.target.name));
  };

  const clear = () => {
    setValue("");
  };

  const backspace = () => {
    setValue(value.slice(0, value.length - 1)); // value.length silinsede olur.
  };
  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch (err) {
      setValue("Error");
    }
  };

  return (
    <div
      className="container bg-dark col-4 rounded"
      style={{ height: "500px" }}
    >
      <h1 className="text-center mt-5 mb-4 text-white">React CALCULATOR</h1>
      <InputGroup className="container mb-4">
        <span className="text-white h2">{value}</span>
      </InputGroup>
      <div className="container">
        <div className="row mb-4">
          <Button
            onClick={clear}
            color="info"
            size="lg"
            className="col-6 me-2 "
          >
            Clear
          </Button>
          <Button
            onClick={backspace}
            name="DEL"
            color="info"
            className="col me-2"
          >
            DEL
          </Button>
          <Button
            onClick={inputValueHandle}
            name="/"
            color="warning"
            className="col me-2"
          >
            &divide;
          </Button>
        </div>
        <div className="row mb-4">
          <Button
            onClick={inputValueHandle}
            name="7"
            size="lg"
            className="col me-2"
          >
            7
          </Button>
          <Button onClick={inputValueHandle} name="8" className="col me-2">
            8
          </Button>
          <Button onClick={inputValueHandle} name="9" className="col me-2">
            9
          </Button>
          <Button
            onClick={inputValueHandle}
            name="*"
            color="warning"
            className="col me-2"
          >
            &times;
          </Button>
        </div>
        <div className="row mb-4">
          <Button
            onClick={inputValueHandle}
            name="4"
            size="lg"
            className="col me-2"
          >
            4
          </Button>
          <Button onClick={inputValueHandle} name="5" className="col me-2">
            5
          </Button>
          <Button onClick={inputValueHandle} name="6" className="col me-2">
            6
          </Button>
          <Button
            onClick={inputValueHandle}
            name="-"
            color="warning"
            className="col me-2"
          >
            &ndash;
          </Button>
        </div>
        <div className="row mb-4">
          <Button
            onClick={inputValueHandle}
            name="1"
            size="lg"
            className="col me-2"
          >
            1
          </Button>
          <Button onClick={inputValueHandle} name="2" className="col me-2">
            2
          </Button>
          <Button onClick={inputValueHandle} name="3" className="col me-2">
            3
          </Button>
          <Button
            onClick={inputValueHandle}
            name="+"
            color="warning"
            className="col me-2"
          >
            +
          </Button>
        </div>
        <div className="row mb-4">
          <Button onClick={inputValueHandle} name="0" className="col-6 me-2">
            0
          </Button>
          <Button onClick={inputValueHandle} name="." className="col me-2">
            .
          </Button>
          <Button
            onClick={calculate}
            name="="
            size="lg"
            color="danger"
            className="col me-2"
          >
            =
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
