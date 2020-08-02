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
    if (mytemp < 70) {
        mytemp = 70
    } else if (mytemp > 110) {
        mytemp = 110
    }
    pins.servoWritePin(AnalogPin.P0, Math.map(mytemp, 70, 110, 0, 180))
    basic.pause(5000)
})
