import React from "react";
import { Link } from "react-router-dom";
import CariForm from "../CariForm";
import { useDispatch } from "react-redux";
import { getCari } from "../../store/reducers/cari";

const Navbar = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        dispatch(getCari(values));
    };
    return (
        <nav
            className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
            data-bs-theme="dark"
        >
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to={"/"}>
                    Navbar
                </Link> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to={"/"}
                            >
                                Indonesia
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to={"/programming"}
                            >
                                Programing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to={"/covid"}
                            >
                                COVID-19
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to={"/saved"}
                            >
                                Saved
                            </Link>
                        </li>
                    </ul>
                    <CariForm onSubmit={handleSubmit} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
