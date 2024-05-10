import * as Yup from 'yup'

export const SignupValidationSchema = Yup.object({
    firstName: Yup.string().required().min(2, "First name must be at least 2 characters"),
    lastName: Yup.string().required().min(3, "Last name must be at least 3 characters"),
    email: Yup.string().required().min(6, "Email must be at least 6 characters").email("Invalid Email Format"),
    password: Yup.string().required().min(7, "Password must be at least 7 characters"),
})
