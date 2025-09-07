function greeting(user){
  if (user.gender == "Male" && user.age >= 18){
    console.log("Hello Mr. " + user.name + " you are an adult");
  } else if (user.gender == "Female" && user.age >= 18){
    console.log("Hello Ms. " + user.name + " you are an adult");
  } else if(user.gender == "Male" && user.age < 18){
    console.log("Hello Mr. " + user.name + " you are a minor");
  } else if(user.gender == "Female" && user.age < 18){
    console.log("Hello Ms. " + user.name + " you are a minor");
  } else {
    console.log("Hello " + user.name);
  }
  
}

let user = {
	name: "Harkirat",
	age: 19,
  gender: "Male"
}

let user1 = {
	name: "Anu",
	age: 23,
  gender: "Female"

}

greeting(user);
greeting(user1);