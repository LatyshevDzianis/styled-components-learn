import * as Yup from "yup";

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  postCode: "",
  address: "",
  additionalInfo: "",
  debitCard: "",
  nameOnCard: "",
  cardNumber: "",
  cvv2: "",
  expirationMonth: "",
  expirationYear: "",
};

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string()
    .matches(/^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, "Invalid phone number")
    .required("Required"),
  country: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  postCode: Yup.string()
    .matches(/\d{6}/, "Invalid post code")
    .required("Required"),
  address: Yup.string().required("Required"),
  additionalInfo: Yup.string().required("Required"),
  debitCard: Yup.string().required("Required"),
  nameOnCard: Yup.string().required("Required"),
  cardNumber: Yup.string()
    .matches(/\d{16}/, "Invalid debit card number")
    .required("Required"),
  cvv2: Yup.string()
    .matches(/^[0-9]{3,4}$/, "Invalid CVV2")
    .required("Required"),
  expirationMonth: Yup.string().required("Required"),
  expirationYear: Yup.string()
    .min(4, "Invalid year")
    .max(4, "Invalid year")
    .required("Required"),
});
