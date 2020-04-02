// Postgress uses id and mongodb uses _id for identifiers
// getId allows code to work with same data model implemented in either language
const getId = (objectWithId) => {
  const retVal = objectWithId.id || objectWithId._id
  return retVal
}

export { getId }
