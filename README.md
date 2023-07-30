# Async-Await
Promises were discovered to solve the problem of callback hell, which is a situation where multiple asynchronous operations are nested inside each other, making it difficult to read and maintain the code. Promises provide a way to handle asynchronous operations in a more readable and maintainable way.

Async/await is a newer syntax introduced in ES2017 that provides a more concise and readable way to work with promises. Async/await is built on top of promises and provides a way to write asynchronous code that looks and behaves like synchronous code.

Here's an example that demonstrates how async/await is better than promise.then design pattern:

In this example, we make two API calls using fetch() to get data from a JSON placeholder API. The first example uses the promise.then design pattern, while the second example uses async/await syntax.

In the promise.then design pattern, we chain multiple .then() methods to handle each API call's response. This can make the code difficult to read and maintain, especially when dealing with more complex scenarios.

In contrast, the async/await syntax provides a more concise and readable way to handle asynchronous operations. We define an async function that makes the API calls using await. This makes the code look and behave like synchronous code, making it easier to read and maintain. We also use a try...catch block to handle any errors that may occur during the API calls.

Overall, async/await is a better design pattern than promise.then because it provides a more concise and readable way to handle asynchronous operations, making the code easier to read and maintain.
