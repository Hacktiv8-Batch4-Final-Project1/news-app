import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getCovid } from "../../components/store/reducers/covid";
import Card from "../../components/molecules/Card";

const Covid = (props) => {
    // console.log(props.cari?.CariForm?.values?.cari);
    const dispatch = useDispatch();
    const { covid, isLoading } = useSelector((state) => state.covid);
    const { dataCari } = useSelector((state) => state.cari);

    useEffect(() => {
        dispatch(getCovid());
    }, [dispatch]);

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center mt-3">
                {dataCari ? (
                    <h1>{props.cari?.CariForm?.values?.cari} News</h1>
                ) : <h1>COVID-19 News</h1>}
            </div>
            <hr />
            <div className="d-flex justify-content-center row">
            {dataCari ? (
                    <>
                        {
                            dataCari.map((item, index) => {
                                return (
                                    <Card data={item} key={index} />
                                )
                            })
                        }
                    </>
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
                            <>{covid ? (
                                <>
                                    {
                                        covid.map((item, index) => {
                                            return (
                                                <Card data={item} key={index} />
                                            )
                                        })
                                    }
                                </>
                            ) : null}</>
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

export default connect(mapStateToProps)(Covid);
