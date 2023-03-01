import client from "./client";

const endpointGet = "/hires";
const endpointPost = "/addhire";
const endpointReturn = "/returnhire";

let today = new Date().toISOString().slice(0, 10);

const getHires = () => client.get(endpointGet);

const addHire = (hire) => {
  //const data = new FormData();
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

  return client.post(endpointPost, data);
};

const returnHire = (hireID) => {
  const data = {
    hireID: hireID,
  };

  //return console.log("called", data);
  return client.post(endpointReturn, data);
};

export default { addHire, getHires, returnHire };
