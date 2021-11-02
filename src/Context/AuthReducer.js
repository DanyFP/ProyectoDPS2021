import {INICIO_SESION,CERRAR_SESION, ACTUALIZAR_USUARIO} from './Types'

// eslint-disable-next-line
export default (state,action)=>{

    switch(action.type){

         case INICIO_SESION:
         case ACTUALIZAR_USUARIO:
            return{
                ...state,
                id:action.payload.id,
                nombre:action.payload.nombre,
                foto:action.payload.foto,
                correo:action.payload.correo,
                logueado:true,
                cargando:false,
            }

        case CERRAR_SESION:
            return{
                ...state,
                id:'',
                nombre:'',
                foto:'',
                correo:'',
                logueado:false,
                cargando:false,
            }
        default:
            return state;
    }
}