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

    return (
        <div className="container">
            {cards.map((card, index) => {
                return <MemCard card={card} id={index} key={index} />
            }) }
        </div>
    );
}
