import React from 'react'

const EventSearchForm = ({ eventSearch, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
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
      placeholder="YYYY-MM-DD"
      name="Start Date"
      value={eventSearch.start_date || ''}
      type="date"
      onChange={handleChange}
    />
    <label>Start Time</label>
    <input
      placeholder="18:00"
      name="Start Time"
      value={eventSearch.start_date || ''}
      type="time"
      onChange={handleChange}
      required
    />
    <label>End Date</label>
    <input
      placeholder="YYYY-MM-DD"
      name="End Date"
      value={eventSearch.end_date || ''}
      type="date"
      onChange={handleChange}
      required
    />
    <label>End Time</label>
    <input
      placeholder="20:00"
      name="End Time"
      value={eventSearch.end_time || ''}
      type="time"
      onChange={handleChange}
      required
    />

    <button type="submit">Submit</button>
  </form>
)

export default EventSearchForm
