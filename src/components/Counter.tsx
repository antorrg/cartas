import { useState, useEffect } from 'preact/hooks'
import { counter } from '../api'

export default function Counter() {
    const [count, setCount] = useState<number | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
            setLoading(true)
    
    counter() // Esta es tu función de la API
        .then((total) => {
            setCount(total)
        })
        .catch((error) => {
            console.error('Error cargando el contador:', error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, []) 

    if (loading) {
        return (
            <div className="smallTitle">
                <p>Cargando contador...</p>
            </div>
        )
    }

    return (
        <div className="smallTitle">
            <strong>{count} cartas escritas hasta hoy</strong>
        </div>
    )
}