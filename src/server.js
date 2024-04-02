const express = require("express");
const port = 3001;
const cors = require("cors");

const app = express();

// a logica


app.use(cors());

const axios = require("axios");
app.get('/klines', async (req, res, next) => {
    const { symbol, interval } = req.query;
    if (!symbol || !interval) return res.status(422).send("SYMBOL OU INTERVALO")

    try {
       const response = await axios.get(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=600`)
        res.json(response.data);
    }
    catch(err) {
        res.status(500).json(err.response ? err.response.data : err.message)
    }
})

app.listen(port);
console.log('server listening...');
