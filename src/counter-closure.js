//You can create a function within an outer function (a closure) that allows you to update a private variable but the variable wouldn't be accessible from outside the function without the use of a helper function.

function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function (increment) { _counter += increment; },
    retrieve: function () { return 'The counter is currently at: ' + _counter; }
  }
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.add(5);
c.add(9);
c.add(10);

// now we can access the private variable in the following way
console.log("c.retrieve();", c.retrieve())
c.retrieve(); // => The counter is currently at: 14