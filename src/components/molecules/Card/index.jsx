import moment from "moment/moment";
import React from "react";
import { setData, removeData } from "../../store/reducers/saved";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ data, index }) => {
    const { saved } = useSelector((state) => state.saved);
    // console.log(saved);
    const dispatch = useDispatch();
    const handleSave = () => {
        // console.log(data);
        dispatch(setData(data));
    };

    return (
        <>
                <div
                    className="card mb-2 me-2"
                    style={{ width: "18rem" }}
                    key={index}
                >
                    <div className="card-body">
                        <p>{data.author}</p>
                        <p>
                            {moment(data.publishedAt).format(
                                "MMMM Do YYYY, h:mm:ss z"
                            )}
                        </p>
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.description}</p>
                    </div>
                    <div className="card-footer">
                        <a
                            href={data.url}
                            className="btn btn-info me-2"
                            target="_blank"
                        >
                            News page
                        </a>
                        
                        {saved.find((item) => item.url === data.url) ? (
                            
                            <button
                                className="btn btn-danger"
                                onClick={() => dispatch(removeData(data.url))}
                            >
                                Un-Saved
                            </button>
                        ) : (
                            <button
                                className="btn btn-primary"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                        )}
                    </div>
                </div>
        </>
    );
};

export default Card;
