const tasks = ['task1', 'task2', 'task3'];

for (let i = 0; i < tasks.length; i++) {
  if (tasks[i] === 'task2') {
    continue;
  }
  console.log(tasks[i]);
}

console.log('--------');

for (let i = 0; i < tasks.length; i++) {
  if (tasks[i] === 'task2') {
    break;
  }
  console.log(tasks[i]);
}
