import "../Error/Error.css"
import { Link } from "react-router-dom"

function Error() {

    return (
        <div className={"errorContainer"}>
            <div className={"title"}>404</div>
            <div className={"subtitle"}>Oups! La page que vous demandez n'existe pas.</div>
            <Link to="/" className={"backlink"}>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error