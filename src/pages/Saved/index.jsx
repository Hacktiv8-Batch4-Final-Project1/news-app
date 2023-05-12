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
                <div className="table-responsive">
                    <table className="table table-hover table-striped table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th>No</th>
                                <th>Source</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Pages</th>
                            </tr>
                        </thead>
                        <tbody>
                            {saved ? (
                                <>
                                    {saved.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.source.name}</td>
                                                <td>{item.title}</td>
                                                <td>{item.description}</td>
                                                <td>
                                                    {!item.urlToImage ? (
                                                        <img
                                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637"
                                                            alt="placeholder"
                                                            width="150"
                                                            height="150"
                                                        />
                                                    ) : (
                                                        <img
                                                            src={
                                                                item.urlToImage
                                                            }
                                                            alt="placeholder"
                                                            width="150"
                                                            height="150"
                                                        />
                                                    )}
                                                </td>
                                                <td>
                                                    <a
                                                        href={item.url}
                                                        target="_blank"
                                                    >
                                                        Go pages
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </>
                            ) : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Saved;
