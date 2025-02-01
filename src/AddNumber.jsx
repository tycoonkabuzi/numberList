import { useState, useRef, useMemo } from "react";
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
  const calculateTotal = useMemo(() => {
    console.log("calculates....");
    return numbers.reduce((total, numberInArray) => total + numberInArray, 0);
  }, [numbers]);

  return (
    <>
      <h1>Number - List</h1>
      <input type="number" ref={inputRef} />
      <button onClick={addNumber}>Add Number</button>
      <div className="container-numbers">
        {numbers.map((number, index) => (
          <p key={index}>
            {index + 1 !== numbers.length ? `${number}+` : number}
          </p>
        ))}
        <Sum total={calculateTotal} />
      </div>
    </>
  );
};
export default AddNumber;
