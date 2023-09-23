import { createContext, useEffect, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

import { dialogOptions } from '../data/dialogOptions'
import { questOptions } from '../data/questOptions'

export const QuestsContext = createContext()

export const QuestsProvider = ({ children }) => {
  const [questStatus, setQuestStatus] = useState('frontdesk')
  const [quest, setQuest] = useState({})
  const [dialog, setDialog] = useState(dialogOptions.frontDesk)

  const [activeQuest, setActiveQuest, clearActiveQuest] = useLocalStorage(
    'activeQuest',
    null,
  )

  useEffect(() => {
    if (!activeQuest) {
      return
    }

    setDialog(dialogOptions.returning)
    setQuestStatus('active')
    setQuest(activeQuest)
  }, [activeQuest])

  const getRandomQuest = () => {
    const questNumber = Math.floor(Math.random() * questOptions.length)

    return questOptions[questNumber]
  }

  const requestQuest = () => {
    setQuestStatus('random')
    setDialog(dialogOptions.requesting)
    setQuest(getRandomQuest())
  }

  const acceptQuest = () => {
    setQuestStatus('accepted')
    setDialog(dialogOptions.accepted)

    setActiveQuest(quest)
  }

  const rejectQuest = () => {
    setQuestStatus('frontdesk')
    setDialog(dialogOptions.rejected)

    clearActiveQuest()
  }

  return (
    <QuestsContext.Provider
      value={{
        questStatus,
        quest,
        dialog,
        requestQuest,
        acceptQuest,
        rejectQuest,
      }}
    >
      {children}
    </QuestsContext.Provider>
  )
}
