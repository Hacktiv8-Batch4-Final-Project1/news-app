import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getIndonesia } from "../../components/store/reducers/indonesia";
import Card from "../../components/molecules/Card";

const Indonesia = (props) => {
    // console.log(props.cari?.CariForm?.values?.cari);
    const dispatch = useDispatch();
    const { indonesia, isLoading } = useSelector((state) => state.indonesia);
    const { dataCari } = useSelector((state) => state.cari);

    useEffect(() => {
        dispatch(getIndonesia());
    }, [dispatch]);

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center mt-3">
                {dataCari ? (
                    <h1>{props.cari?.CariForm?.values?.cari} News</h1>
                ) : (
                    <h1>News</h1>
                )}
            </div>
            <hr />
            <div className="d-flex justify-content-center row">
                {dataCari ? (
                    <Card data={dataCari} />
                ) : (
                    <>
                        {indonesia ? (
                            <>
                                {indonesia.map((item, index) => {
                                    return <Card data={item} key={index} />;
                                })}
                            </>
                        ) : null}
                    </>
                )}
                {/* {isLoading ? (
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
                )} */}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cari: state.form,
    };
};

export default connect(mapStateToProps)(Indonesia);
