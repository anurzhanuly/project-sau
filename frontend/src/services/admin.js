import axios from "axios";

export const postQuestionsJson = async (questions) => {
  try {
    const res = axios.post(
      "http://www.symptom.kz/questionnaires/add",
      questions
    );

    return res;
  } catch (error) {
    const err = error;
    console.log(error);
    return err;
  }
};

export const changeQuestionsJson = async (questions) => {
  try {
    const res = axios.put(
      "http://www.symptom.kz/questionnaires/update",
      questions
    );

    return res;
  } catch (error) {
    const err = error;
    console.log(error);
    return err;
  }
};
