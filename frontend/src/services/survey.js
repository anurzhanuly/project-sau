import axios from "axios";

export const postAnswers = async (answers) => {
  try {
    const res = axios.post(
      "http://www.symptom.kz/diseases/recommendations",
      answers
    );

    return res;
  } catch (error) {
    const err = error;
    console.log(error);
    return err;
  }
};
