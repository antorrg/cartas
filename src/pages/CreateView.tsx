import Form from "../components/CreateLetter/Form"
type CreateProp = {
  onClose: ()=>void
}

const CreateView = ({onClose}:CreateProp) => {
  return (
    <div className="container">
        <h3 className='smallTitle'>CARTAS AL AIRE</h3>
      <Form onClose={onClose}/>
    </div>
  )
}

export default CreateView