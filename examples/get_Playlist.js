const spottyDL = require('../');
const playlist = "https://open.spotify.com/playlist/37i9dQZF1E38wVOX2C3p1a?si=o4sOyX3nSBWZVf05wH5MmQ";
const playlist1 = "https://open.spotify.com/playlist/7n5qFvScLgk29ZLdhu3hCz?si=fI8n84zmREeTq5yHoTezsQ";

;(async() => {
    console.log(spottyDL.checkType(playlist))
    let data = await spottyDL.getPlaylist(playlist);
    console.log(data)
})()
