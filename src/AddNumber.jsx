import { useState, useRef } from "react";
import Sum from "./Sum";
const AddNumber = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const inputRef = useRef();
  const addNumber = () => {
    if (inputRef.current.value !== "") {
      setNumbers((prev) => {
        return [...prev, parseInt(inputRef.current.value)];
      });
    }
  };
  const calculateTotal = () => {
    return numbers.reduce((total, numberInArray) => total + numberInArray, 0);
  };

  return (
    <>
      <h1>Number - List</h1>
      <input type="number" ref={inputRef} />
      <button onClick={addNumber}>Add Number</button>
      <div className="container-numbers">
        {numbers.map((number, index) => (
          <p key={index}> {number} +</p>
        ))}
        <Sum total={calculateTotal()} />
      </div>
    </>
  );
};
export default AddNumber;
