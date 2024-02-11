import { io } from 'socket.io-client'
import saveData from '../components/GameFunctions/DrawingCanvas'
import { useRef } from 'react'
import API from './API'

// CRITICAL replace with production url
const socket = io('https://pictionar-eh-socket-53fe94c23753.herokuapp.com/')


const socketUse = {
    // Socket event listeners
    connect: (room) => {
        socket.on('connect', () => {
            console.log(`socket connected: ${socket.connected}`)

            socket.on('disconnect', (room) => {
                socket.emit('leave', room)
            })
        })

    },

    RecTimer: (setTimer) => {
        socket.on('startTime', timeLeft => {
            setTimer(timeLeft);
        })
    },
    RecMessage: (setMessages) => {
        console.log('recMessage trigger')
        socket.on('broadcastMessage', (message, username, correctBool, timeLeft) => {
            const currentUsername = localStorage.getItem('username');
            setMessages((prevMessages) => [...prevMessages, { message: message, username: username }]);
            console.log('recMessage: message received:', message, correctBool, currentUsername, username)

            

            // console.log('recMEssage:', currentUsername)
            if (username === currentUsername && correctBool === true) {
                console.log('score update trigger')
                const currentScore = parseInt(localStorage.getItem('currentScore'))
                const newScore = currentScore + timeLeft;
                console.log('newScore:', newScore);
                localStorage.setItem('currentScore', newScore)

                // Check if current score is higher that highscore and update
                const currentHighscore = localStorage.getItem('myHighscore')
                console.log('hs before:', currentHighscore)
                const currentUserId = localStorage.getItem('userId');
                if(newScore > currentHighscore) {
                    localStorage.setItem('myHighscore', newScore);
                    API.updateHs(currentUserId, newScore);
                    const newHs = localStorage.getItem('myHighscore');
                    console.log('hs after:', newHs)
                }
            }
        })
    },

    recRooms: (callback) => {
        socket.on('activeRooms', (rooms) => {
            console.log(rooms);
            callback(rooms);
        })
    },

    recDrawer: (callback) => {
        socket.on('userSelect', (data) => {
            // const {drawer} = data;
            callback(data)
            console.log(`You are the drawer: ${data}`)
        })
    },

    recDraw: (callback) => {
        socket.on('drawChange', (data) => {
            callback(data);
            console.log(`change to drawing ${data}`)
        })
    },

    recWord: (callback) => {
        socket.on('chosenWord', data => {
            callback(data);
        })
    },

    // Socket emits
    requestRooms: () => {
        socket.emit('requestRooms');
    },

    joinRoom: (room) => {
        socket.emit('join', room);
    },

    sendMessage: (room, message) => {
        const username = localStorage.getItem('username');
        socket.emit('message', room, message, username);
    },

    sendDraw: (room, change) => {
        socket.emit('draw', room, change)
    },

    leaveRoom: (room) => {
        socket.emit('leave', room);
        socket.off('broadcastMessage');
    }


}

export default socketUse;
