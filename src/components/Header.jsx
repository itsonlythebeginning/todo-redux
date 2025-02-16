import {useSelector} from "react-redux";


function Header() {

    const {tasks} = useSelector( (state) => state.tasks )

    const {searchTerm, activeButton} = useSelector( (state) => state.search )

    let doneTasks = 0
    let moreTasks = 0

    const filteredTasks = tasks.filter(function (task) {

        if (activeButton === "All") {
            return task.title.toLowerCase().includes(searchTerm.toLowerCase())
        }

        else if (activeButton === "Active" && !task.done) {
            return task.title.toLowerCase().includes(searchTerm.toLowerCase())
        }

        else if (activeButton === "Done" && task.done) {
            return task.title.toLowerCase().includes(searchTerm.toLowerCase())
        }

    })

    for (let i = 0; i < filteredTasks.length; i++) {
        filteredTasks[i].done ? doneTasks++ : moreTasks++
    }


    return (
        <div className="border border-black-600 flex flex-wrap mb-8	">
            <h1 className="text-4xl	font-bold leading-normal">Todo App</h1>
            <div className="bg-orange-500 ml-auto flex flex-wrap flex-col justify-center	">
                <div className="flex flex-wrap items-center	">
                    <p className="mr-2 text-lg font-bold">{moreTasks}</p>
                    <p className="text-lg">more to do</p>
                </div>
                <div className="flex flex-wrap items-center	">
                    <p className="mr-2 text-lg font-bold ">{doneTasks}</p>
                    <p className="text-lg">done</p>
                </div>
            </div>
        </div>
    )

}


export default Header