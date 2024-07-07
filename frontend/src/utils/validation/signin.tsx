
import * as yup from "yup";

export const schema = yup
  .object()
  .shape({
    email: yup.string().email("Invalid email").required("Email is required"),
      password: yup.string()
          .min(8, 'Password must be at least 8 characters')
          .max(20, 'Password must not exceed 20 characters')
          .required("Password is required"),
  })
  .required("required");

