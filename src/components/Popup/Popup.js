import React from 'react'
import { PopupWrapper, PopupContent, PopupUpper, PopupBottom, PopupTitle, PopupRating, PopupPoster, PopupPlot, Button, PopupLeft, PopupRight, PopupButton } from './Popup.elements'

function Popup( { selected, closePopup }) {
    
    return (
        <>
            <PopupWrapper>
                <PopupContent>
                    <PopupUpper>
                        <PopupTitle>
                            <h2>{selected.Title} <span>({ selected.Year })</span></h2>
                        </PopupTitle>
                        <PopupRating>
                            <h2>Rating: {selected.imdbRating}</h2>
                        </PopupRating>
                    </PopupUpper>
                    <PopupBottom>
                        <PopupLeft>
                            <PopupPoster>
                                <img src={selected.Poster} alt={selected.Title} />
                            </PopupPoster>
                        </PopupLeft>
                        <PopupRight>
                            <PopupPlot>
                                <p>{selected.Plot}</p>
                            </PopupPlot>
                            <PopupButton>
                                <Button onClick={closePopup}>Return</Button>
                            </PopupButton>
                        </PopupRight>
                    </PopupBottom>
                </PopupContent>
            </PopupWrapper>
        </>
    )
}

export default Popup
