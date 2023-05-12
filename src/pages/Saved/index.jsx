import React from "react";
import { useSelector } from "react-redux";

const Saved = () => {
  const { saved } = useSelector((state) => state.saved);
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center mt-3">
          <h1>Saved News</h1>
      </div>
      <hr />
      <div className="d-flex justify-content-center row">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Source</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {saved ? (
              <>
                {saved.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.source.name} <br/> <a href={item.url} target="_blank">News Page</a></td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                    </tr>
                  );
                })}
              </>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Saved;