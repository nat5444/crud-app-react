import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateStudent() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    place: "",
    phone: "",
  });
  const [students, setStudents] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.log(err.message));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = "Full Name is required.";
    }
    if (!formData.place) {
      validationErrors.place = "Place is required.";
    }
    if (!formData.phone) {
      validationErrors.phone = "Phone Number is required.";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    fetch("http://localhost:8000/students", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        alert("Student Data Added Successfully.");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg border-t-4 border-t-black overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 text-center">
              Add Student
            </h2>
          </div>

          <form action="" className="p-6 sm:p-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  placeholder="Enter Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="place"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Place
                </label>
                <input
                  type="text"
                  id="place"
                  name="place"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  placeholder="Enter Place"
                  value={formData.place}
                  onChange={handleChange}
                />
                {errors.place && (
                  <p className="mt-2 text-sm text-red-600">{errors.place}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  placeholder="+1 234 567 8900"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              <div className="flex gap-4 justify-end">
                <button
                  type="submit"
                  className="bg-black px-4 py-2 rounded-lg text-white hover:bg-black/50"
                >
                  Save
                </button>
                <Link
                  to="/"
                  className="bg-black px-4 py-2 rounded-lg text-white hover:bg-black/50"
                >
                  Back
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
