// Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the default country.
function describeCity(cityName: string, country: string = "Pakistan"): void {
  console.log(`${cityName} is in ${country}.`);
}

// Call the function for different cities
describeCity("Karachi");
describeCity("Tokyo", "Japan");
describeCity("New York", "USA");
