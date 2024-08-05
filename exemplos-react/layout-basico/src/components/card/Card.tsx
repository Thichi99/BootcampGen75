interface CardProps {
    titulo: string
    descricao: string
}

function Card({ titulo, descricao }: CardProps) {
    return (
        <div style={{
            backgroundColor: '#646cffaa',
            textAlign: "center",
            width: "200px",
            border: "5px solid #383ead",
            borderRadius: '20px',
            margin: "2em",
            padding: '0 2em'
        }}>
            <h1>{titulo}</h1>
            <p>{descricao}</p>
        </div>
    )
}

export default Card