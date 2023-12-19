function displayAnswer(response) {
  let contentElement = document.querySelector("#road-trip");
  contentElement.innerHTML = response.data.answer;
}

function generateAnswer(event) {
  event.preventDefault();
  let departure = document.querySelector("#departure");
  let arrival = document.querySelector("#arrival");
  let apiKey = "e2c0b68bt1bfbc04o7da0f6ea7720334";
  let context =
    "You are an experienced travel assistant who knows well all the roads in the world. Your mission is to provide the essential stops of a roadtrip in basic HTML based on the user instructions. The output should be formatted as follow: <div class = 'stop-name'> stop name - <span class='distance'> distance from previous stop</span></div>. Every stop should include a brief description of 100 characters maximum and a line break between each stop";
  let prompt = `User instructions: Generate three stops from ${departure.value} to ${arrival.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let content = document.querySelector("#road-trip");
  content.classList.remove("hidden");
  content.innerHTML = `⏳ Generating a road trip from ${departure.value} to ${arrival.value}`;

  axios.get(apiUrl).then(displayAnswer);
}

let formElement = document.querySelector("form");
formElement.addEventListener("submit", generateAnswer);
