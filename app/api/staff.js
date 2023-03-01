import client from "./client";

const endpointGet = "/staff";
const endpointPost = "/addstaff";

const getStaff = () => client.get(endpointGet);

const addStaff = (staff) => {
  const data = {
    name: staff.name,
    email: staff.email,
    password: staff.password,
  };
  //return console.log(data);
  return client.post(endpointPost, data);
};

export default { getStaff, addStaff };
