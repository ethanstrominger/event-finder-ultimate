import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { createEventSearch } from '../../../api/eventSearchApis'
import EventSearchForm from '../EventSearchForm/EventSearchForm'
import MainLayout from '../../MainLayout/MainLayout'
import { getId } from '../../../utils'

const EventSearchCreate = props => {
  const [eventSearch, setEventSearch] = useState({ title: '', director: '', year: '' })
  const [createdEventSearchId, setCreatedEventSearchId] = useState(null)

  const handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedEventSearch = Object.assign({ ...eventSearch }, updatedField)
    setEventSearch(editedEventSearch)
  }

  const handleSubmit = event => {
    event.preventDefault()

    createEventSearch(props, eventSearch)
      .then(res => setCreatedEventSearchId(getId(res.data.event_search)))
      .catch(console.error)
  }

  if (createdEventSearchId) {
    return <Redirect to={`/event_searches/${createdEventSearchId}`} />
  }

  return (
    <MainLayout>
      <EventSearchForm
        eventSearch={eventSearch}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
    </MainLayout>
  )
}

export default EventSearchCreate
