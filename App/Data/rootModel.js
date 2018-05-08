import * as Schemas from './schema'
const Realm = require('realm');

export let realmDB = null;

Realm.open({schema:[Schemas.User,Schemas.Doctor,Schemas.Baby,Schemas.VaccinesSchema,Schemas.VaccineListSchema,Schemas.VaccinationSchema],schemaVersion: 2})
.then(realm =>realmDB = realm)
.catch (e => {
    console.log("Error on Realm Open")
  })
