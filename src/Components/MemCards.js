import { useState, useRef } from 'react'
import MemCard from './MemCard'

export default function MemCards({moveCounter, setMoveCounter, completion, setCompletion }) {
    const [cards, setCards] = useState([
        { id: 0, num: 0, name: 'MountainTop', status: '', img: '/ImageFolder/EldenRing_img1.jpg' },
        { id: 0, num: 1, name: 'MountainTop', status: '', img: '/ImageFolder/EldenRing_img1.jpg' },
        { id: 1, num: 2, name: 'Capital', status: '', img: '/ImageFolder/EldenRing_img2.jpg' },
        { id: 1, num: 3, name: 'Capital', status: '', img: '/ImageFolder/EldenRing_img2.jpg' },
        { id: 2, num: 4, name: 'FarumAzula', status: '', img: '/ImageFolder/EldenRing_img3.jpg' },
        { id: 2, num: 5, name: 'FaramaAzula', status: '', img: '/ImageFolder/EldenRing_img3.jpg' },
        { id: 3, num: 6, name: 'Academy', status: '', img: '/ImageFolder/EldenRing_img4.jpg' },
        { id: 3, num: 7, name: 'Academy', status: '', img: '/ImageFolder/EldenRing_img4.jpg' },
        { id: 4, num: 8, name: 'AltusSteps', status: '', img: '/ImageFolder/EldenRing_img5.jpg' },
        { id: 4, num: 9, name: 'AltusSteps', status: '', img: '/ImageFolder/EldenRing_img5.jpg' },
        { id: 5, num: 10, name: 'Stormveil', status: '', img: '/ImageFolder/EldenRing_img6.jpg' },
        { id: 5, num: 11, name: 'Stormveil', status: '', img: '/ImageFolder/EldenRing_img6.jpg' }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)
    const [prevNum, setPrevNum] = useState(-1)
    const [checking, setChecking] = useState(0)

    function check(current) {
        if (cards[current].id == cards[prev].id) {
            cards[current].stat = "correct"
            cards[prev].stat = "correct"
            setCompletion(completion+1)
            setCards([...cards])
            setPrev(-1)
            setPrevNum(-1)
        } else {
            cards[current].stat = "incorrect"
            cards[prev].stat = "incorrect"
            setCards([...cards])
            setTimeout(() => {
                cards[current].stat = ""
                cards[prev].stat = ""
                setCards([...cards])
                setPrev(-1)
                setPrevNum(-1)
            }, 1000)
        }
    }

    function handleClick(id) {
        if (cards[id].stat != "correct") {
            if (checking === 0) {
                if (prev === -1) {
                    cards[id].stat = "active"
                    setCards([...cards])
                    setPrev(id)
                    setPrevNum(cards[id].num)
                } else {
                    if (prevNum != cards[id].num) {
                        setMoveCounter(moveCounter + 1)
                        setChecking(1)
                        check(id)
                        setTimeout(() => {
                            setChecking(0)
                        }, 1000)
                    }
                }
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
