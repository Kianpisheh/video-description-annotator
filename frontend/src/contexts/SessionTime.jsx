import React from 'react'

const SessionTimeContext = React.createContext()

export const SessionTimeProvider = SessionTimeContext.Provider
export const SessionTimeConsumer = SessionTimeContext.Consumer

export default SessionTimeContext