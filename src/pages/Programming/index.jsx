import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getProgramming } from "../../components/store/reducers/programming";
import Card from "../../components/molecules/Card";

const Programming = (props) => {
    // console.log(props.cari?.CariForm?.values?.cari);
    const dispatch = useDispatch();
    const { programming, isLoading } = useSelector((state) => state.programming);
    const { dataCari } = useSelector((state) => state.cari);

    useEffect(() => {
        dispatch(getProgramming());
    }, [dispatch]);

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center mt-3">
                {dataCari ? (
                    <h1>{props.cari?.CariForm?.values?.cari} News</h1>
                ) : <h1>Programming News</h1>}
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

const mapStateToProps = (state) => {
    return {
        cari: state.form,
    };
};

export default connect(mapStateToProps)(Programming);
