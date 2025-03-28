import { Link } from "react-router-dom";

export default function ErrorNotFound(){
    return(

        <div>
            <h1>404 Error: Page not Found</h1>
            <Link className="bg-amber-100  p-1" to="/">GO back to Home</Link>
        </div>
    )
}