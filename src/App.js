import React, { useState } from 'react'
import Location from './Location'
import LocationQuests from './LocationQuests'
import AddQuest from './AddQuest'
import './App.css'

function App() {
  const fortJoy = require('./data/fortJoy.json')
  const reapersCoast = require('./data/reapersCoast.json')
  const namelessIsle = require('./data/namelessIsle.json')
  const arx = require('./data/arx.json')
  
  const [questList, updateQuestList] = useState(fortJoy.quests)
  const [areaTitle, setAreaTitle] = useState('Fort Joy')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <>
      <div className="header-container">Divinity Original Sin 2</div>
      <div className="main-container">
        <div className="locations">
          <Location key={fortJoy.name} questInfo={fortJoy} updateQuestState={updateQuestList} updateAreaTitle={setAreaTitle} setActive={true} />
          <Location key={reapersCoast.name} questInfo={reapersCoast} updateQuestState={updateQuestList} updateAreaTitle={setAreaTitle} setActive={false} />
          <Location key={namelessIsle.name} questInfo={namelessIsle} updateQuestState={updateQuestList} updateAreaTitle={setAreaTitle} setActive={false} />
          <Location key={arx.name} questInfo={arx} updateQuestState={updateQuestList} updateAreaTitle={setAreaTitle} setActive={false} />
        </div>
        <LocationQuests questLists={questList} areaTitle={areaTitle}/>
      </div>
      <AddQuest />

    </>
  )
}

export default App
