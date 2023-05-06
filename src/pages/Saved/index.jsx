import React from "react";
import {Table} from "react-bootstrap";

const Saved = () => {
  return (
    <div className="container-fluid">
      <Table striped>
        <thead>
          <tr>
            <th>Source</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
      </Table>
      <hr />
    </div>
  );
}

export default Saved;