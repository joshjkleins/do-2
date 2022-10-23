import { useState } from 'react'
import Quest from './Quest'

function LocationQuests({ questLists, areaTitle }) {
    const [description, setDescription] = useState(questLists[0].description)
    const [questName, setName] = useState(questLists[0].name)
    return(
        <>
            <div className="quest-info">
                <div className="quest-container">
                    <div className="area-title">{areaTitle}</div>
                    <div className="quest-list">
                        <ul>
                            {questLists.map(item => <Quest key={item.name} questInfo={item} setDescription={setDescription} setName={setName} />)}
                        </ul>
                    </div>
                </div>
                <div className="quest-description">
                    <div className="quest-title">{questName}</div>
                    <div className="quest-text">{description}</div>
                </div>
            </div>
        </>
    )
}

export default LocationQuests
