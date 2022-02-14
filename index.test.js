const Xenum = require('./index')

test('creates enum constants', () => {
  const { Up, Down } = Xenum.Constant

  expect(Up).toBe(Up)
  expect(Down).toBe(Down)
})

test('creates enum and assigns strings', () => {
  const { Summer, Autumn, Winter, Spring } = Xenum.String

  expect(Summer).toEqual('Summer')
  expect(Autumn).toEqual('Autumn')
  expect(Winter).toEqual('Winter')
  expect(Spring).toEqual('Spring')
})

test('creates enum and assigns strings', () => {
  const { Summer, Autumn, Winter, Spring } = Xenum.StringLower

  expect(Summer).toEqual('summer')
  expect(Autumn).toEqual('autumn')
  expect(Winter).toEqual('winter')
  expect(Spring).toEqual('spring')
})

test('creates enum and assigns numeric value', () => {
  const { A, B, C, D } = Xenum.Numeric

  expect(A).toBe(0)
  expect(B).toBe(1)
  expect(C).toBe(2)
  expect(D).toBe(3)
})

test('creates enum and assigns numeric value starting at index of choice', () => {
  const { A, B, C, D } = Xenum.NumericAt(1)

  expect(A).toBe(1)
  expect(B).toBe(2)
  expect(C).toBe(3)
  expect(D).toBe(4)
})