import * as Yup from "yup";

export const LoginValidations = () => {
  return Yup.object().shape({
    email: Yup.string()
      .email("Invalid email, please provide a valid email.")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
};

export const ArticleValidations = () => {
  return Yup.object().shape({
    description: Yup.string()
      .required('Description is required'),
    body: Yup.string()
      .required('Content is required'),
    image: Yup.mixed<File>().required("Please upload image").test(
      'fileSize',
      'File size should not exceed 20MB',
      (value) => !value || (value && value.size <= 20 * 1024 * 1024)
    ).test(
      'fileType',
      'Only image is allowed',
      (value) => !value || (value && (value.type === 'image/jpeg' || value.type === 'image/png' || value.type === 'image/gif'))
    ),
    category: Yup.string().required('Category is required'),
    title: Yup.string().required('Title is required'),
  });
}