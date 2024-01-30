const FiveM = require("fivem-server-api");
const cors = require('cors');
const express = require("express");
const app = express();
const port = 3000;
const options = {
    timeout: 5000,
    errmsg: 'Error Occured',
}
const server = new FiveM.Server('cfx.re/join/lm8mo4', options);

app.use(cors());

// Endpoint to get FiveM server data
app.get('/website-odessa', async (req, res) => {
    try {
        const serverStatus = await server.getServerStatus();
        const players = await server.getPlayers();
        const serverName = await server.getServerName();
        const maxPlayers = await server.getMaxPlayers();

        // Construct an object with the data we want to send to the client
        const data = {
            serverStatus,
            players,
            serverName,
            maxPlayers
        };

        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

