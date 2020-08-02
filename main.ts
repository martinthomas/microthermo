let num = 0
let mytemp = 0
function c2f (num: number) {
    num = num / 5
    num = num * 9
    num = num + 32
    return num
}
basic.forever(function () {
    mytemp = c2f(input.temperature())

    basic.showNumber(mytemp)
})
