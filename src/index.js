const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const empleadosRoutes = require("./routes/empleados")


const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json())
app.use('/api', empleadosRoutes)


//route
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API ')
});



//mongodb conection
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('Base de datos conectada'))
.catch((error) => console.error(error))


//servidor app
app.listen(port, ()=> console.log('El servidor esta funcionando por el puerto', port))

