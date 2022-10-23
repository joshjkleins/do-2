import { useState } from 'react'

function AddQuest() {
    const [questName, setQuestName] = useState('')
    // const [questDescription, setQuestDescription] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(questName)
    }

    return(
        <>
            <div className="add-stuff">
                <form onSubmit={handleSubmit}>
                    <label>Quest Name</label>
                    <input type="text" value={questName} onChange={(e) => setQuestName(e.target.value)} />
                    <input type="submit"/>
                </form>
            </div>
        </>
    )
}

export default AddQuest