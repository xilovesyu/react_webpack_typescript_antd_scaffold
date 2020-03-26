import { isNil } from '../src/util/checkValues/CheckValue'

test('adds 1 + 2 to equal 3', () => {
    expect(1+2).toBe(3)
})

test('is undefined nil', () => {
    console.log('start check values')
    expect(isNil(undefined)).toBe(true)
    expect(isNil(null)).toBe(true)
    expect(isNil(0)).toBe(false)
})