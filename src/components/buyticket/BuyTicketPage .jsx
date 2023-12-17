import React from 'react';
import './buyticket.css';

const BuyTicketPage = () => {
    return (
        <div className="buy-ticket-container">
            <h1>Buy Movie Tickets</h1>
            <div className="movie-details">
                <img
                    src="https://m.media-amazon.com/images/M/MV5BN2YwNTZhNjUtNWJiMC00OTYwLWFkNjEtOWRhNTc4ZDBlOWE0XkEyXkFqcGdeQWFybm8@._V1_.jpg" 
                    alt="Movie Poster"
                    className="movie-poster"
                />
                <div className="movie-info">
                    <h2>You</h2>
                    <p>Tarix: January 1, 2024</p>
                    <p>Müddət: 2h 30m</p>
                    <p>Janr: Romantika</p>
                    <p>Reytinq: PG-13</p>
                    <p>O, həmçinin Marienni tapmaq üçün Avropada izləyir. Serial qatil öz elit qrupunu hədəf almağa başlayanda bir-bir ölməyə başlayan varlı sosialistlər dairəsi ilə əlaqə qurmağa başlayanda onun yeni təklik həyatı pozulur.</p>
                </div>
            </div>
            <div className="ticket-selection">
                <h2>Select Number of Tickets</h2>
                <input type="number" min="1" defaultValue="1" />
                <button className="buy-button">Buy Tickets</button>
            </div>
        </div>
    );
};

export default BuyTicketPage;
