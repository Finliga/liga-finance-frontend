import axios from "axios";
import { FormikHelpers } from "formik";
import { Dispatch, SetStateAction } from "react";

export const handleSubmitForm = async <T>(
  { resetForm }: FormikHelpers<T>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsError: Dispatch<SetStateAction<boolean>>,
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>,
  data: string
) => {
  try {
    setIsLoading(true);

    await axios({
      method: "post",
      url: "/api/telegram",
      data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    resetForm();
  } catch (error) {
    setIsError(true);
    return error;
  } finally {
    setIsLoading(false);
    setIsNotificationShown(true);
  }
};
