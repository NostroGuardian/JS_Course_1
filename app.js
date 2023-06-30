const arr = [1, 3, 5, 7];

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log('~~~~~~~~');

for (let el of arr) {
  console.log(el);
}

console.log('~~~~~~~~');

for (let index in arr) {
  console.log(index);
}
