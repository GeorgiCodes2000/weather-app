import { Fragment } from "react";

function SearchBar({handleInput, input}) {

    return(
        <Fragment>
            <form onSubmit={handleInput}>
                <input value={input} className="cityInput" type="text" placeholder="Enter city name"></input>
                <button type="submit" className="submit">Submit</button>
            </form>
        </Fragment>
    )
}
export default SearchBar;