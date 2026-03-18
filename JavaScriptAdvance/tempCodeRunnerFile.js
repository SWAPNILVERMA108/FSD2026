// let deepcopy = JSON.parse(JSON.stringify(user));
// //  deepcopy.address.city = "noida";
//  console.log(user);
//  console.log(deepcopy);


function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
}
console.log(add(2)(3)(4));
// arrow function add(a){


const multiply = a => b => a*b;
console.log(multiply(2)(3));


function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn(args);
        }
        else{
            return function(...nextArgs){
                return curried(...args,...nextArgs);
            }
        }    }
}

const curried=add.bind(null,2);

console.log(curried(3,4));