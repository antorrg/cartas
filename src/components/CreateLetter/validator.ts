import { tema } from '../../constants'

export type InputValue = {
  tema: typeof tema[number] | ""
  mensaje: string
}
export type ErrorValue = {
    tema?: string
    mensaje?: string
}

export const validateLetter = (input:InputValue): ErrorValue=>{
    let errors:ErrorValue = {}
    if(!input.tema){
        errors.tema = "Este campo no puede estar vacio"
    }if(!input.mensaje.trim()){
        errors.mensaje = "Este campo no puede estar vacio"
    }if(input.mensaje.length < 100){
        errors.mensaje = "El mensaje no puede tener menos de 100 caracteres"
    }
    return errors
}