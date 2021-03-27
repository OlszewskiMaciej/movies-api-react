import React from 'react'

import { ResultsWrapper, ResultWrapper } from './Results.elements'

function Results({ results, openPopup }) {
    return (
        <>
            <ResultsWrapper>
                {results.map(result => (
                    <ResultWrapper key={result.imdbID} onClick={() => openPopup(result.imdbID)}>
                    <img src={result.Poster} alt={result.Title} />
                    <h2>{result.Title}</h2>
                    </ResultWrapper>
                ))}
            </ResultsWrapper>
        </>
    )
}

export default Results
