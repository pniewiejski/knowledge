const assert = require("assert")

const { asynchronous } = require("./async")

describe("asynchronous", () => {
  it("should wait for values", () => {
    let a, b
    return asynchronous(function* () {
      a = yield Promise.resolve(1)
      b = yield Promise.resolve(2)
    }).finally(() => {
      expect(a).toEqual(1)
      expect(b).toEqual(2)
    })
  })

  it("should return a promise which resolves to expected values", () => {
    const expectedValue = 123
    return asynchronous(function* () {
      return yield expectedValue
    }).then(value => {
      assert.equal(value, expectedValue)
    })
  })

  it("should catch errors", () => {
    const errorMsg = "Custom Error Message"
    const expectedValue = "abc"

    return asynchronous(function* () {
      try {
        const value = yield Promise.resolve(123)
        assert.equal(value, 123)

        const value2 = yield Promise.reject(new Error(errorMsg))
      } catch (error) {
        assert.equal(error.message, errorMsg)
      }

      return yield Promise.resolve(expectedValue)
    }).then(value => {
      assert.equal(value, expectedValue)
    })
  })

  it("should quit function when error is not caught", () => {
    const errorMsg = "Custom Error Message"
    return asynchronous(function* () {
      const value1 = yield Promise.reject(new Error(errorMsg))
      const value2 = yield Promise.resolve("This won't be returned")

    }).then(() => {
      assert.ok(false, "This line should not be executed")
    }).catch(error => {
      assert.equal(error.message, errorMsg)
    })
  })
})
