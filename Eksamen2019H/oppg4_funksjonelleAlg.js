let v = [2, 4, 6];

//Deloppgave a)
console.log("divide each element of v by 2:", v.map(e => e/2 ));
//Deloppgave b)
console.log("add element index to each element of v:", v.map((e, i) => e+i));
//Deloppgave c)
console.log("sum of v, after multiplying each element of v by 2:", v.map(e => e*2).reduce((a,b)=>a+b));


let students = [{ name: 'Ola', age: 20 }, { name: 'Kari', age: 25 }, { name: 'Knut', age: 30 }];

//Deloppgave d)
console.log("average student age: ", students.map(e => e.age).reduce((a,b) => a+b) / students.length);
//Deloppgave e)
console.log("students with name starting with K:", students.filter(e=>e.name[0]=="K"));
//Deloppgave f)
console.log("is Ola a student: ", (students.some(e => (e.name=="Ola")) ? "yes" : "no"));
//Deloppgave g)
console.log("all students are aged 22 or older: ", (students.every(e => e.age >= 22) ? "yes" : "no"));