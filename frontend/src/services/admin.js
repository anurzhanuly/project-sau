import axios from "axios";

export const getQuestionsJson = async () => {
  try {
    const res = axios.get("http://www.symptom.kz/questionnaires/id/114");

    return res;
  } catch (error) {
    const err = error;
    console.log(error);
    return err;
  }
};

export const postQuestionsJson = async questions => {
  try {
    const res = axios.post(
      "http://www.symptom.kz/questionnaires/add",
      questions,
    );

    return res;
  } catch (error) {
    const err = error;
    console.log(error);
    return err;
  }
};

export const changeQuestionsJson = async questions => {
  try {
    const res = axios.put(
      "http://www.symptom.kz/questionnaires/update",
      questions,
    );

    return res;
  } catch (error) {
    const err = error;
    console.log(error);
    return err;
  }
};

export const getRecommendationsJson = async () => {
  try {
    const res = axios.get("http://www.symptom.kz/recommendations");

    return res;
  } catch (error) {
    const err = error;
    console.log(error);
    return err;
  }
};
