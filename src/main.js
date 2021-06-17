import React, {useState} from 'react';
import lista from './lista';
import { useBetween } from 'use-between';

const useSharableState = () => {
    const [luoghi, setLuoghi] = useState(lista)

    return{
        luoghi,
        setLuoghi
    }
}

const Main = () => {
    const {luoghi} = useBetween(useSharableState)
    return (
    <section>
        <h1 className='title'>Our Tours</h1>
        <div className='rect'></div>
        {
            luoghi.map((tour) => {
                return <Tour tour={tour}/>
            })
        }
    </section>
    )
}

const Tour = (props) => {
    const {id, img, title, descr, price} = props.tour;
    const {luoghi, setLuoghi} = useBetween(useSharableState)

    const rimuovi = (id) => {
        let posti = luoghi.filter(luogo => luogo.id !== id);
        setLuoghi(posti);
    }
    return(
        <article>
            <img alt='' src={img}></img>
            <div>
                <h4 className='tourTitle'>{title}</h4>
                <h4 className='price'>$ {price}</h4>
            </div>
            <p>{descr}</p>
            <button className='btn' onClick={() => rimuovi(id)} >Not Interested</button>
        </article>
    )
}

export default Main;