export default function MemCard({ card, id, handleClick }) {
    const cardClass = card.stat ? " active " + card.stat : ""

    return (
        <div className={"card" + cardClass} onClick={() => handleClick(id) }>
            <img src={card.img} alt={card.name} />
        </div>
    )
}
