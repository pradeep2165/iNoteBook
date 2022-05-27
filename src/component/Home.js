import React from "react";

export default function Home() {
  return (
    <div className="container ">
      <div className="mt-4 m-2">
        <h1>Add a Note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">Title</label>
            <input type="text" className="form-control" />

          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="container">
        <h1>Your Notes</h1>
      </div>
    </div>


  );
}
