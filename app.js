const userData = ['Ivan', 23, 'Moscow'];

const [aname, age, adr] = userData;
console.log(aname, age, adr);

const userData2 = ['Ivan', 23, 'Moscow'];

const [aname2, _, adr2] = userData2;
console.log(aname2, adr2);

const userData3 = ['Ivan', 23, 'Moscow'];

const [aname3, ...others] = userData3;
console.log(aname3, others);
