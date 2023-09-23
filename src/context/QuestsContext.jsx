import { createContext, useEffect, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

import { dialogOptions } from '../data/dialogOptions'
import { questOptions } from '../data/questOptions'

export const QuestsContext = createContext()

export const QuestsProvider = ({ children }) => {
  const [questStatus, setQuestStatus] = useState('frontdesk')
  const [isReturning, setIsReturning] = useState(true)
  const [quest, setQuest] = useState({})
  const [dialog, setDialog] = useState(dialogOptions.frontDesk)

  const [activeQuest, setActiveQuest, clearActiveQuest] = useLocalStorage(
    'activeQuest',
    null,
  )

  useEffect(() => {
    if (!activeQuest || !isReturning) {
      return
    }

    setDialog(dialogOptions.returning)
    setQuestStatus('active')
    setQuest(activeQuest)
  }, [activeQuest, isReturning])

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
    setQuestStatus('active')
    setDialog(dialogOptions.accepted)

    setIsReturning(false)
    setActiveQuest(quest)
  }

  const rejectQuest = () => {
    console.log('rejecting')
    setQuestStatus('frontdesk')
    setDialog(dialogOptions.rejected)

    clearActiveQuest()
  }

  const completeQuest = () => {
    setQuestStatus('frontdesk')
    setDialog(dialogOptions.completed)

    clearActiveQuest()
  }

  const abandonQuest = () => {
    setQuestStatus('frontdesk')
    setDialog(dialogOptions.abandoned)

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
        completeQuest,
        abandonQuest,
      }}
    >
      {children}
    </QuestsContext.Provider>
  )
}
