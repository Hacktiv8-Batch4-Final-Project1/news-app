import React from "react";
import { Field, reduxForm } from "redux-form";

let CariForm = (props) => {
    const { handleSubmit, submitting } = props;

    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <Field
                name="cari"
                type="text"
                component="input"
                placeholder="Cari berita"
                className="form-control me-2"
            />
            <button
                className="btn btn-outline-success"
                type="submit"
                disabled={submitting}
            >
                Cari
            </button>
        </form>
    );
};

export default CariForm = reduxForm({
    form: "CariForm",
})(CariForm);
