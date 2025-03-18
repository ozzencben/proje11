const jokes = document.querySelector(".jokes");
const jokeBtn = document.querySelector("#btn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            accept: "application/json"
        }
    };

    const res = await fetch("https://icanhazdadjoke.com/", config);
    const data = await res.json();
    jokes.innerHTML = data.joke;
}