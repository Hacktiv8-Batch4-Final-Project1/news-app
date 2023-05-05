import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIndonesia } from "../../components/store/reducers/indonesia";
import Card from "../../components/molecules/Card";

const Indonesia = () => {
    const dispatch = useDispatch();
    const { indonesia, isLoading } = useSelector((state) => state.indonesia);
    // console.log(indonesia);

    useEffect(() => {
        dispatch(getIndonesia());
    }, [dispatch]);

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center mt-3">
                <h1>News</h1>
            </div>
            <hr />
            <div className="d-flex justify-content-center row">
                {isLoading ? (
                    <div className="d-flex justify-content-center">
                        <div
                            className="spinner-border text-primary"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <>{indonesia ? <Card data={indonesia} /> : null}</>
                )}
            </div>
        </div>
    );
};

export default Indonesia;
