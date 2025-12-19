import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentTable from "./StudentTable";
import CreateStudent from "./CreateStudent";
import EditStudent from "./EditStudent";
import ViewDetails from "./ViewDetails";

export default App;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentTable />}></Route>
        <Route path="/student/create" element={<CreateStudent />}></Route>
        <Route
          path="/student/edit/:studentId"
          element={<EditStudent />}
        ></Route>
        <Route
          path="/student/view/:studentId"
          element={<ViewDetails />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
