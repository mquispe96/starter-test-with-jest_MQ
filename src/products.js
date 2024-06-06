//Get full name from an user input object, and create a full name string
function getFullName(contact) {
  const names = contact.names;
  return `${names.first} ${names.surname}`;
}

//Get purchased products from an user input object, and list all products' name, or an error if none
function getProductsPurchased(contact) {
  const purchased = contact.purchased;

  if (!purchased.length) {
    return "No products purchased.";
  }

  if (purchased.length === 1) {
    return purchased[0].name;
  }

  const result = [];
  for (let product of purchased) {
    result.push(product.name);
  }

  return result;
}

module.exports = {
  getFullName,
  getProductsPurchased,
};
