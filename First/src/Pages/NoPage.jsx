import { Link } from "react-router-dom"




export const NoPage = () => {



    return (
        <>
            <h2>404 Not found</h2>
        <h4>An unknown error occured</h4>
        <Link to="/">Click here to go back</Link>
        </>
    )
}