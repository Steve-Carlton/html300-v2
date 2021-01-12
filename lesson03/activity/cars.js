// TODO: Create HTML code from cars JSON

const carsJSON = '[{"make":"Ford","model":"Mustang","year":2010,"color":"black"},{"make":"Chevy","model":"Corvette","year":1984,"color":"red"},{"make":"Jeep","model":"Wrangler","year":1999,"color":"silver"}]'

const cars = JSON.parse(carsJSON)

// console.log(cars) //JSON parse test successful

const container = document.querySelector('#list-container') //select first HTML that matches specified id

cars.forEach(function(el) { //each array of cars is passed as arguement into el parameter
  // console.log(el) //function test successful
  let list = document.createElement('ul') //create DOM node ul for each array
  //create li elements inside ul node
  list.innerHTML = `
  <li>${el.make} ${el.model}</li>
  <li>Color: ${el.color}</li>
  <li>Year: ${el.year}</li>
  `
  container.append(list) //append target of querySelector with list
})
