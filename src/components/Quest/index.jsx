import { useContext } from 'react'
import './Quest.styles.sass'
import { QuestsContext } from '../../context/QuestsContext'

export const Quest = () => {
  const { quest } = useContext(QuestsContext)

  return (
    <div className="questContainer">
      <h2 className="questTitle">{quest.title}</h2>
      <div className="flex">
        <h3>Quest type:</h3>
        <span>{quest.type}</span>
      </div>
      <div className="flex">
        <h3>Difficulty:</h3>
        <span>{quest.difficulty}</span>
      </div>
      <div>
        <h3>Description:</h3>
        <span>{quest.description}</span>
      </div>
      <div>
        <h3>Objective:</h3>
        <span>{quest.objective}</span>
      </div>
    </div>
  )
}
