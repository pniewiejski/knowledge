/*
 * Loosely based on:
 * https://gist.github.com/jakearchibald/31b89cba627924972ad6
 * https://github.com/maciejcieslar/asynq
 * 
 */

module.exports = {
  asynchronous(generatorFunction) {
    const iterator = generatorFunction()

    return (function runner({ done, value }) {
      if (done) {
        return Promise.resolve(value)
      }

      return Promise.resolve(value).then(nextValue => runner(iterator.next(nextValue)), error => runner(iterator.throw(error)))
    })(iterator.next())
  }
}
