import { useState, useRef } from 'react'
import MemCard from './MemCard'
import MountainTop from "../assets/EldenRing_img1.jpg";
import Capital from "../assets/EldenRing_img2.jpg";
import FarumAzula from "../assets/EldenRing_img3.jpg";
import Academy from "../assets/EldenRing_img4.jpg";
import AltusSteps from "../assets/EldenRing_img5.jpg";
import Stormveil from "../assets/EldenRing_img6.jpg";

export default function MemCards({moveCounter, setMoveCounter, completion, setCompletion }) {

    //Had to upload images to a server to be able to access them, because for some reason they were not showing up
    //originally did img: '/ImageFolder/EldenRing_img1.jpg' which used to work locally, but not anymore
    const [cards, setCards] = useState([
        { id: 0, num: 0, name: "MountainTop", status: "", img: MountainTop },
        { id: 0, num: 1, name: "MountainTop", status: "", img: MountainTop },
        { id: 1, num: 2, name: "Capital", status: "", img: Capital },
        { id: 1, num: 3, name: "Capital", status: "", img: Capital },
        { id: 2, num: 4, name: "FarumAzula", status: "", img: FarumAzula },
        { id: 2, num: 5, name: "FaramaAzula", status: "", img: FarumAzula },
        { id: 3, num: 6, name: "Academy", status: "", img: Academy },
        { id: 3, num: 7, name: "Academy", status: "", img: Academy },
        { id: 4, num: 8, name: "AltusSteps", status: "", img: AltusSteps },
        { id: 4, num: 9, name: "AltusSteps", status: "", img: AltusSteps },
        { id: 5, num: 10, name: "Stormveil", status: "", img: Stormveil },
        { id: 5, num: 11, name: "Stormveil", status: "", img: Stormveil, }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)
    const [prevNum, setPrevNum] = useState(-1)
    const [checking, setChecking] = useState(0)

    function check(current) {
        if (cards[current].id === cards[prev].id) {
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
        if (cards[id].stat !== "correct") {
            if (checking === 0) {
                if (prev === -1) {
                    cards[id].stat = "active"
                    setCards([...cards])
                    setPrev(id)
                    setPrevNum(cards[id].num)
                } else {
                    if (prevNum !== cards[id].num) {
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
