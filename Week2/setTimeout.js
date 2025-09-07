function callback(err, data){
    if(err){
        console.log("There is an error");
    } else {
        console.log(data);
    }
}

setTimeout(callback,3000);
console.log("I will run immidately");