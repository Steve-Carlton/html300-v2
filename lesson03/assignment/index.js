//Get data.json into index.html

//Assign info from data.json a variable. JSON info differs from JS arrays in syntax by wrapping entire array in single quotes and wrapping key/values in double quotes. JS seems to be able to read the JSON with double quotes.
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
  }
]


// select DOM node
const userProfileContainer = document.querySelector(".template-hook");

//============FOR EACH DOM NODE FUNCTION============
//run a forEach on userProfiles
userProfiles.forEach(function(el) { //passes each key/value pair from userProfiles to the el paramenter as arguement to function
  //Create new HTML section
  let nametag = document.createElement('section')
  nametag.innerHTML = `
  <h1>${el.name}</h1>
  `
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
})
