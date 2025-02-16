import Header from "./components/Header.jsx";
import SearchPanel from "./components/SearchPanel.jsx";
import TaskList from "./components/TaskList.jsx";
import CreatePanel from "./components/CreatePanel.jsx";


function App() {

    return (
        <div className="p-8 border-6 border-indigo-600 w-226 bg-gray-100 my-0 mx-auto		">
            <Header/>
            <SearchPanel/>
            <TaskList/>
            <CreatePanel/>
        </div>
    )

}

export default App