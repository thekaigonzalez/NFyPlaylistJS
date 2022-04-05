# NFy Playlist JavaScript API

NFy playlist API for javascript

```js
const nfyPlaylist = require("./nfy/playlist");

const mypl = new nfyPlaylist(["test", "123"]);

console.log(mypl.getCurrentSong())

mypl.moveByOne();

console.log(mypl.getCurrentSong())
```

```js
test
123
```
