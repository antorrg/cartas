type CounterProps = {
    count: number | null
    error: boolean
}

export default function Counter({ count, error }: CounterProps) {
    if (error) {
        return (
            <div className="smallTitle">
                <p>No se pudo cargar el contador.</p>
            </div>
        )
    }

    if (count === null) {
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