/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react'
import './ControlBox.styles.sass'
import { QuestsContext } from '@context/QuestsContext'
import { ChevronRight } from '../ChevronRight'

export const ControlBox = () => {
  const { questStatus, requestQuest, acceptQuest, rejectQuest } =
    useContext(QuestsContext)

  return (
    <div className="controlBox">
      {questStatus === 'frontdesk' && (
        <button type="button" onClick={requestQuest}>
          <ChevronRight />
          Give me a quest!
        </button>
      )}

      {questStatus === 'random' && (
        <>
          <button type="button" onClick={rejectQuest}>
            <ChevronRight />I don't wanna do that!
          </button>

          <button type="button" onClick={acceptQuest}>
            <ChevronRight />
            Sounds great, let's do this!
          </button>
        </>
      )}

      {questStatus === 'active' && (
        <>
          <button type="button" onClick={rejectQuest}>
            <ChevronRight /> Complete Quest
          </button>

          <button type="button" onClick={acceptQuest}>
            <ChevronRight />
            Abandon quest
          </button>
        </>
      )}
    </div>
  )
}
