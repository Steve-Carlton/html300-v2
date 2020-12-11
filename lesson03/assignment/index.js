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

// select DOM node
const userProfileContainer = document.querySelector(".template-hook");

// Update userProfiles entry counter
let i = +0;

//============forEach DOM NODE FUNCTION============
//run a forEach on userProfiles array
userProfiles.forEach(function(el) { //passes each property name/value pair from userProfiles' array of objects to the el paramenter as arguement to function below.
  //Create new HTML section
  let nametag = document.createElement('section')
  nametag.innerHTML = `
  <h1>${el.name}</h1>
  `

  //==========Populate nametag section with object properties values from userProfiles.=========
  //Can you automatically ouput property names too?
  let card__details = document.createElement('ul')
  card__details.innerHTML = `
  <li><h3>Job Title: </h3><h4>${el.jobTitle}</h4></li>
  <li><h3>Company: </h3><h4>${el.company}</h4></li>
  <li><h3>Experience: </h3><h4>${el.experience}</h4></li>
  <li><h3>Education: </h3><h4>${el.school}</h4></li>
  <li><h3>Degree: </h3><h4>${el.major}</h4></li>
  <li><h3>Email: </h3><h4>${el.email}</h4></li>
  <li><h3>LinkedIn: </h3><h4>${el.linkedInUrl}</h4></li>
  <li><h3>Code Proficiencies: </h3></li>
  `

  //============Code Proficiencies by Entry. DOM output.============

  for (x = 0; userProfiles[i].codeLanguages.length > x; x++) { //loop runs for array codeLanguages.length number of times, then increments x.
    // console.log('<===NEW CODE Language===>') // test line
    // console.log(userProfiles[i].codeLanguages[x]);//log codeLanguages array element at index x. <<<<
    let codeEntry = document.createElement('ul')
    codeEntry.innerHTML = `
  <li><h4>${userProfiles[i].codeLanguages[x]} </h4></li>
  `
    card__details.appendChild(codeEntry)
  }
  //Append profile to previously selected HTML element, userProfileContainer
  userProfileContainer.appendChild(nametag)
  nametag.appendChild(card__details)
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
