// let arr = [1, 2, 3, 4, 5];
// let arrcopy = {...arr};
// arrcopy[0] = 10;
// console.log(arr);
// console.log(arrcopy);



// deep copy

let user ={
    name : "swapnil",
    age :27,
    address:{
        city:"delhi",
        pincode:110001
    }
};


//  let deepcopy = JSON.parse(JSON.stringify(user));
//  deepcopy.address.city = "noida";
//  console.log(user);
//  console.log(deepcopy);


 // using structuredclone()

let deepcopy = structuredClone(user);
deepcopy.address.city = "mumbai";
console.log(user);
console.log(deepcopy);

