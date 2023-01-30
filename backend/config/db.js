const mongoose =  require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config({ path: 'variables.env'});

const conectarDB = async () => {
    try {
        
        await mongoose.connect(process.env.DB_MONGO, {
            useUnifiedTopology: true
        })
        console.log('DB conectada');

    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}

module.exports = conectarDB;