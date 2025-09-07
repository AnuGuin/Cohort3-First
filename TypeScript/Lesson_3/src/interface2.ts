interface User {
    name: string,
    age: number
}

const sumOfAge = (user1: User, user2: User) => {
    return user1.age + user2.age
}

const answer = sumOfAge({
    name: "Anubrata",
    age: 23
}, {
    name: "Abhishek",
    age: 24
})

console.log(answer);