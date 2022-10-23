function Location({ questInfo, updateQuestState, updateAreaTitle, setActive }) {
    const makeActive = (e) => {
        const currentActive = document.querySelector('.location-card.active')
        if(currentActive) {
            currentActive.classList.toggle('active')
        }
        e.currentTarget.classList.toggle('active')
        updateQuestState(questInfo.quests)
        updateAreaTitle(questInfo.name)
    }

    return(
        <>
            <div className={`location-card ${setActive ? 'active' : ''}`} onClick={makeActive}>
                <div className="title">{questInfo.name}</div>
            </div>
        </>
    )
}

export default Location
