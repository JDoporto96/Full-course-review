const queryRetry = require('./ex2')

function mockFnFactory(numFail) {
    let i = 0
    return function(callback) {
        i++;
        if (i <= numFail) {
            return Promise.reject(new Error());
          } else {
            return Promise.resolve(i);
          }
    };
  }

function spy(fn) {
  let timesCalled = 0;
  return {
    fn: function(...args) {
      timesCalled++;
      return fn(...args);
    },
    getNumberOfTimesCalled() {
      return timesCalled;
    },
  };
}


test('`fn` failed on 1st attempt, and succeed thereafter ', () => {
    const fn = mockFnFactory(1);
    const spied = spy(fn);
  
    queryRetry(spied.fn, 3).then(
      data => {

        expect(spied.getNumberOfTimesCalled()).toBe(2);
  
        expect(data).toBe(2);
      },
      error => {}
    );
  });

test('`fn` failed on 1st and 2nd attempt, and succeed thereafter ', () => {
    const fn = mockFnFactory(2);
    const spied = spy(fn);
  
    queryRetry(spied.fn, 3).then(
      data => {

        expect(spied.getNumberOfTimesCalled()).toBe(3);
  
        expect(data).toBe(3);
      },
      error => {console.log(error)}
    );
  });

  test('`fn` failed on every attempt ', () => {
    const fn = mockFnFactory(3);
    const spied = spy(fn);
  
    queryRetry(spied.fn, 3).then(
      data => {

        expect(spied.getNumberOfTimesCalled()).toBe(3);
  
        expect(data).toBe(`The function was tried 3 times and failed`);
      },
      error => {console.log(error)}
    );
  });