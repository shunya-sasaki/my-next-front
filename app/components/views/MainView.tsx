import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"

export const MainView = () => {
    return (
        <div className="flex">
            <div className="content-center">
                <FontAwesomeIcon icon={faHouse} />
            </div>
            <div className="content-center">
                Main
            </div>

        </div>
    )
}