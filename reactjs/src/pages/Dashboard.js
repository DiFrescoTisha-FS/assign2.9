import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";

function Dashboard() {
  const [memories, setMemories] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    name: "",
    description: "",
    message: "",
  });

  const API_BASE =
    process.env.NODE_ENV === "development"
      ? `http://localhost:8000/api/v1`
      : process.env.REACT_APP_BASE_URL;

  let ignore = false;
  useEffect(() => {
    if (!ignore) {
      getMemories();
    }

    return () => {
      ignore = true;
    };
  }, []);

  const getMemories = async () => {
    setLoading(true);
    try {
      await fetch(`${API_BASE}/memories`)
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
          setMemories(data);
        });
    } catch (error) {
      setError(error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  const createMemory = async () => {
    try {
      await fetch(`${API_BASE}/memories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then(() => getMemories());
    } catch (error) {
      setError(error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createMemory();
  };

  const handleInputChanges = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="App">
      <Header />
      <div className="flex relative h-screen md:text-left md:flex-row max-w- text-center justify-evenly mx-auto items-center mb-10">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#c0c0c0'] text-5xl font-bold">
          Memories
        </h3>
        <ul className="absolute">
          {memories?.map((memory) => (
            <li key={memory._id}>
              <Link to={`/memory/${memory._id}`}>{memory.name}</Link>
            </li>
          ))}
        </ul>
        <div className="mt- flex justify-center sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-[#00FFF]  py-8 px-6 shadow rounded-lg sm:px-10">
            <form
              className="mb-0 mt-[30rem] max-w-lg	space-y-6"
              onSubmit={(event) => handleSubmit(event)}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#c2babc]"
                >
                  Memory Name
                </label>
                <div className="mt-1">
                  <input
                    className="bg-gray-300 text-gray-600 py-2 rounded-md focus:outline-none focus:ring-4 focus:ring-[#562932]"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleInputChanges}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-[#c2babc]"
                >
                  Description
                </label>
                <div className="mt-1">
                  <input
                    className="bg-gray-300 text-gray-600 py-2 rounded-md focus:outline-none focus:ring-4 focus:ring-[#562932]"
                    type="text"
                    name="description"
                    value={values.description}
                    onChange={handleInputChanges}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#c2babc]"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    className="bg-gray-300 text-gray-600 py-2 rounded-md focus:outline-none focus:ring-4 focus:ring-[#562932]"
                    type="text"
                    name="message"
                    value={values.message}
                    onChange={handleInputChanges}
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#c2babc] bg-[#4d242c] hover:bg-[#562932] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#562932]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
