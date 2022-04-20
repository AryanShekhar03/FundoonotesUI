import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Takenoteone from "../../Components/Takenoteone/Takenoteone";
import Takenotetwo from "../../Components/Takenotetwo/Takenotetwo";
import Takenotethree from "../../Components/Takenotethree/Takenotethree";
import { getNotes } from "../../Service/dataservice";
import "../Dasboard/Dashboard.css"

function Dashboard() {
    const [switchnote, setSwitchnote] = useState(false)
    const [listOfNotes, setListOfNotes] = useState([])
    function listenTotakenote() {
        setSwitchnote(true)
    }
    // console.log(listOfNotes)

    React.useEffect(() => {
        // console.log("hello")
        getNotes().then((respons) => { console.log(respons); setListOfNotes(respons.data) }).catch((error) => { console.log(error) })

    }, [switchnote])
    return (
        <div>
            <Header />
            {switchnote ? <Takenotetwo /> : <Takenoteone listenTotakenote={listenTotakenote} />}
            <div className="Container">
                {listOfNotes.map((note) => <Takenotethree note={note} />)}
            </div>

        </div>
    )
}

export default Dashboard