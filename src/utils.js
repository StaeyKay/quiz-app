const BASE_URL = "http://localhost:5050/api/v1";

// Save session data in local storage
export function saveSession(playerName){
  const playerSession = JSON.stringify(playerName.session)
  window.localStorage.setItem("DATABASE", playerSession)
}


// Get questions endpoint integration
export async function getQuestions(category) {
  const questionsResponse = await fetch(`${BASE_URL}/questions/${category}`, {
    method: "GET",
    headers: {},
  });

  const response = await questionsResponse.json();
  return response;
}

// Starting a game with session management
export async function StartGame(playerName) {
  try {
    const playerResponse = await fetch(`${BASE_URL}/players/start`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ name: playerName }),
    });
    const response = await playerResponse.json();
    return response;
  } catch (error) {
    console.error("Error starting game:", error);
  }
}
