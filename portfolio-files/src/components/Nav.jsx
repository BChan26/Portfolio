import {Link} from 'react-router-dom'

export default function Nav () {
    return (
        <div className = "nav">

            {/* <Link to= "/">
                <div>🏠</div>
            </Link> */}

            <Link to= "/Project1">
                <div>Project #1 🌤</div>
            </Link>

            <Link to= "/Project2">
                <div>Project #2 🐲</div>
            </Link>

            <Link to= "/Project3">
                <div>Project #3 🚌</div>
            </Link>

        </div>)
    }