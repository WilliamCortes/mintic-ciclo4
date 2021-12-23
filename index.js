const app = require('./src/app');
const { conn } = require('./src/models');
require("dotenv").config()

const port_number = process.env.PORT || 3000;
const host = '0.0.0.0';


conn.sync({
    force: true
    // force: false
}).then(async () => {
    app.listen(port_number, host, () => {
        console.log(`Servidor corriendo en el puerto ${port_number}`)
    });
});

