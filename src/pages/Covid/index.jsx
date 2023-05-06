import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCovid } from "../../components/store/reducers/covid";
import Card from "../../components/molecules/Card";

const Covid = () => {
    const dispatch = useDispatch();
    const { covid, isLoading } = useSelector((state) => state.covid);
    const { dataCari } = useSelector((state) => state.cari);

    useEffect(() => {
        dispatch(getCovid());
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
                            <>{covid ? <Card data={covid} /> : null}</>
                        )}
                    </>
                )}

            </div>
        </div>
    );
};

export default Covid;
