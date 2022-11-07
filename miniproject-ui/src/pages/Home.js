import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [actors, setActor] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadActors();
  }, []);

  const loadActors = async () => {
    const result = await axios.get("http://localhost:8080/actor/api/report");
    setActor(result.data);
  };

  const deleteActor = async (id) => {
    await axios.delete(`http://localhost:8080/actor/api/delete/${id}`);
    loadActors();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Actor Name</th>
              <th scope="col">Category</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {actors.map((actor, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{actor.actorname}</td>
                <td>{actor.category}</td>
                <td>{actor.mobileNo}</td>
                <td>
                  <Link
                    className="btn btn-info mx-2"
                    to={`/viewactor/${actor.id}`}
                  >
                    Show
                  </Link>
                  <Link
                    className="btn btn-outline-success mx-2"
                    to={`/editactor/${actor.id}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteActor(actor.id)}
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
  );
}