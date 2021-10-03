import React from 'react'

const StudyDataContext = React.createContext({})

export const StudyDataProvider = StudyDataContext.Provider
export const StudyDataConsumer = StudyDataContext.Consumer

export default StudyDataContext