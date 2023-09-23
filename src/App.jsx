import { useContext } from 'react'
import './App.styles.sass'
import { ControlBox } from './components/ControlBox'

import { DialogBox } from './components/DialogBox'
import { Quest } from './components/Quest'
import { QuestsContext } from './context/QuestsContext'

function App() {
  const { questStatus } = useContext(QuestsContext)

  return (
    <div className="container">
      <DialogBox />
      {questStatus !== 'frontDesk' && <Quest />}
      <ControlBox />
    </div>
  )
}

export default App
