const userData = ['Ivan', 23, 'Moscow'];

const [aname, age, adr] = userData;
console.log(aname, age, adr);

const userData2 = ['Ivan', 23, 'Moscow'];

const [aname2, _, adr2] = userData;
console.log(aname2, adr2);
