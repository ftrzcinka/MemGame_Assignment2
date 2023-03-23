export default function MemCard({ card, index, key }) {
    const cardClass = card.stat ? " active " + card.stat : ""

    return (
        <div className="card">
            <img src={card.img} alt={card.name} />
        </div>
    )
}
