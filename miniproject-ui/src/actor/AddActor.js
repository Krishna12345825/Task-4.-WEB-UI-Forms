import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddActor() {
  let navigate = useNavigate();

  const [actor, setActor] = useState({
    actorname: "",
    category: "",
    mobileNo: "",
  });

  const { actorname, category, mobileNo } = actor;

  const onInputChange = (e) => {
    setActor({ ...actor, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/actor/api/save", actor);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Actor</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
               Actor Name
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
                placeholder="Enter your Category"
                name="category"
                value={category}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobileNo" className="form-label">
                Mobile Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Mobile Number"
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