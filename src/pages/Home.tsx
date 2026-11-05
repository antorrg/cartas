import { useState, useEffect } from 'preact/hooks'
import Card from '../components/Card'
import Counter from '../components/Counter'
import { tema } from '../constants'
import type { ValueLetter } from '../types'
import { hibridApiLetters } from '../hibridApiPortableSdk'


type PropHome = {
  onChange: ()=>void
}
const letterMock = [ 
{id: "6540f42b-a71c-43c9-84d2-480caed3bde3",
 mensaje: "Aguardando informacion",
 tema: "Para quien lo necesite",
}]

const Home = ({onChange}:PropHome) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0)
  const [disabled, setDisabled] = useState<boolean>(false)
  const [letters, setLetters] = useState(letterMock)
  const [letterCount, setLetterCount] = useState<number | null>(null)
  const [counterError, setCounterError] = useState<boolean>(false)
  type CartasResponse = {
    letters: ValueLetter[],
    count: number
  }
  const cartas = async():Promise<CartasResponse>=>{
    //return await getLetters()
   const response = await hibridApiLetters.getLetters({page:'1', limit:'20'})
   return {
    letters: response.data,
    count: response.info.totalElements
   }
    
  }
  useEffect(()=>{
    cartas()
      .then(({ letters, count }) => {
        setLetters(letters)
        setLetterCount(count)
      })
      .catch((error) => {
        console.error('Error cargando las cartas:', error)
        setCounterError(true)
      })
  },[])
console.log(letters, letterCount)
  const selectedTema = tema[activeIndex] ?? tema[0]
  const filteredCards = letters?.filter((letter) => letter.tema === selectedTema)
  const currentCard = filteredCards[currentCardIndex]

  const handleSelectTema = (index: number) => {
    setActiveIndex(index)
    setCurrentCardIndex(0)
  }

  const handleNextCard = () => {
    if (filteredCards.length === 0) {setDisabled(true); return}
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % filteredCards.length)
  }

  return (
    <>
      <section className="container">
        <h3 className='smallTitle'>CARTAS AL AIRE</h3>
        <h1>Para quien lo necesite</h1>
        <div className='searchContainer'>
          {
            tema?.map((temaItem, index) => 
              <button 
                key={temaItem}
                className={`searchButton ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleSelectTema(index)}
                aria-pressed={activeIndex === index}
              >
                {temaItem}
              </button>
            )
          }
        </div>

        {filteredCards.length > 0 ? (
          <Card key={currentCard.id} info={currentCard} change={handleNextCard} disabledBtn={disabled}/>
        ) : (
          <p>No hay cartas para el tema seleccionado.</p>
        )}
        <Counter count={letterCount} error={counterError} />
        <button className="btn" style={{marginTop:'1rem'}} onClick={onChange}>
          Escriba su carta y enviela...
        </button>
      </section>
    </>
  )
}

export default Home