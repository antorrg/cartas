import type { ValueLetter } from "../types"

type CardProps = {
  info: ValueLetter
  change: () => void
  disabledBtn?: boolean
}

const Card = ({info, change, disabledBtn}: CardProps) => {
    const {tema, mensaje} = info
  return (
    <div className='cardContainer'>
    <h5>CARTA: {tema}</h5>
     <p>{mensaje}</p>
     <hr></hr>
     <div className='cardFooter'>
      <p>Alguien que tambien lo sintió</p>
      <button
        className='btn'
        onClick={change}
        disabled={disabledBtn}
      >
        Otra carta...
      </button>

     </div>
    </div>
  )
}

export default Card