import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function StudentTable() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.log(err.message));
  }, []);

  function viewDetails(id) {
    navigate("/student/view/" + id);
  }

  function editDetails(id) {
    navigate("/student/edit/" + id);
  }

  function removeDetails(id) {
    if (window.confirm("Are you sure you want to delete this record?")) {
      fetch("http://localhost:8000/students/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Student Data Deleted Successfully.");
          window.location.reload();
        })
        .catch((err) => console.log(err.message));
    }
  }

  return (
    <div className="m-8 max-w-6xl xl:mx-auto">
      <div className="p-4 rounded-lg shadow-lg border-t-4 border-t-black">
        <div className="text-xl font-semibold text-black text-center mb-8">
          Student Records
        </div>
        <div>
          <div>
            <Link
              to="/student/create"
              className="px-5 py-2 mx-4 bg-black text-white font-semibold rounded-lg hover:bg-black/50"
            >
              Add Student
            </Link>
            <div className="mt-8 mb-4 mx-4 rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="px-6 py-4 text-left font-semibold uppercase text-sm tracking-wide">
                      ID
                    </th>
                    <th className="px-6 py-4 text-left font-semibold uppercase text-sm tracking-wide">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left font-semibold uppercase text-sm tracking-wide">
                      Place
                    </th>
                    <th className="px-6 py-4 text-left font-semibold uppercase text-sm tracking-wide">
                      Phone
                    </th>
                    <th className="px-6 py-4 text-left font-semibold uppercase text-sm tracking-wide">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students &&
                    students.map((item, index) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 text-left font-semibold text-sm tracking-wide">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 text-left font-semibold text-sm tracking-wide">
                          {item.name}
                        </td>
                        <td className="px-6 py-4 text-left font-semibold text-sm tracking-wide">
                          {item.place}
                        </td>
                        <td className="px-6 py-4 text-left font-semibold text-sm tracking-wide">
                          {item.phone}
                        </td>
                        <td className="px-6 py-4 text-left font-semibold text-sm tracking-wide flex wrap space-x-4">
                          <button
                            onClick={() => {
                              viewDetails(item.id);
                            }}
                            className="px-5 py-2 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-800/50"
                          >
                            View
                          </button>
                          <button
                            onClick={() => {
                              editDetails(item.id);
                            }}
                            className="px-5 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-500/50"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              removeDetails(item.id);
                            }}
                            className="px-5 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-500/50"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
