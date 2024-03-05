const express = require('express'),
    bodyParser =  require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    dotenv = require('dotenv'),
    helmet = require('helmet'),
    morgan = require('morgan'),
    clientRoutes = require('./routes/client'),
    generalRoutes = require('./routes/general'),
    salesRoutes = require('./routes/sales'),
    managementRoutes = require('./routes/management');

/*CONFIGURATION*/
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

/*ROUTES*/
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/sales', salesRoutes);
app.use('/management', managementRoutes);

/*MONGOOSE SETUP*/
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
}).catch((err) => console.log(`Error while connecting to Mongo: ${err}`));
