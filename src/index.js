import generateJoke from "./generateJoke";
import "./style/main.scss"
import laughing from "./assets/laughing.svg"

const laughImg = document.querySelector("#laughImg")
const jokeEl = document.querySelector("#joke")
const jokeBtn = document.querySelector("#jokeBtn")
laughImg.src=laughing;

const appendJoke = async () => {
    jokeBtn.disabled = true
    const joke= await generateJoke()
    jokeBtn.disabled = false
    jokeEl.innerHTML = joke
}

(
    async()=>{
        await appendJoke()
    }
)()

jokeBtn.addEventListener("click", appendJoke)