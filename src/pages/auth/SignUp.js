import React from "react";
import { Text, Input, Button, Checkbox } from "../../components/basic";
import { Formik } from "formik";
import { validateSignUp } from "../../utils/validation";
import { fakeRequest } from "../../utils/fakeApi";

function SignUp() {
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                passwordConfirm: "",
                isAgree: false,
            }}
            validate={(values) => {
                const errors = validateSignUp(values);

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                fakeRequest().then(() => {
                    setSubmitting(false);
                });
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                handleBlur,
                isSubmitting,
                isValid,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Input
                        width="100%"
                        label="email"
                        placeholder="enter your email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && errors.email}
                    />
                    <Input
                        placeholder="create new password"
                        label="password"
                        name="password"
                        type="password"
                        mt="20px"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && errors.password}
                    />
                    <Input
                        placeholder="confirm your password"
                        label="confirm password"
                        name="passwordConfirm"
                        type="password"
                        mt="20px"
                        value={values.passwordConfirm}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                            touched.passwordConfirm && errors.passwordConfirm
                        }
                    />
                    <Checkbox
                        mt="20px"
                        label="I confirm EVERYTHING"
                        name="isAgree"
                        checked={values.isAgree}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.isAgree && errors.isAgree}
                    />
                    <Button
                        type="submit"
                        mt="20px"
                        mb="10px"
                        disabled={!isValid}
                        isLoading={isSubmitting}
                    >
                        <Text>sign up</Text>
                    </Button>
                </form>
            )}
        </Formik>
    );
}

export default SignUp;
