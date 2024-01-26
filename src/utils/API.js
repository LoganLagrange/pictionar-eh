const URL_PREFIX = "https://pictionar-eh-api-7e9c6522d932.herokuapp.com"

const API = {
    getAllAnswers: () => {
        return fetch(`${URL_PREFIX}/api/answers`).then(res => res.json())
    },
    login: userObj => {
        return fetch(`${URL_PREFIX}/api/users/login`, {
            method: "POST",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("network request failed")
            }
        })
    },
    signup: userObj => {
        return fetch(`${URL_PREFIX}/api/users`, {
            method: "POST",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("network request failed")
            }
        })
    },
}

export default API