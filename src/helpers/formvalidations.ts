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
    author: Yup.string().required('Author full name is required'),
  });
}

export const EditArticleValidations = () => {
  return Yup.object().shape({
    description: Yup.string()
      .required('Description is required'),
    body: Yup.string()
      .required('Content is required'),
    image: Yup.mixed<File | string>()
    .required("Please upload an image")
    .test(
      'fileSize',
      'File size should not exceed 20MB',
      (value: File | string | undefined) => {
        // If the value is a string (e.g., URL or base64), skip file size validation
        if (typeof value === 'string') {
          // Check if the string is not empty
          return value.trim() !== '';
        }
        // If value is a File, check the size
        return value && value.size <= 20 * 1024 * 1024; // 20MB
      }
    )
    .test(
      'fileType',
      'Only image files are allowed',
      (value: File | string | undefined) => {
        // If the value is a string, skip file type validation
        if (typeof value === 'string') {
          // Ensure the string is not empty
          return value.trim() !== '';
        }
        // If value is a File, check its type
        return value && (value.type === 'image/jpeg' || value.type === 'image/png' || value.type === 'image/gif');
      }
    ),
    category: Yup.string().required('Category is required'),
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author full name is required'),
  });
}