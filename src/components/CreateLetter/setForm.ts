import {useState} from 'preact/hooks'
import  {validateLetter, type InputValue, type ErrorValue} from "./validator"
import { tema } from '../../constants'


export const setForm = ()=>{
        const [input, setInput] = useState<InputValue>({
            tema: 'Para quien lo necesite',
            mensaje: ""
        })
    
        const [errors, setErrors] = useState<ErrorValue>({
            tema: "",
            mensaje: ""
        })
      const handleChange = (event: any)=>{
        const {name, value} = event.target
        const nextInput = {
            ...input,
            [name]:value
        } as InputValue
        setInput(nextInput)
        setErrors((prevError =>({
            ...prevError,
            [name]: validateLetter(nextInput)[name as keyof ErrorValue]
        })))
      }
  return ({
    handleChange,
    input,
    setInput, 
    errors,
    setErrors
  })
}