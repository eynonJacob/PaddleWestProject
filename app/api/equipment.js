import client from "./client";

const endpointGet = "/equipment";
const endpointPost = "/addequipment";

let today = new Date().toISOString().slice(0, 10);

const getEquipment = () => client.get(endpointGet);

const addEquipment = (equipment) => {
  //content-type
  //application/json
  //multipart/form-data
  //   const data = new FormData();
  //   data.append("ProductName", equip.ProductName);
  //   data.append("DateOfPurchase", equip.DateOfPurchase);
  //   data.append("HirePrice", equip.HirePrice);

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

export default { addEquipment, getEquipment };
