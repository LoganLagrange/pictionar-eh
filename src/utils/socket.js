import { io } from 'socket.io-client'
import saveData from '../components/DrawingCanvas'
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

    RecMessage: (setMessages) => {
        socket.on('broadcastMessage', message => {
            setMessages((prevMessages) => [...prevMessages, message]);
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
        socket.emit('message', room, message);
    },

    sendDraw: (room, change) => {
        socket.emit('draw', room, change)
    },

    leaveRoom: (room) => {
        socket.emit('leave', room)
    }


}

export default socketUse;