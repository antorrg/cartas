import Modal from '../../Modal'
import personalStyle from './warning.module.css'

type WarningProps = {
  isOpen: boolean
  onCancel: () => void
  cancelText?: string
}

const Warning = ({
  isOpen, 
  onCancel, 
  cancelText = "Volver"
}: WarningProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onCancel} styles={{modalCard: personalStyle.card}}>
      <h2>Codigo de conducta</h2>
      <p>Este espacio está destinado a compartir mensajes de ánimo, reflexión, apoyo y buena convivencia.</p>
      <p>Para mantener un ambiente respetuoso, no se publicarán mensajes que contengan:</p>
      <ul>
        <li>Insultos, agresiones o lenguaje ofensivo.</li>
        <li>Discriminación por cualquier motivo.</li>
        <li>Acoso, amenazas o intimidación.</li>
        <li>Contenido de odio, violencia o incitación a la violencia.</li>
        <li>Información falsa, engañosa o perjudicial para terceros.</li>
        <li>Publicidad no solicitada o spam.</li>
      </ul>
      <p>Todos los mensajes son revisados antes de su publicación. Nos reservamos el derecho de rechazar cualquier contenido que no cumpla estas normas o que consideremos inapropiado para la comunidad.</p>
      
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '25px' }}>
        <button 
          type="button"
          className="btn btn--secondary" 
          onClick={onCancel}
        >
          {cancelText}
        </button>
        
      </div>
    </Modal>
  )
}

export default Warning