import { useContext } from 'react'
import './DialogBox.styles.sass'
import { QuestsContext } from '@context/QuestsContext'

export const DialogBox = () => {
  const { dialog } = useContext(QuestsContext)
  return (
    <div className="dialogContainer">
      <h3>Guild clerk:</h3>
      <p>{dialog.header}</p>
      <p>{dialog.body}</p>
    </div>
  )
}
