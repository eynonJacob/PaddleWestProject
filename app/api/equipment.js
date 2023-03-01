import client from "./client";

const endpointGet = "/equipment";
const endpointPost = "/addequipment";
const endpointNeeds = "/needmaintenance";
const endpointIs = "/ismaintained";

let today = new Date().toISOString().slice(0, 10);

const getEquipment = () => client.get(endpointGet);

const addEquipment = (equipment) => {
  const data = {
    productName: equipment.productName,
    dateOfPurchase: equipment.dateOfPurchase,
    active: 1,
    usesSinceLast: 0,
    checkDate: today,
    hirePrice: equipment.hirePrice,
  };

  // EquipmentDetailsScreen.images.forEach((image, index) =>
  //     data.append('images', {
  //         name: 'image' + index,
  //         type: 'image/jpeg',
  //         uri: image
  //     }));
  return client.post(endpointPost, data);
};

//Maintenace
const needMaintanence = () => client.get(endpointNeeds);

const isMaintained = (equipmentID) => {
  const data = {
    equipmentID: equipmentID,
  };

  return client.post(endpointIs, data);
};

export default { addEquipment, getEquipment, needMaintanence, isMaintained };
