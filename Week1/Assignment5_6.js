function greetingFilter(arr){
    return arr.filter(function(user){
        return user.age > 18 && user.gender === "Male";
    })
}

let arr = [user1 = {name: "Anu", age: 13, gender: "Female"}, 
        user2 = {name: "Rahul", age: 25, gender: "Male"},
        user3 = { name: "Anubata", age: 21, gender: "Male"},
        user4 = { name: "Debu", age: 23, gender: "Female"}
];

let ans = greetingFilter(arr);
console.log(ans);