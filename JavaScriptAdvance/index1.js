let user = {
    name : "swapnil",
    age :27,
    address:{
        city:"delhi",
        pincode:110001
    }
};
let copyuser = {...user};
copyuser.address.city = "mumbai";
console.log(copyuser);