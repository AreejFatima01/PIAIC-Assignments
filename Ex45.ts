//Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
//Print the Object that’s returned to make sure all the information was stored correctly.
function createCarInfo(
  manufacturer: string,
  model: string,
  ...additionalInfo: object[]
): object {
  // Create an empty car object
  const car: object = {};

  // Add mandatory properties
  car["manufacturer"] = manufacturer;
  car["model"] = model;

  // Add additional properties using object spread
  Object.assign(car, ...additionalInfo);

  // Return the car object
  return car;
}

// Create three cars with different information
const car1 = createCarInfo("Toyota", "Camry", { color: "red", year: 2023 });
const car2 = createCarInfo("Honda", "Civic", {
  mileage: 20000,
  features: ["sunroof", "heated seats"],
});
const car3 = createCarInfo("Tesla", "Model S", {
  color: "black",
  autopilot: true,
});

// Print each car's information
console.log(car1); // Output: { manufacturer: 'Toyota', model: 'Camry', color: 'red', year: 2023 }
console.log(car2); // Output: { manufacturer: 'Honda', model: 'Civic', mileage: 20000, features: ['sunroof', 'heated seats'] }
console.log(car3); // Output: { manufacturer: 'Tesla', model: 'Model S', color: 'black', autopilot: true }
