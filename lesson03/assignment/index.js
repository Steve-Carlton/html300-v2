//Get data.json into index.html

//Assign info from data.json a variable, userProfiles. JSON info differs from JS arrays in syntax by wrapping entire array in single quotes and wrapping key/values in double quotes. JS seems to be able to read the JSON with the double quotes.
const userProfiles = [{"name":"Paolo Maldini","jobTitle": "Front End Developer",
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
// Reset counter
let i = 0;

//============forEach DOM NODE FUNCTION============
//run a forEach on userProfiles array
userProfiles.forEach(function(el) { //passes each property name/value pair from userProfiles to the el paramenter as arguement to function below.
  //Create new HTML section
  let nametag = document.createElement('section')
  nametag.innerHTML = `
  <h1>${el.name}</h1>
  `

  //how to assign userProfiles property, codeLanguages, a variable? Or it's value a variable?
  // for (i = 0; i < userProfiles.codeLanguages; i++) {
  // console.log(userProfiles[i].codeLanguages[i]); //<======THIS
  //
  // }
let x = 0; //reset codeLanguages counter
console.log("<=====NEW ENTRY=====>"); //divide console output by entry

for (y = 0; userProfiles.length > y; y++) {
  console.log(userProfiles[i].codeLanguages[x]);  //userProfiles is an ARRAY of OBJECTS
//above line console logs codeLanguages array at index 'x' of object 'i' once per userProfiles entry (4 times).

  //need to loop x by number of elements in codeLanguages array
  //increment x to...
  x++;
}


  //Populate above section with object properties values from userProfiles. How to automatically ouput property names as well?
  let card__details = document.createElement('ul')
  card__details.innerHTML = `
  <li><h3>Job Title: </h3><h4>${el.jobTitle}</h4></li>
  <li><h3>Company: </h3><h4>${el.company}</h4></li>
  <li><h3>Experience: </h3><h4>${el.experiance}</h4></li>
  <li><h3>Education: </h3><h4>${el.school}</h4></li>
  <li><h3>Degree: </h3><h4>${el.major}</h4></li>
  <li><h3>Email: </h3><h4>${el.email}</h4></li>
  <li><h3>LinkedIn: </h3><h4>${el.linkedInUrl}</h4></li>
  <!-- //code languages -->
  <li><h3>Language Proficiencies:</h3>
    <ul>
      <li><h4>${el.codeLanguages} </h4></li>
    </ul>
    </li>
  `

  //Append profile to previously selected HTML element, userProfileContainer
  userProfileContainer.appendChild(nametag)
  nametag.appendChild(card__details)

  //increment i to access next profile in userProfiles array
  i++;

})
