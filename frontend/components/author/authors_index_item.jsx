import React from "react";
import { Link } from "react-router-dom";

const AuthorsIndexItem = (props) => {

    return (
        <li className="author-index-item">
            <Link to={`/authors/${props.author.name[0].toUpperCase()}/${props.author.id}`}>{props.author.name}</Link>
        </li>
    )
}

export default AuthorsIndexItem;