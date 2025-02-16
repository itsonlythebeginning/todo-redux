import Button from "./Button.jsx";
import {changeSearchTerm, changeActiveButton} from "../store/store.jsx";
import {useSelector, useDispatch} from "react-redux";

function SearchPanel() {

    const dispatch = useDispatch()

    const {searchTerm, buttons, activeButton} = useSelector( (state) => state.search  )

    const handleChange = (event) => {
        dispatch(changeSearchTerm(event.target.value))
    }

    const handleClick = (button) => {
        dispatch(changeActiveButton(button.title))

    }

    const renderedButtons = buttons.map(function (button) {
        return <Button
            key={button.title}
            onClick={() => {handleClick(button)}}
            className={`mr-4 last:mr-0 first:w-14 ${activeButton === button.title ? "bg-emerald-600" : ""}`}>
            {button.title}
        </Button>
    })

    return (
        <div className="border flex flex-wrap justify-between items-center mb-16">
            <input onChange={handleChange}
                   value={searchTerm}
                   className="border-2 p-2 w-90 text-xl font-medium placeholder:font-bold"
                   placeholder="Type text to search"/>
            <div>
                {renderedButtons}
            </div>
        </div>
    )

}

export default SearchPanel