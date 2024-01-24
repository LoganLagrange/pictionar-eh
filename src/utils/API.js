const URL_PREFIX = "https://pictionar-eh-api-7e9c6522d932.herokuapp.com"

const API = {
    getAllAnswers:() => {
        return fetch(`${URL_PREFIX}/api/answers`).then(res=>res.json())
    },

    getRandomAnswer:() => {
        return fetch(`${URL_PREFIX}/api/answers/random`).then(res=>res.json())
    }
}

export default API