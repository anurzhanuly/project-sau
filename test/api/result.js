const postQuestions = async (answers) => {
  const response = await $fetch('https://project-sau.herokuapp.com/diseases/recommendations', {
    method: 'post',
    body: answers
  });

  return response;
};

export default postQuestions;
