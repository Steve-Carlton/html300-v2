//Get data.json into index.html

//Assign info from data.json a variable, userProfiles. JSON info differs from JS arrays in syntax by wrapping entire array in single quotes and wrapping key/values in double quotes. JS seems to be able to read the JSON with the double quotes.
const userProfiles = [{
    "name": "Paolo Maldini",
    "jobTitle": "Front End Developer",
    "company": "Web Weavers",
    "experience": "3 years",
    "school": "University of Washington",
    "major": "Marketing",
    "email": "paolo@example.com",
    "linkedInUrl": "paolo.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", "Node", "Express"
    ]
  },
  {
    "name": "Barbara Bonansea",
    "jobTitle": "Software Engineer",
    "company": "Excellence in the Cloud",
    "experience": "12 years",
    "school": "University of Southern California",
    "major": "Computer Science",
    "email": "barbara@example.com",
    "linkedInUrl": "barbara.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "JavaScript", "C", "Go"
    ]
  },
  {
    "name": "Javier Hernandez",
    "jobTitle": "User Experience Engineer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "Seattle University",
    "major": "Performing Arts",
    "email": "javier@example.com",
    "linkedInUrl": "javier.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS"
    ]
  },
  {
    "name": "Maribel Dominguez",
    "jobTitle": "Front End Engineer",
    "company": "Bits and Bytes",
    "experience": "6 years",
    "school": "University of Washington",
    "major": "Mechanical Engineering",
    "email": "maribel@example.com",
    "linkedInUrl": "maribel.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
    ]
  }
]
// select target parent node
const main = document.querySelector(".main");

// select target node to populate
const userProfileContainer = document.querySelector(".template-hook");

main.appendChild(userProfileContainer)

// Update userProfiles entry counter
let i =+ 0;

//============forEach DOM NODE FUNCTION============
//run a forEach on userProfiles array
userProfiles.forEach(function(el) { //passes each property name/value pair from userProfiles' array of objects to the el paramenter as arguement to function below.

  //how to make these html elements unique? string + i ??
  //cardContainer Create card__container element. Nest it in userProfileContainer
  let cardContainer = document.createElement('div')
  cardContainer.className = "card__container" + " " + i;
  userProfileContainer.appendChild(cardContainer)

  //cardEntry Create card__entry element. Nest it in cardContainer
  let cardEntry = document.createElement('div')
  cardEntry.className = "card__entry" + " " + i;
  cardContainer.appendChild(cardEntry)

  //========CARD__IDENTITY
  //cardIdentity Create card__identity element. Nest it in cardEntry.
  let cardIdentity = document.createElement('section')
  cardIdentity.className = "card__identity" + " " + i;
  cardEntry.appendChild(cardIdentity)


  //========HEADSHOT
  let headshot = document.createElement('img')
  headshot.src = "img/headshot.jpg";
  headshot.className = "headshot";
  cardIdentity.appendChild(headshot)


  //========NAMETAG
  //Enter new profile name. Nest in card__identity
  let profileName = document.createElement('div')
  profileName.className = "nametag" + " " + i;
  profileName.innerHTML = `
  <h1>${el.name}</h1>
  <h2>${el.jobTitle}</h2>
  `
  cardIdentity.appendChild(profileName)

  //========CARD__PROFILE
  //Enter new profile c/v info. Nest in card__entry.
  let cardProfile = document.createElement('aside')
  cardProfile.className = "card__profile" + " " + i;
  cardEntry.appendChild(cardProfile)

  //========CARD__LIST
  //Create list and append it to cardProfile.
  //(For below, can you automatically ouput property names too?)
  let cardList = document.createElement('ul')
  cardList.className = "card__list" + " " + i;
  cardList.innerHTML = `
  <li><h3>Company: </h3><h4>${el.company}</h4></li>
  <li><h3>Experience: </h3><h4>${el.experience}</h4></li>
  <li><h3>Education: </h3><h4>${el.school}</h4></li>
  <li><h3>Degree: </h3><h4>${el.major}</h4></li>
  <li><h3>Email: </h3><h4>${el.email}</h4></li>
  `
  cardProfile.appendChild(cardList)

  //========LinkedIn CONTACT ELEMENTS
  let contactContainer = document.createElement('div')
  contactContainer.className = "contact" + " " + i;
  cardProfile.appendChild(contactContainer)

  let linkedInIcon = document.createElement('img')
  linkedInIcon.className = "icon"
  linkedInIcon.src = "img/linkedin.svg";
  contactContainer.appendChild(linkedInIcon)

  let linkedInUrl = document.createElement('span')
  linkedInUrl.innerHTML = `
  ${el.linkedInUrl}
  `
  contactContainer.appendChild(linkedInUrl)


  //============OPTIONAL SECTION========Code Proficiencies by Entry. DOM output.============
  //create nested ul element for code languages
  //Code proficiencies container
  let cardAside = document.createElement('aside')
  cardAside.className = "code__aside"
  cardAside.innerHTML = `
    <h3>Proficiencies: </h3>
  `
  cardEntry.appendChild(cardAside)

  let codeEntry = document.createElement('ul')

  //reset x counter (codeLanguages array length)
  let x = 0;
  for (x; userProfiles[i].codeLanguages.length > x; x++) { //loop runs for array codeLanguages.length number of times
    let newCodeLang = document.createElement('li')
    newCodeLang.innerHTML = `
    <li><h4>${userProfiles[i].codeLanguages[x]} </h4></li>
    `
      cardAside.appendChild(codeEntry)
      codeEntry.appendChild(newCodeLang)
  }

  //Append new profile card to previously selected HTML element, cardContainer
  userProfileContainer.appendChild(cardContainer)

  // update i counter (next user profile entry)
  i++;
})

//=====DEV NOTES
//
// ============Code Proficiencies by Entry. Console output.============
// let x =+ 0; //reset codeLanguages array element counter
// //
// //loop per number of entries in userProfiles array
// for (i; userProfiles.length > i; i++) {
//   console.log("<=====NEW ENTRY=====>"); //for console output
//   //loop runs for array codeLanguages.length number of times, then increments x.
//   for (x = 0; userProfiles[i].codeLanguages.length > x; x++) {
//     console.log(userProfiles[i].codeLanguages[x]); //log codeLanguages array element at index x.
//   }
// }


//
// //code proficiencies entries
// for (i; userProfiles.length > i; i++) { //loop for each number of entries in userProfiles array
//   console.log('<===NEW PROFILE===>')
//   let card__code = document.createElement('ul')
//   card__code.innerHTML = `
//   <li>TEST</li>
//   `
//
//
//   for (x = 0; userProfiles[i].codeLanguages.length > x; x++) {   //loop runs for array codeLanguages.length number of times, then increments x.
//     console.log('<===NEW CODE Language===>')
//     // console.log(userProfiles[i].codeLanguages[x]);//log codeLanguages array element at index x. <<<<
//     let codeEntry = document.createElement('ul')
//     codeEntry.innerHTML = `
//     <li><h4>${userProfiles[i].codeLanguages[x]} </h4></li>
//     `
//     card__code.appendChild(codeEntry)
//   }
// card__details.appendChild(card__code)
// }
