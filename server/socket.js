//import { writeFile } from "fs";
module.exports = {
    connect: function(io, PORT) {
        io.on('connection', (socket) => {
            console.log('user connection on port' + PORT + ' : ' + socket.id);
            socket.on('message', (message) => {
                io.emit('message', message);
                console.log(message);
            })
        });
        //io.on("connection", (socket) => {
            //socket.on("upload", (file, callback) => {
                //console.log(file); 
                //writeFile("/tmp/upload", file, (err) => {
                    //callback({ message: err ? "failure" : "success" });
              //});
            //});
        //});
    }
}