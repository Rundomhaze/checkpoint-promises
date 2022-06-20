function createPromise(data) {
  return new Promise((resolve) => {
    resolve(data)
  });
};

function createFailedPromise(){
  return Promise.reject(new Error('fail'))
};

function waitFor(prom) {
  return new Promise((resolve) => {
    resolve(prom)
  })
  .then((data) => data * 2)
};

function waitForAll(arrProms) {
  return Promise.all((arrProms))  
  .then((data) => data.map((el) => el * 3))
};

function waitForFirstOne(arrProms){
  return Promise.race((arrProms))
  .then((data) => data * 4)
};



module.exports = {
  createPromise,
  createFailedPromise,
  waitFor,
  waitForAll,
  waitForFirstOne,
};
