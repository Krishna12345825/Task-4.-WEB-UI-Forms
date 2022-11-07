import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewActor() {
  const [actor, setActor] = useState({
    actorname: "",
    category: "",
    mobileNo: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadActor();
  }, []);

  const loadActor = async () => {
    const result = await axios.get(`http://localhost:8080/actor/api/get/${id}`);
    setActor(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Actor Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {actor.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>actorname:</b>
                  {actor.actorname}
                </li>
                <li className="list-group-item">
                  <b>category:</b>
                  {actor.category}
                </li>
                <li className="list-group-item">
                  <b>mobileNo:</b>
                  {actor.mobileNo}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}