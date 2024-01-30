import { io } from 'socket.io-client'
// CRITICAL replace with production url
const socket = io('http://localhost:5001/')

const socketUse = {
    // Socket event listeners
    connect: () => {
        socket.on('connect', ()=>{
            console.log(`socket connected: ${socket.connected}`)
        })
        
    },

    RecMessage: (setMessages) => {
        socket.on('broadcastMessage', message => {
            setMessages((prevMessages) => [...prevMessages, message]);
        })
    }, 

    disconnect: ()=> {
        socket.on('disconnect')
    },

    // Socket emits
    requestRooms: () => {
        socket.emit('requestRooms');
    },

    joinRoom: (room) => {
        socket.emit('join', room);
    },

    sendMessage: (room, message)  => {
        socket.emit('message', room, message);
    },

    sendDraw: (room, change) => {
        socket.emit('draw', room, change)
    }


}

export default socketUse;