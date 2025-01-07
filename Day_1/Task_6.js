

/*
(6)
You are given an array of order objects. 
Each object represents an e-commerce order and contains details in the following format:

*/
var orders = [
  {
    orderId: 'ORD001',
    customer: 'John Doe',
    items: 'item1:2,item2:1,item3:5',
    orderDate: '2023-12-01',
    deliveryDate: '2023-12-05',
    deliveryAddress: '123, Main Street, Springfield, USA',
  },
  {
    orderId: 'ORD002',
    customer: 'Jane Smith',
    items: 'itemA:3,itemB:4',
    orderDate: '2023-11-15',
    deliveryDate: '2023-11-20',
    deliveryAddress: 'Flat 4B, Elmwood Apartments, New York, USA',
  },
  {
    orderId: 'ORD003',
    customer: 'Alice Johnson',
    items: 'itemX:1',
    orderDate: '2023-10-10',
    deliveryDate: '2023-10-15',
    deliveryAddress: '456, Pine Lane , Denver, USA ',
  }
];


////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////


function transformOrders(orders) {
  let formattedOrders = []; 

  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];

    ///////////////////////////////// Calculate totalItems 
    let itemsArray = order.items.split(',');  // arrayReduce Method 
    let totalItems = 0;
    for (let j = 0; j < itemsArray.length; j++) {
      let itemQuantity = parseInt(itemsArray[j].split(':')[1]);
      totalItems += itemQuantity;
    }

         /////////////////////get deliveryDuration
    var deliveryDuration = Math.round((new Date(order.deliveryDate) - new Date(order.orderDate)) / (1000 * 60 * 60 * 24));  


    /////////// Parse deliveryAddress without using map
    let addressParts = order.deliveryAddress.split(',');
    for (let k = 0; k < addressParts.length; k++) {
      addressParts[k] = addressParts[k].trim();
    }
    let buildingNumber = isNaN(addressParts[0]) ? addressParts[0] : parseInt(addressParts[0]);
    let deliveryStreet = addressParts[1];
    let deliveryCity = addressParts[2];
    let deliveryCountry = addressParts[3];

  //////////////////// Push the formatted order to the result array
    formattedOrders.push({
      orderId: order.orderId,
      customer: order.customer,
      totalItems: totalItems,
      orderDate: order.orderDate,
      deliveryDate: order.deliveryDate,
      deliveryDuration: deliveryDuration,
      deliveryCountry: deliveryCountry,
      deliveryCity: deliveryCity,
      deliveryStreet: deliveryStreet,
      buildingNumber: buildingNumber,
    });
  }

  return formattedOrders;
}

let formattedOrders = transformOrders(orders);
console.log(formattedOrders);




/////////////////////////////////////////////////////////////////////////////////////////////////////

function ChangedeliveryAddress(orders) {
  for (var index = 0; index < orders.length; index++) {
    var Newadresses = orders[index].deliveryAddress; // Access the deliveryAddress
    var data = Newadresses.split(","); // Split into parts

    // Add new properties to the order object
    orders[index].buildingNumber = data[0];
    orders[index].deliveryStreet = data[1];
    orders[index].deliveryCity = data[2];
    orders[index].deliveryCountry = data[3];

    // Delete the original deliveryAddress property
    delete orders[index].deliveryAddress;
  }
}

// ChangedeliveryAddress(orders) ;
// console.log(orders);


 function orderFormat(orders){
  return orders.map(function(order) {  //each element of the orders array is transformed by the function passed to map one at the time

      //get deliveryDuration
      var deliveryDuration = Math.round((new Date(order.deliveryDate) - new Date(order.orderDate)) / (1000 * 60 * 60 * 24));  //converts the difference from milliseconds to days

      //address-> building number, street name, city, country.
      var address = order.deliveryAddress.split(",");
      var deliveryCountry = address[3];
      var deliveryCity = address[2];
      var deliveryStreet = address[1];
      var buildingNumber = isNaN(Number(address[0])) ? address[0] : Number(address[0]);  
      //items -->calculate the total number of items.
      var itemsArr = order.items.split(',');  ////get an array of item strings (itemA:3 , itemB:4)
      var totalItems = 0;
      for (var i = 0; i < itemsArr.length; i++) {
      var item = itemsArr[i];
      var quantity = Number(item.split(':')[1]);  //////["item1", "2"] then access second [1] -->"2" to extract the quantity then convert it to a number
      totalItems += quantity;
      }
      return{
          orderId: order.orderId,
          customer: order.customer,
          totalItems: totalItems,
          orderDate: order.orderDate,
          deliveryDate: order.deliveryDate,
          deliveryDuration: deliveryDuration,
          deliveryCountry: deliveryCountry,
          deliveryCity: deliveryCity,
          deliveryStreet: deliveryStreet,
          buildingNumber: buildingNumber,
        };
  });
}


///Transform the orders array into the following format:
/*
var formattedOrders = [
  {
    orderId: 'ORD001',
    customer: 'John Doe',
    totalItems: 8,
    orderDate: '2023-12-01',
    deliveryDate: '2023-12-05',
    deliveryDuration: 4,
    deliveryCountry: 'USA',
    deliveryCity: 'Springfield',
    deliveryStreet: 'Main Street',
    buildingNumber: 123,
  },
  {
    orderId: 'ORD002',
    customer: 'Jane Smith',
    totalItems: 7,
    orderDate: '2023-11-15',
    deliveryDate: '2023-11-20',
    deliveryDuration: 5,
    deliveryCountry: 'USA',
    deliveryCity: 'New York',
    deliveryStreet: 'Elmwood Apartments',
    buildingNumber: 'Flat 4B',
  },
  {
    orderId: 'ORD003',
    customer: 'Alice Johnson',
    totalItems: 1,
    orderDate: '2023-10-10',
    deliveryDate: '2023-10-15',
    deliveryDuration: 5,
    deliveryCountry: 'USA',
    deliveryCity: 'Denver',
    deliveryStreet: 'Pine Lane',
    buildingNumber: 456,
  }
];
*/
/*
Notes:
1- The items string contains item names and their quantities in the format itemName:quantity.
 You need to calculate the total number of items.
2- The deliveryDuration is the number of days between orderDate and deliveryDate.
3- The deliveryAddress is always in the format: building number, street name, city, country.
4- If the buildingNumber is not a valid number (e.g., Flat 4B), include it as a string.
5- The original array should remain unchanged.

*/



