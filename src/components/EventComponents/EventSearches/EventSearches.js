import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../../MainLayout/MainLayout'
import { getEventSearches } from '../../../api/eventSearchApis'
import { getId } from '../../../utils'

const EventSearches = props => {
  // NOTE on React Hook: useState is used by React Hooks to create state variables and
  // setter function for component
  const [eventSearches, setEventSearches] = useState([])

  // ==== Fetch eventSearches into eventSearches variable ===
  // NOTE on React Hook: useEffect: syntax by React Hooks. Code is called when component mounts,
  // or is updated
  useEffect(() => {
    getEventSearches(props) // returns promise to get eventSearches
      .then(res => {
        setEventSearches(res.data.eventSearches.filter(eventSearches => getId(eventSearches) !== undefined))
      })
      .catch(console.error)
  }, [])

  // === set eventSearchesLinks to html bulleted list of eventSearches ussing eventSearches variable
  const eventSearchesLinks = eventSearches.filter(eventSearches => getId(eventSearches) !== undefined).map(eventSearches => (
    <li key={`eventSearches${getId(eventSearches)}`}>
      <Link to={`/eventSearches/${getId(eventSearches)}`}>{eventSearches.title}</Link>
    </li>
  ))

  // === return fragment with a h4 and the list of eventSearches.
  return (
    <MainLayout>
      <h4>EventSearches!</h4>
      <ul>
        {eventSearchesLinks}
      </ul>
    </MainLayout>
  )
}
export default EventSearches
