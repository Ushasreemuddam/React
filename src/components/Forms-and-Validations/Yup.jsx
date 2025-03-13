import { useFormik } from "formik";
import * as yup from "yup";

export function YupDemo() {
    const formik = useFormik({
        initialValues: {
            "UserName": "",
            "Age": 0,
            "City": "",
            "Mobile": ""
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        },
        validationSchema: yup.object({
            "UserName": yup.string()
                .required("User name required.")
                .min(4, "Name Too Short..")
                .max(10, "Name Too Long"),
            "Age": yup.number()
                .required("Age Required"),
            "City": yup.string()
                .required("City Required"),
            "Mobile": yup.string()
                .matches(/\+91\d{10}/, "Invalid mobile, must start with +91 followed by 10 digits.")
                .required("Mobile Required")
        })
    });

    return (
        <div className="container-fluid">
            <h2>Register user</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="Age" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange}>
                            <option value="">Select Your City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
