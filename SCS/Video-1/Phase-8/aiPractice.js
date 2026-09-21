//Write code that stores "Lahore" in a variable called city.
let user1 = {
  name: "Rushaan",
  address: {
    city: "Lahore",
    country: "Pakistan"
  }
};

let {city} = user1.address
city

/*Create three variables called name, age, and grade from the object without 
accessing them individually with student.name, student.age, etc.*/
let student = {
  name: "Ali",
  age: 17,
  grade: "A"
};

/*Write code that prints: name
                          age
                          city*/
let person = {
  name: "David",
  age: 20,
  city: "Islamabad"
};

Object.keys(person).forEach(function (val) {
  console.log(val);
})

/*Safely get the user's email.
Then change the object so that contact doesn't exist and make sure your code 
doesn't throw an error.*/
let user2 = {
  name: "Hamza",
  contact: {
    phone: "12345",
  }
};
user2?.contact?.email

/*Create a completely independent copy of original.
Then change the city's value in the copy to "Islamabad".
The original object must still contain:*/
let original = {
  name: "Ali",
  address: {
    city: "Lahore",
    area: "DHA"
  }
};

let clone = JSON.parse(JSON.stringify(original));
clone.address.city="Islamabad"

//Create a new object containing all properties from both objects.
let user3 = {
  name: "Noah",
  age: 18
};

let extra = {
  country: "Pakistan",
  city: "Lahore"
};

let combined = {...user3,...extra};

//Store "Pakistan" in a variable called country
let company = {
  name: "TechWorld",
  office: {
    location: {
      city: "Lahore",
      country: "Pakistan"
    }
  }
};
let {country} = company?.office?.location

/* Print each subject and its marks like:   math 90
                                            english 80
                                            science 95 */
let marks = {
  math: 90,
  english: 80,
  science: 95
};                      

Object.entries(marks).forEach(function(val){
  console.log(val[0] , val [1]);
});

//Create variables: username , instagram using one declaration
let user = {
  username: "Rushaan",
  profile: {
    social: {
      instagram: "eng.rushaan"
    }
  }
};

let { username, profile: { social: { instagram } } } = user;


/*Create a new object where the missing settings come from defaults, but the
 existing language from settings remains "Urdu".*/
 let defaults = {
  theme: "dark",
  language: "English",
  notifications: true
};

let settings = {
  language: "Urdu"
};

let combine = {...defaults,...settings};


// Print every product's name and its stock.
let products = {
  phone: {
    price: 50000,
    stock: 10
  },
  laptop: {
    price: 100000,
    stock: 5
  },
  tablet: {
    price: 30000,
    stock: 0
  }
};

for (let product in products) {
  console.log(`${product}: ${products[product].stock}`);
}

/*Write code that gets the principal's email.
Then make your code also work safely if principal or contact is missing.*/

let school = {
  name: "ABC School",
  principal: {
    name: "Mr. Ahmed",
    contact: {
      email: "ahmed@abc.com"
    }
  }
};


school?.principal?.contact?.email



let engRushaan ={
  YouTube : "Subscribe",
  Instagram : "Follow"
};
Object.entries(engRushaan).forEach(val => {
  console.log(val[0] ,"->",val[1])
});


console.log("2");