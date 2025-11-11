import { useState } from "react";
import DatePickerComponent from "../components/Datepicker/datepicker";

function BasicDatePickerExample() {
  const [date, setDate] = useState();

  function handleChange(value: any): void {
    setDate(value);
  }

  return (
    <div
      style={{
        padding: "8px 0px 0px 0px",
        display: "flex",
        flexDirection: "row",
        gap: 20,
      }}
    >
      <DatePickerComponent changeHandler={handleChange} label="Date" />
    </div>
  );
}

export default BasicDatePickerExample;
