import React from 'react'

const EventSearchForm = ({ eventSearch, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Source</label>
    <input
      placeholder="Enter source (meetup)"
      name="source"
      value={'Meetup'}
      onChange={handleChange}
      required
    />
    <label>Keyword</label>
    <input
      placeholder="Keyword"
      name="keyword"
      value={eventSearch.keyword || ''}
      onChange={handleChange}
    />
    <label>Start Date</label>
    <input
      placeholder="mm-dd-yyyy"
      name="start_date"
      type="date"
      value={eventSearch.start_date || ''}
      onChange={handleChange}
    />
    <label>End Date</label>
    <input
      placeholder="mm-dd-yyyy"
      name="end_date"
      type="date"
      value={eventSearch.end_date || ''}
      onChange={handleChange}
    />
    <label>Start Time</label>
    <input
      placeholder="hh:mm:ss AM/PM"
      name="start_time"
      type="time"
      value={eventSearch.start_time || ''}
      onChange={handleChange}
    />
    <label>End Time</label>
    <input
      placeholder="hh:mm:ss AM/PM"
      name="end_time"
      type="time"
      value={eventSearch.end_time || ''}
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
  </form>
)

export default EventSearchForm
