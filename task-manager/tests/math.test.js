const { calculateTip, fahrenheitToCelcius, celsiusToFahrenheit, add } = require('../src/math')

test('Should calculate total with tip', () => {
  const total = calculateTip(10, .3)
  expect(total).toBe(13)
})

test('Should calculate total with default tip', () => {
  const total = calculateTip(10)
  expect(total).toBe(12.5)
})

test('Shoule convert 32 F to 0 C', () => {
  const celsius = fahrenheitToCelcius(32)
  expect(celsius).toBe(0)
})

test('Should convert 0 C to 32 F', () => {
  const fahrenheit = celsiusToFahrenheit(0)
  expect(fahrenheit).toBe(32)
})

test('Async test demo', (done) => {
  setTimeout(() => {
    expect(1).toBe(1)
    done()
  }, 2000)
})

test('Async add', (done) => {
  add(4, 5).then((result) => {
    expect(result).toBe(9)
    done()
  })
})

test('Should add two numbers async/await', async () => {
  const sum = await add(10, 22)
  expect(sum).toBe(32)
})