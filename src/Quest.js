function Quest({ questInfo, setDescription, setName }) {
    const getDescription = (e) => {
        const currentActive = document.querySelector('.quest-info li.active')
        if(currentActive) {
            currentActive.classList.toggle('active')
        }
        e.currentTarget.classList.add('active')
        setDescription(questInfo.description)
        setName(questInfo.name)
    }

    return(
        <li onClick={getDescription}>{questInfo.name}</li>
    )
}

export default Quest
