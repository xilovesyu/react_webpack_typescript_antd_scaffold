//export const a: string = '123444'
const helloWorld: () => string = () => {
    const regex = /(!{2,})|(\?{2,})/g
    const testString = '???,,,!!!???!!!'
    const result = testString.match(regex)
    console.log('test:', result)
    return 'some string'
}
export {helloWorld}