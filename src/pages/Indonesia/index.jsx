import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../components/store/reducers/indonesia";
import Card from "../../components/molecules/Card";

const Indonesia = () => {
    const dispatch = useDispatch();
    const { data, isLoading } = useSelector((state) => state.indonesia);
    console.log(data);

    useEffect(() => {
        dispatch(getData());
    }, []);
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center mt-3">
                <h1>News</h1>
            </div>
            <hr />
            <div className="d-flex justify-content-center row">
                {data ? <Card data={data} /> : null}
            </div>
        </div>
    );
};

export default Indonesia;
