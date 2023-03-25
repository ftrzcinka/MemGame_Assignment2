import { useState, useRef } from 'react'
import MemCard from './MemCard'

export default function MemCards() {
    const [cards, setCards] = useState([
        { id: 0, name: 'MountainTop', status: '', img: '/ImageFolder/EldenRing_img1.jpg' },
        { id: 0, name: 'MountainTop', status: '', img: '/ImageFolder/EldenRing_img1.jpg' },
        { id: 1, name: 'Capital', status: '', img: '/ImageFolder/EldenRing_img2.jpg' },
        { id: 1, name: 'Capital', status: '', img: '/ImageFolder/EldenRing_img2.jpg' },
        { id: 2, name: 'FarumAzula', status: '', img: '/ImageFolder/EldenRing_img3.jpg' },
        { id: 2, name: 'FaramaAzula', status: '', img: '/ImageFolder/EldenRing_img3.jpg' },
        { id: 3, name: 'Academy', status: '', img: '/ImageFolder/EldenRing_img4.jpg' },
        { id: 3, name: 'Academy', status: '', img: '/ImageFolder/EldenRing_img4.jpg' },
        { id: 4, name: 'AltusSteps', status: '', img: '/ImageFolder/EldenRing_img5.jpg' },
        { id: 4, name: 'AltusSteps', status: '', img: '/ImageFolder/EldenRing_img5.jpg' },
        { id: 5, name: 'Stormveil', status: '', img: '/ImageFolder/EldenRing_img6.jpg' },
        { id: 5, name: 'Stormveil', status: '', img: '/ImageFolder/EldenRing_img6.jpg' }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)
    const [checking, setChecking] = useState(0)

    function check(current) {
        if (cards[current].id == cards[prev].id) {
            cards[current].stat = "correct"
            cards[prev].stat = "correct"
            setCards([...cards])
            setPrev(-1)
        } else {
            cards[current].stat = "incorrect"
            cards[prev].stat = "incorrect"
            setCards([...cards])
            setTimeout(() => {
                cards[current].stat = ""
                cards[prev].stat = ""
                setCards([...cards])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id) {
        if (checking === 0) {
            if (prev === -1) {
                cards[id].stat = "active"
                setCards([...cards])
                setPrev(id)
            } else {
                setChecking(1)
                check(id)
                setTimeout(() => {
                    setChecking(0)
                }, 1000)
            }
        }
    }

    return (
        <div className="container">
            {cards.map((card, index) => {
                return <MemCard card={card} id={index} key={index} handleClick={handleClick} />
            })}
        </div>
    );
}
