import axios from "axios"
const generateJoke =  async () =>{
    const config = {
        headers:{
            Accept: "application/json"
        }
    }
    const joke = await axios.get("https://icanhazdadjoke.com", config)
    return joke.data.joke
}

export default generateJoke