// const suma=(a,b)=>{
//     return a+b;
// };

// test('probar que 1 + 2 es 3',()=>{
//     expect(suma(1,2)).toBe(3);
// });

// test('probar que 1 + 2 es menor a 5',()=>{
//     expect(suma(1,2)).toBeLessThan(5);
// });

// test('probar que 1 + 2 es mayor a 0',()=>{
//     expect(suma(1,2)).toBeGreaterThan(0);
// });

import {queryAllUsers} from './controllers/usuarios/controller.js';
import {conectarBD} from './db/db.js';

test("query a usuarios devuelve mas de un usuario",(done)=>{
    const callback=(err,res)=>{
        try{
            expect(res.lenght).toBeGreaterThan(0);
            done();
        } catch (error){
            done(error);
        }
    };
    const query=()=>queryAllUsers(callback);
    conectarBD(query);
});