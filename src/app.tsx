import Home from './pages/Home'
import {useState} from 'preact/hooks'
import  CreateView from './pages/CreateView'
import Footer from './components/Footer'



export function App() {
  const [form, setForm] = useState<boolean>(false)



  return (
    <>
      {form?
      <CreateView onClose={()=>setForm(false)}/>
      :
      <Home onChange={()=>setForm(true)}/>
      }
    <Footer/>
    </>
  )
}
