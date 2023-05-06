import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProgramming } from "../../components/store/reducers/programming";
import Card from "../../components/molecules/Card";

const Programming = () => {
    const dispatch = useDispatch();
    const { programming, isLoading } = useSelector((state) => state.programming);
    const { dataCari } = useSelector((state) => state.cari);

    useEffect(() => {
        dispatch(getProgramming());
    }, [dispatch]);

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center mt-3">
                <h1>News</h1>
            </div>
            <hr />
            <div className="d-flex justify-content-center row">
                {dataCari ? (
                    <Card data={dataCari} />
                ) : (
                    <>
                        {isLoading ? (
                            <div className="d-flex justify-content-center">
                                <div
                                    className="spinner-border text-primary"
                                    role="status"
                                >
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <>{programming ? <Card data={programming} /> : null}</>
                        )}
                    </>
                )}

            </div>
        </div>
    );
};

export default Programming;
