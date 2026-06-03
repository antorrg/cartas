import Modal from '../Modal'

type AboutProps = {
  isOpen: boolean
  onCancel: () => void
  title?: string
  message?: string
  cancelText?: string
}

const About = ({
  isOpen, 
  onCancel, 
  title = "Quienes somos", 
  message = "Somos un pequeño emprendimiento que utilizamos nuestro estado actual animico y de crecimiento para crear soluciones y aportes para los demás", 
  cancelText = "Volver"
}: AboutProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <h2>{title}</h2>
      <p>{message}</p>
      
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

export default About
