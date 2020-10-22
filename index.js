function createPromise(val) {
  return Promise.resolve(val);
}

function createFailedPromise() {
  return Promise.reject(new Error('fail'));
}

function waitFor(promise) {
  return promise.then((val) => val * 2);
}

function waitForAll(promises) {
  return Promise.all(promises).then((results) => results.map((x) => x * 3));
}

function waitForFirstOne(promises) {
  return Promise.race(promises).then((val) => val * 4);
}

module.exports = {
  createPromise,
  createFailedPromise,
  waitFor,
  waitForAll,
  waitForFirstOne,
};
