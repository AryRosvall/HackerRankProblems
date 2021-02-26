function getInParallel(apiCalls) {

  return new Promise((resolve, reject) => {
    let result = []
    result = apiCalls.map(api => api())
    resolve(Promise.all(result))
  })
}

let promise = getInParallel([() => Promise.resolve("First API call!"),
() => Promise.resolve("Second API call!")]);

if (promise) {

  promise.then((result) => console.log(result)).catch((err) => console.log(err));
}
