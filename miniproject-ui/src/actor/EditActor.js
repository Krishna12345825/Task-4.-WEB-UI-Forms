import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditActor() {
  let navigate = useNavigate();

  const {id} = useParams();

  const [actor, setActor] = useState({
     actorname: "",
     category: "",
     mobileNo: "",
  });

  const { actorname, category, mobileNo } = actor;

  const onInputChange = (e) => {
    setActor({ ...actor, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadActor();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/actor/api/${id}`, actor);
    navigate("/");
  };

  const loadActor = async () => {
    const result = await axios.get(`http://localhost:8080/actor/api/get/${id}`);
    setActor(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Actor</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="actorname" className="form-label">
              Actor  Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="actorname"
                value={actorname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Category" className="form-label">
              Category
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="category"
                value={category}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobileNo" className="form-label">
              mobileNo
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="mobileNo"
                value={mobileNo}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}