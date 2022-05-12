import Express from 'express';
import { queryAllUsers,crearUsuario, editarUsuario, eliminarUsuario, consultarUsuario } from '../../controllers/Usuarios/controller.js';


const rutasUsuario=Express.Router();

const genericCallback=(res)=>(err,result)=>{
            if (err){
                res.status(500).send('Error consultando los Usuarios');
            }else{
                res.json(result);
            }
        };
    


rutasUsuario.route('/Usuarios').get,((req,res)=>{
    console.log('alguien hizo get en la ruta/Usuarios');
    queryAllUsers(genericCallback(res));
});

rutasUsuario.route('/Usuarios').post((req,res)=>{
    crearUsuario(req.body,genericCallback(res));
});

rutasUsuario.route('/Usuarios/self').get,((req,res)=>{
    console.log('alguien hizo get en la ruta/self');
    consultarOCrearUsuario(req,genericCallback(res));
    //consultarUsuario(req.params.id,genericCallback(res));
});

rutasUsuario.route('/Usuarios/:id').get,((req,res)=>{
    console.log('alguien hizo get en la ruta/Usuarios');
    consultarUsuario(req.params.id,genericCallback(res));
});



rutasUsuario.route('/Usuarios/:id').patch((req,res)=>{
    editarUsuario(req.params.id,req.body,genericCallback(res));
});

rutasUsuario.route('/Usuarios/:id').delete((req,res)=>{
   eliminarUsuario(req.params.id,genericCallback(res));
});

export default rutasUsuario;