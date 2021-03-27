import React from 'react'
import { SearchBoxWrapper, SearchBox, SearchInput, SearchBoxHeader } from './Search.elements'

function Search({ handleInput, search }) {

    return (
        <>
            <SearchBoxWrapper>
                <SearchBoxHeader>
                    <h1>MOVIE DATABASE</h1>
                </SearchBoxHeader>
                <SearchBox>
                    <SearchInput 
                    type="text" 
                    placeholder="Search..." 
                    onChange={handleInput}
                    onKeyPress={search} />
                </SearchBox>
            </SearchBoxWrapper>
        </>
    )
}

export default Search
