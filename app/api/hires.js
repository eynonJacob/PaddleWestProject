import client from "./client";

//Endpoints for various functions on the backend
const endpointGet = "/hires";
const endpointPost = "/addhire";
const endpointReturn = "/returnhire";
const endpointHistoric = "/historichires";

let today = new Date().toISOString().slice(0, 10);

//Performing the get request to the address
const getHires = () => client.get(endpointGet);

//Add hire
const addHire = (hire) => {
  //Data to be passed to the backend
  const data = {
    equipmentID: hire.equipmentID,
    staffID: 1,
    dateOfHire: today,
    dateOfReturn: hire.dateOfReturn,
    customerName: hire.customerName,
    customerPhone: hire.customerPhone,
    customerEmail: hire.customerEmail,
    returned: 0,
  };

  //Data will now be posted to the backend here
  return client.post(endpointPost, data);
};

//When a hire is returned, the hireID is passed to the backend so the returned status can be changed in the database
const returnHire = (hireID) => {
  const data = {
    hireID: hireID,
  };
  //Data will now be posted to the backend here
  return client.post(endpointReturn, data);
};

//Performing the get request for all historic hires
const historicHires = () => client.get(endpointHistoric);

//All these functions are exported here to be used at various points in the project
export default { addHire, getHires, returnHire, historicHires };
