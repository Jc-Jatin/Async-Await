// Promise.then design pattern
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return fetch(`https://jsonplaceholder.typicode.com/posts/${data.userId}`)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

// Async/await syntax
async function getData() {
  try {
    const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data1 = await response1.json();
    console.log(data1);
    
    const response2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${data1.userId}`);
    const data2 = await response2.json();
    console.log(data2);
  } catch (error) {
    console.log(error);
  }
}

getData();
