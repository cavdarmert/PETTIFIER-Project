const express = require('express');
const cors = require('cors');

const port = 8000;

const { petRouter } = require('./routes/pet.routes');

require('./config/mongoose.config');

const app = express();

app.use(cors());

app.use(express.json(), express.urlencoded({extended: true}));

app.use('/api/pets', petRouter);

app.listen(port, () =>
    console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);