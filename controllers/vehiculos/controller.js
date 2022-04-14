import { getDB } from '../../db/db.js';

const queryAllVehicles=async (callback)=>{
    const baseDeDatos=getDB();
    await baseDeDatos
    .collection('vehiculo')
    .find()
    .limit(50)
    .toArray(callback);
};

const crearVehiculo=async(datosVehiculo, callback)=>{
    
    if (
        Object.keys(datosVehiculo).includes('name')&&
        Object.keys(datosVehiculo).includes('brand')&&
        Object.keys(datosVehiculo).includes('model')
    ){
        const baseDeDatos=getDB();
        //implementar codigo para crear vehiculo en la base de datos
        baseDeDatos.collection('vehiculo').insertOne(datosVehiculo,callback);
    }   else{
        return 'error';
    }
 
    };
   


export {queryAllVehicles,crearVehiculo};