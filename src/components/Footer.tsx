import {useState} from 'preact/hooks'
import About from  './modals/modalComponents/About'
import Warning from './modals/modalComponents/Warning/Warning'
import '../styles/footer.css'

const Footer = () => {
    const [about, setAbout] = useState<boolean>(false)
     const [warning, setWarning] = useState<boolean>(false)



  return (
    <div className='footer-container'>
        <hr/>
        <div className="footer-content">
          <strong>
              2026 - Cartas al aire
          </strong>
          <div className="footer-links">
            <button className="footer-link-button" onClick={()=>setWarning(true)}>
              Codigo de conducta
            </button>
            <button className="footer-link-button" onClick={()=>setAbout(true)}>
              Acerca de
            </button>
          </div>
        </div>
        <About isOpen={about} onCancel={()=>{setAbout(false)}}/>
        <Warning isOpen={warning} onCancel={()=>{setWarning(false)}}/>
    </div>
  )
}

export default Footer