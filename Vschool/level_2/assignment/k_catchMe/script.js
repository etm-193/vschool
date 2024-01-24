//Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

function sum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    return x + y;
  }
  

  // Call the sum function inside a try block using "1" and "2" as arguments. 
  // Use console.log within a catch block to inform the user of the error.

function sum(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return x + y;
}

try {
  const result = sum("1", "2");
  console.log(result);
} catch (error) {
  console.log('Error:', error.message);
}


// Given a user object, write a function called login that takes a username and password as parameters. 
// Throw an error if either of them doesn't match. Otherwise, log to the console a message saying "login successful!"

var user = { username: "sam", password: "123abc" };

function login(username, password) {
  if (username !== user.username || password !== user.password) {
    throw new Error('Invalid username or password');
  } else {
    console.log('Login successful!');
  }
}

try {
  login("sam", "123abc");
} catch (error) {
  console.log('Error:', error.message);
}
