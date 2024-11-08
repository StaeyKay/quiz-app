const BASE_URL = "http://localhost:5050/api/v1";

// Get questions endpoint integration
export async function getQuestions(category) {
  const questionsResponse = await fetch(`${BASE_URL}/questions/${category}`, {
    method: "GET",
    headers: {},
  });

  const response = await questionsResponse.json();
  return response;
}
