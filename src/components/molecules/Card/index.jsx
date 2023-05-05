import React from "react";

const index = ({ data }) => {
    return (
        <>
            {data.map((item, index) => (
                <div
                    className="card mb-2 me-2"
                    style={{ width: "18rem" }}
                    key={index}
                >
                    <img
                        src={item.urlToImage}
                        className="card-img-top"
                        alt={item.title}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                    </div>
                    <div className="card-footer">
                        <a href={item.url} className="btn btn-info me-2">
                            News page
                        </a>
                        <a href="#" className="btn btn-primary">
                            Save
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
};

export default index;
