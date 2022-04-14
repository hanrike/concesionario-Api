import Express from 'express';
import { queryAllVehicles,crearVehiculo, editarVehiculo, eliminarVehiculo } from '../../controllers/vehiculos/controller.js';


const rutasVehiculo=Express.Router();

const genericCallback=(res)=>(err,result)=>{
            if (err){
                res.status(500).send('Error consultando los vehiculos');
            }else{
                res.json(result);
            }
        };
    


rutasVehiculo.route('/vehiculos').get,((req,res)=>{
    console.log('alguien hizo get en la ruta/vehiculos');
    queryAllVehicles(genericCallback(res));
});

rutasVehiculo.route('/vehiculos/nuevo').post((req,res)=>{
    crearVehiculo(req.body,genericCallback(res));
});

rutasVehiculo.route('/vehiculos/editar').patch((req,res)=>{
    editarVehiculo(req.body,genericCallback(res));
});

rutasVehiculo.route('/vehiculos/eliminar').delete((req,res)=>{
   eliminarVehiculo(req.body.id,genericCallback(res));
});

export default rutasVehiculo;