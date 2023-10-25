import "../node_modules"

//conectar a mongo express y body

const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

//Conectar con mongo
mongoose.connect("mongodb+srv://usuario2:12345@cluster0.mmul0id.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser:true});
const db = mongoose.connection;

//Definir un modelo de datos
const User = mongoose.model("user",{
    name:String,
    email:String
});

//middleware para pasar datos
app.use(bodyParser.urlencoded({extended:true}));

//Send html

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "../component/Contacto.js");
})

//Manejar el envio del form
app.post("/Contactos.js", async (req, res)=>{
    const {name,email} = req.body;

    //Crear una nueva instancia del modelo user
    const newUser = new User({ name,email });

    console.log("Este es el ID del usuario")
        try {
            //Guardar el documento en la base de datos usando async/await
            await newUser.save();
            const userId = newUser._id;
            console.log("Usuario agregando exitosamente"+userId);
            res.redirect("/Contactos.js");
        }   catch (err) {
            console.error("Error insertando el documento.", err);
            res.status(500).send("Error agregando usuario");
        }
    ;
});

// Obtener el usuario agregado

app.get("/users/:userId", async (req, res)=>{
    try{
        const userID=req.params.userId;

        const deleteuser = await User.findByIdAndRemove(userID);

        if(!deleteUser){
            return res.status(404).json({error:"Usuario no encontrado"});
        }

        res.json({mensaje:"Usuario eliminado correctamente"+ deleteuser});
    }catch (err){
        console.error("Error eliminando usuario: " +  err);
        res.status(500).json({error: "Error eliminando usuario"});
    }

});


// Start el server

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});