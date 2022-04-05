const nfyPlaylist = require("./nfy/playlist");

const mypl = new nfyPlaylist(["test", "123"]);

console.log(mypl.getCurrentSong())

mypl.moveByOne();

console.log(mypl.getCurrentSong())