import { useState } from "react";
import Calendar from "react-calendar";

function Agenda() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="calendar-container">
      <Calendar onChange={setDate} value={date} selectRange={true} />
    </div>
  );
}
export default Agenda;
