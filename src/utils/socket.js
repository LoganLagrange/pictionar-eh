import { io } from 'socket.io-client'
import saveData from '../components/GameFunctions/DrawingCanvas'
import { useRef } from 'react'
// CRITICAL replace with production url
const socket = io('http://localhost:5001/')


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
