import React from 'react'

export default ({isLoading}) => {
  return (
    isLoading && <div> LOADING... </div>
  )
}