import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export function FormikComponent() {
    return (
        <div className="container-fluid">
            <h2>Formik Components</h2>
            <Formik
                initialValues={{
                    "UserName": "",
                    "Age": "",
                    "City": "", 
                    "Mobile": ""
                }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values));
                }}
                validationSchema={yup.object({
                    "UserName": yup.string()
                        .required("User name is required.")
                        .min(4, "Name is too short.")
                        .max(10, "Name is too long."),
                    "Age": yup.number()
                        .required("Age is required.")
                        .positive("Age must be a positive number."),
                    "City": yup.string()
                            .required("City is required."),
                    "Mobile": yup.string()
                        .matches(/\+91\d{10}/, "Invalid mobile number. Must start with +91 followed by 10 digits.")
                        .required("Mobile is required.")
                })}
            >
                {Props => 
                    <Form>
                        <dl>
                            <dt>User Name</dt>
                            <dd><Field type="text" name="UserName" /></dd>
                            <dd className="text-danger"><ErrorMessage name="UserName" /></dd>
                            <dt>Age</dt>
                            <dd><Field type="number" name="Age" /></dd>
                            <dd className="text-danger"><ErrorMessage name="Age" /></dd>
                            <dt>City</dt>
                            <dd>
                                <Field as="select" name="City">
                                    <option value="Delhi">Delhi</option>
                                    <option value="Hyd">Hyd</option>
                                </Field>
                            </dd>
                            <dt>Mobile</dt>
                            <dd><Field type="text" name="Mobile" /></dd>
                            <dd className="text-danger"><ErrorMessage name="Mobile" /></dd>
                        </dl>
                        <button  disabled={!Props.isValid}>Register</button>
                        <button  onClick={Props.handleReset} disabled={!Props.dirty}>Reset</button>
                    </Form>
                }
            </Formik>
        </div>
    );
}


