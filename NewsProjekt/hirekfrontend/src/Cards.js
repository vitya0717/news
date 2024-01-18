import axios from 'axios'
import React, { useEffect } from 'react'

const Cards = ({ szotar, currentLanguage }) => {

    const [cards, setCards] = React.useState([]);

    const fetchData = async () => {
        const response = await axios.get('https://localhost:7290/api/News');
        setCards(response.data);

    }
    useEffect(() => {
        fetchData();
    }, [])

    console.log(cards)

    return (
        <div className='row'>
            {
                cards.map((card) => (
                    <div key={card.newsId} className="card m-3" style={{ width: "18rem" }}>
                        <img src={'data:image/png;base64,'+card.newsPicture} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{currentLanguage === "hu" ? card.newsTitle : card.newsTitle }</h5>
                            <p className="card-text">{currentLanguage === "hu" ? card.newsFullHu : card.newsFullEn}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        
    )
}

export default Cards