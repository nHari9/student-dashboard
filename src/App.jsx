import { useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {
  const [table, setTable] = useState(false);

  return (
    <div className="App">
      <button className="togglebtn" onClick={()=>setTable(!table) }>
        {table?"Goto students list":"Add a new student"}
        </button>
        {table ? <AddStudent/>:<ShowStudents/>}
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
