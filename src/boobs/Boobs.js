import axios from 'axios';
class Boobs {
    // A METHOD TO RETRIEVE LINKS OF TIDDIES
    // PARAMTERS :
    // num => NUMBER OF LINKS [1-100]
    async get_boobs(num = 2) {
        try {
            let resp = await axios.get(`https://reddit.com/r/boobs/hot.json?limit=${num}`);
            let stuff = Array.from(resp.data.data.children);
            return stuff.map(x => x['data']['url']);
        } catch (e) {
            console.error(e);
        }

    }
    // THIS METHODS SENDS PICS TO A DISCORD SERVER VIA WEBOOKS
    // PARAMETERS
    // discord_hook = THE DISCORD WEBHOOK URL
    async post_boobs(discord_hook) {
        try {
            let resp = await axios.get("https://reddit.com/r/boobs/hot.json?limit=100");
            let stuff = Array.from(resp.data.data.children);
            let random = Math.floor(Math.random() * stuff.length);
            let pic = stuff[random]['data']['url'];
            let title = stuff[random]['data']['title'];
            let post_req = await axios.post(discord_hook, {
                "username": "horny jail",
                "avatar_url": "https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png",
                "embeds": [{
                    "title": title,
                    "author": {
                        "name": "sinpie",
                        "url": "https://github.com/ilovebewbs",
                        "icon_url": "https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png"
                    },
                    "image": {
                        "url": pic
                    },
                    "footer": {
                        "text": "this message was sent using sinpie.js"
                    }
                }]
            })
            return post_req.status;
        }catch(e){
            console.error(e);
        }

    }
    // THIS METHOD RETURNS A RANDOM TIDDY
    async random_boobs() {
        try {
            let resp = await axios.get("https://reddit.com/r/boobs.json");
            let bewbs = Array.from(resp.data.data.children);
            let random = Math.floor(Math.random() * bewbs.length / 2);
            return bewbs[random]['data']['url'];
        } catch (e) {
            console.error(e);
        }
    }
}

export default Boobs;