**Deleton Mikhad Tedad Member Haye Sv Ro Ro Voice Neshon Bedid?Az Cod Zir Estfade Knid**

//This Part Make Your Source 24/7 In replit + uptime
const express = require('express');
const app = express();
const port = 4060;  //EXAMP: const port : 3030;
app.get('/', (req, res) => res.send('Ajab Rasmiye Rasm Zamone'));
app.listen(port, () => console.log(`YOUR BOT IS ON  http://localhost:${port}`));


const Discord = require("discord.js");
const client = new Discord.Client(); 

//Start
client.on("ready", () => {
    const guild = client.guilds.cache.get('ID-Server');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('ID-Voice')
        channel.setName(`R︱Member: ${guild.memberCount}`)
    }, 5000);
});

client.login('Your Token')
