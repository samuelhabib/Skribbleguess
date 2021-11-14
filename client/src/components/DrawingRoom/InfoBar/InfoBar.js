import React from 'react';
import { Link } from 'react-router-dom';
import { MDBCol, MDBRow } from "mdbreact";

import './InfoBar.css';

const InfoBar = ({ currentUser, room, initialTime, currentDrawer, guessWord }) => {


    return (
        <MDBRow className="drawing-info">
            <MDBCol><h3>Room: {room}</h3></MDBCol>
            {
                currentUser.name === currentDrawer ? (
                    <MDBCol><h3>✏️ <span className="current-drawer">You!</span></h3></MDBCol>
                ) : (
                    <MDBCol><h3>✏️ {currentDrawer}</h3></MDBCol>
                )
            }

            {
                currentUser.name === currentDrawer ? (
                    <MDBCol><h3><span className="guess-word multicolortext">{guessWord}</span></h3></MDBCol>
                ): (
                    <MDBCol><h3><pre>{guessWord.replace(/\S/gm, "__ ")}</pre></h3></MDBCol>
                )
            }
            <MDBCol><h2>⏱️: <span>{initialTime}</span></h2></MDBCol>
            <MDBCol>
                <Link to={'/'}>
                    <button className="leave-button">Leave Game</button> 
                </Link>
            </MDBCol>
        </MDBRow>
    )
};

export default InfoBar;