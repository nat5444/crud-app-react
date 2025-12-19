import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ViewDetail() {
  const { studentId } = useParams();
  const [student, setStudent] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/students/" + studentId)
      .then((res) => res.json())
      .then((data) => setStudent(data))
      .catch((err) => console.log(err.message));
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg border-t-4 border-t-black overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 text-center">
              Student Details
            </h2>
          </div>

          <div className="p-6 sm:p-8">
            <div className="space-y-6">
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">
                  Student ID
                </div>
                <div className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors">
                  {student.id}
                </div>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <div className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors">
                  {student.name}
                </div>
              </div>

              <div>
                <label
                  htmlFor="place"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Place
                </label>
                <div className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors">
                  {student.place}
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <div className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors">
                  {student.phone}
                </div>
              </div>

              <div className="flex gap-4 justify-end">
                <Link
                  to="/"
                  className="bg-black px-4 py-2 rounded-lg text-white hover:bg-black/50"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
