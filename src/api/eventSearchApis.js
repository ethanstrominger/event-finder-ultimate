import apiUrl from '../apiConfig'
import axios from 'axios'

const createEventSearch = (props, eventSearch) => {
  return axios({
    url: `${apiUrl}/eventSearches/`,
    method: 'POST',
    data: {
      eventSearch: eventSearch
    },
    headers: {
      Authorization: `Bearer ${props.user.token}`
    }
  })
}

const destroyEventSearch = (props) => {
  return axios({
    url: `${apiUrl}/eventSearches/${props.match.params.id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${props.user.token}`
    }
  })
}

const getEventSearch = (props) => {
  return axios({
    url: `${apiUrl}/eventSearches/${props.match.params.id}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${props.user.token}`
    }
  })
}

const getEventSearches = (props) => {
  return axios({
    url: `${apiUrl}/eventSearches/`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${props.user.token}`
    }
  })
}

const saveUpdatedEventSearch = (props, eventSearch) => {
  return axios({
    url: `${apiUrl}/eventSearches/${props.match.params.id}`,
    method: 'PATCH',
    data: {
      eventSearch: eventSearch
    },
    headers: {
      Authorization: `Bearer ${props.user.token}`
    }
  })
}

export {
  createEventSearch,
  destroyEventSearch,
  getEventSearch,
  getEventSearches,
  saveUpdatedEventSearch
}
