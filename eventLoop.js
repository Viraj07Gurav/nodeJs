console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");


/*
Start
End
Promise
Timeout
*/

 /* JavaScript runs code line by line.
 It runs normal code first and keeps delayed tasks like setTimeout for later.
 After finishing all normal code, it comes back and runs the delayed task.
 This behavior is called the Event Loop.

“Because JavaScript can do only one thing at a time.
Event Loop helps run background tasks later without stopping the page.”

“Whenever we use setTimeout, API calls, promises, or click events, JavaScript uses the event loop.” 

“Event Loop allows JavaScript to execute asynchronous code by running delayed tasks after the main code finishes.
*/

