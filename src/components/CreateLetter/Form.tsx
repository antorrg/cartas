import { useState } from "preact/hooks"
import  {validateLetter} from "./validator"
import { tema } from '../../constants'
import '../../styles/form.css'
import ConfirmModal from '../modals/modalComponents/ConfirmModal'
import SuccessModal from '../modals/modalComponents/SuccessModal'
import { createLetter } from "../../api"
import {setForm} from './setForm'

type PropForm = {
  onClose: ()=>void
}
const Form = ({onClose}: PropForm) => {

    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
  const {handleChange, input, setInput, errors, setErrors} = setForm()

  const handleSubmit = (e: any)=>{
    e.preventDefault()
    const validationErrors = validateLetter(input)
    if(Object.keys(validationErrors).length === 0){
        setShowConfirmModal(true)
    } else {
        setErrors(validationErrors)
    }
  }

  // Esta es la función aislada donde hacemos la llamada a la API
  const confirmSubmitLetter = async () => {
    try {

      await createLetter(input)
      
      // Si el envío fue exitoso, avanzamos al modal de éxito:
      setShowConfirmModal(false)
      setShowSuccessModal(true)
    } catch (error) {
      console.error('Hubo un error al enviar la carta', error)
   
    }
  }

  const goBack = ()=>{
    setInput({        
        tema: 'Para quien lo necesite',
        mensaje: ""
    })
    onClose()
  }
  const hasErrors = Object.keys(validateLetter(input)).length > 0;

  return (
  <div className="formContainer">
    <h1>Escriba una carta...</h1>
    <form onSubmit={handleSubmit}>
    <div className="formColumn">
      <label>
          Seleccione un tema:
      </label>
      <select
        name="tema"
        value={input.tema}
        onChange={handleChange}
      >
     <option value=''>Seleccione un tema:</option>
     {tema.map((t, index)=>
     <option 
     key={index}
     value={t}
     >{t}</option>
     )}
    </select>
    <div className="errorText">{errors.tema}</div>
    </div>
    <div className="formColumn">
      <label>
          Escriba su carta:
      </label>
      <textarea
        value={input.mensaje}
        name="mensaje"
        autoComplete="off"
        rows={5}
        onChange={handleChange}
        
      />
      <p>(Las cartas enviadas serán revisadas antes de publicarse.)</p>
      <div className="errorText">{errors.mensaje}</div>
    </div>
    <div className="buttonRow">
     <button
       type="button"
       onClick={goBack}
       className="btn btn--secondary"
     >
        Cancelar
     </button>
     <button
       type="submit"
       className="btn"
       disabled={hasErrors}
     >
        Enviar
     </button>
    </div>
    </form>

    <ConfirmModal 
      isOpen={showConfirmModal}
      onCancel={() => setShowConfirmModal(false)}
      onConfirm={confirmSubmitLetter}
      title="¿Estás seguro?"
      message="¿Deseas enviar tu carta al aire? Una vez enviada, no podrás modificarla."
      confirmText="Sí, enviar carta"
      cancelText="No, volver"
    />

    <SuccessModal 
      isOpen={showSuccessModal}
      onAccept={() => {
        setShowSuccessModal(false)
        onClose()
      }}
      message="Tu carta ha sido enviada al aire para quien lo necesite."
    />
  </div>
  )
}

export default Form