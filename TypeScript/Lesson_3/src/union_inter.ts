interface user {
    firstname: string,
    lastname: string,
    age: number
}

let userArr: user[] = [
    {firstname: "Anu", lastname: "Guin", age: 18},
    {firstname: "i", lastname: "Gun", age: 22},
    {firstname: "Raj", lastname: "Oin", age: 8}
]

console.log(userArr.filter(a => a.age > 18))
