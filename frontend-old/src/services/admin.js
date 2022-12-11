import axios from "axios";

export const getQuestionsJson = async () => {
  try {
    const res = axios.get("https://project-sau.herokuapp.com/questionnaires/id/114");

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
      "https://project-sau.herokuapp.com/questionnaires/add",
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
      "https://project-sau.herokuapp.com/questionnaires/update",
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
    const res = axios.get("https://project-sau.herokuapp.com/recommendations");

    return res;
  } catch (error) {
    const err = error;
    console.log(error);
    return err;
  }
};

export const putRecommendationsObj = async newRec => {
  try {
    const res = axios.post("https://project-sau.herokuapp.com/diseases/add", newRec);

    return res;
  } catch (error) {
    const err = error;
    console.log(error);
    return err;
  }
};
