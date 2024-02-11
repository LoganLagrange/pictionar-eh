const URL_PREFIX = "https://pictionar-eh-api-7e9c6522d932.herokuapp.com"

const API = {
    getAllAnswers: () => {
        return fetch(`${URL_PREFIX}/api/answers`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
    },
    login: (userObj) => {
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
                throw new Error("Login request failed");
            }
        })
    },
    signup: (userObj) => {
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
                return res.text().then(text => {
                    throw new Error(`Signup request failed: ${text}`);
                });
            }
        })
    },
    highscore: (id) => {
        return fetch(`${URL_PREFIX}/api/users/${id}`)
            .then(res=>{
                if(res.ok) {
                    return res.json()
                } else {
                    throw new Error('Failed finding user')
                }
            });
    },
    updateHs: (id, score) => {
        return fetch(`${URL_PREFIX}/api/users/${id}`, {
            method: "PUT",
            body: JSON.stringify({highscore: score}),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            if(res.ok) {
                return res.json()
            } else {
                throw new Error('Failed updating highscore')
            }
        })
    }
}

export default API;
