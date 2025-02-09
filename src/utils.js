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

// Utility function to add player
export async function savePlayer(player) {
  const playerResponse = await fetch(`${BASE_URL}/players/start`, {
    method: "POST",
    body: JSON.stringify(player),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const response = playerResponse.json();
  return response;
}

// Utility function to retrieve player
export async function getPlayer(playerId) {
  const playerResponse = await fetch(`${BASE_URL}/players/${playerId}`, {
    method: "GET",
    headers: {}
  });
  const response = await playerResponse.json();
  return response;
}


// Starting a game with session management
// export async function StartGame(playerName) {
//   try {
//     const playerResponse = await fetch(`${BASE_URL}/players/start`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify({ name: playerName }),
//     });
//     const response = await playerResponse.json();
//     return response;
//   } catch (error) {
//     console.error("Error starting game:", error);
//   }
// }

// Function to store the player score
export async function saveScore({score, playerId}) {
  try {
    const scoreResponse = await fetch(`${BASE_URL}/score`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({score, playerId})
    });
    const response = await scoreResponse.json();
    return response;
  } catch (error) {
    console.log("error saving score:", error)
  }
}
