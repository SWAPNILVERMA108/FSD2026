let student ={
    marks:{
        maths:96,
        science:90
    }
};

// using object assign()
let studentcopy = Object.assign({}, student);
studentcopy.marks.maths = 80;
console.log(studentcopy);
console.log(student);