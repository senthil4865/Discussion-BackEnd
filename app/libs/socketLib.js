const socketio = require('socket.io');
const tokenLib = require("./tokenLib.js");
const redisLib = require("./redisLib.js");

let setServer = (server) => {
    let io = socketio.listen(server);
    let myIo = io.of('/');
    
    myIo.on('connection', (socket) => {

        console.log("on connection--emitting verify user");

        socket.emit("verifyUser", "");

        // code to verify the user and make him online

        socket.on('set-user', (authToken) => {

            console.log("set-user called")
            tokenLib.verifyClaimWithoutSecret(authToken, (err, user) => {
                if (err) {
                    socket.emit('auth-error', { status: 500, error: 'Please provide correct auth token' })
                }
                else {

                    // console.log("user is verified..setting details");
                    // let currentUser = user.data;
                    // // setting socket user id 
                    // socket.userId = currentUser.userId
                    // let fullName = `${currentUser.firstName} ${currentUser.lastName}`
                    // let key = currentUser.userId
                    // let value = fullName

                    // let setUserOnline = redisLib.setANewOnlineUserInHash("onlineUsersTopicToDo", key, value, (err, result) => {
                    //     if (err) {
                    //         console.log(`some error occurred`)
                    //     } else {
                    //         // getting online users topic.

                    //         redisLib.getAllUsersInAHash('onlineUsersTopicToDo', (err, result) => {
                    //             console.log(`--- inside getAllUsersInAHas function ---`)
                    //             if (err) {
                    //                 console.log(err)
                    //             } else {

                    //                 console.log(`${fullName} is online`);
                          
                    //                 socket.broadcast.emit('online-user-topic', result);
                    //             }
                    //         })
                    //     }
                    // })

                }
            })

        }) // end of listening set-user event


        socket.on('disconnect', () => {
            // disconnect the user from socket
            // remove the user from online topic
            // unsubscribe the user from his own channel

            // console.log("user is disconnected");

            // if (socket.userId) {
            //     redisLib.deleteUserFromHash('onlineUsersTopicToDo', socket.userId)
            //     redisLib.getAllUsersInAHash('onlineUsersTopicToDo', (err, result) => {
            //         if (err) {
            //             console.log(err)
            //         } else {
            //             //socket.to(socket.room).broadcast.emit('online-user-topic', result);
            //             socket.broadcast.emit('online-user-topic', result);
            //         }
            //     })
            // }

        }) // end of on disconnect


        // //on notify event
         socket.on('notify', (data) => {
          console.log(data,'notify object on client side');
          myIo.emit(data.receiverId, data)
        });//end of notify evnent


    });//end of task event

}




module.exports = {
    setServer: setServer
}






