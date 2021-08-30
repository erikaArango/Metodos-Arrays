const arregloShippingGroups = require("./shippingGroups.json");

//-----------map - regreses un listado de los sg
const listadoShippingGroups = arregloShippingGroups.map(
  (element) => element.id // retorno implicito
);
console.log("* listado Shipping Groups  " + listadoShippingGroups);

let existePan = false;

arregloShippingGroups.forEach((element) => {
  let total = 0;

  //-----------foreEach - monto total de la compra por sg  foreach no retorna
  element.units.forEach((units) => {
    total += units.metadata.totalPrice;

    //-----------includes - quiero si algun sg tiene Pan Molde Integral Familiar Stuttgart Bolsa 650 g
    units.metadata.description.includes(
      "Pan Molde Integral Familiar Stuttgart Bolsa 650 g"
    );
    //console.log("* Existe pan " + existePan);
  });

  console.log("* Monto total de la compra por sg  " + total);
});

//----------- some - quiero saber si algun SG tiene 05adcb73-3d68-4b1a-a9f7-4db5d63051ea como pickerID
const picker = arregloShippingGroups.some(({pickerId}) => {

  if (pickerId === "05adcb73-3d68-4b1a-a9f7-4db5d63051ea") {
    return true;
  }
  return false;
  
});
console.log(" * picker ID " + picker);

//-------------every - quiero saber si todos los sg son del local 95
  const local = arregloShippingGroups.every(({storeId}) => {
    if (storeId === "95") {
      return true;
    }
    return false;
  });
  console.log(" * los sg son del local 95? " + local);

//------------- filter - quiero que me regreses solo el sg que sea 3001628803
  const sg = arregloShippingGroups.filter(({id}) => {
    if (id === "3001628803") {
      return id;
    }
  });
  console.log({sg});

