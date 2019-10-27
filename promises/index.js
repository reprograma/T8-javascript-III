const resolvedProm = Promise.resolve(33);

let thenProm = resolvedProm.then(value => {
  console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
  return value;
});
// instantly logging the value of thenProm
console.log(thenProm);

// using setTimeout we can postpone the execution of a function to the moment the stack is empty
setTimeout(() => {
  console.log(thenProm);
});