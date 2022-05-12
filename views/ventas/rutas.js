import Express from 'express';
import { queryAllSales,crearVenta, editarVenta, eliminarVenta, consultarVenta } from '../../controllers/Ventas/controller.js';


const rutasVenta=Express.Router();

const genericCallback=(res)=>(err,result)=>{
            if (err){
                res.status(500).send('Error consultando los Ventas');
            }else{
                res.json(result);
            }
        };
    


rutasVenta.route('/Ventas').get,((req,res)=>{
    console.log('alguien hizo get en la ruta/Ventas');
    queryAllSales(genericCallback(res));
});

rutasVenta.route('/Ventas').post((req,res)=>{
    crearVenta(req.body,genericCallback(res));
});

rutasVenta.route('/Ventas').get,((req,res)=>{
    console.log('alguien hizo get en la ruta/Ventas');
    consultarVenta(req.params.id,genericCallback(res));
});

rutasVenta.route('/Ventas/:id').patch((req,res)=>{
    editarVenta(req.params.id,req.body,genericCallback(res));
});

rutasVenta.route('/Ventas/:id').delete((req,res)=>{
   eliminarVenta(req.params.id,genericCallback(res));
});

export default rutasVenta;