function Start () {
    b = 0
    m = 0
    x1 = 0
    x2 = 0
    y1 = 0
    y2 = 0
    State = 0
    basic.showString("x1")
    basic.showNumber(x1)
}
input.onButtonPressed(Button.A, function () {
    if (State == 0) {
        x1 += -1
        basic.showNumber(x1)
    } else if (State == 1) {
        y1 += -1
        basic.showNumber(y1)
    } else if (State == 2) {
        x2 += -1
        basic.showNumber(x2)
    } else if (State == 3) {
        y2 += -1
        basic.showNumber(y2)
    }
})
input.onButtonPressed(Button.AB, function () {
    State += 1
    if (State == 1) {
        basic.showString("y1")
        basic.showNumber(y1)
    } else if (State == 2) {
        basic.showString("x2")
        basic.showNumber(x2)
    } else if (State == 3) {
        basic.showString("y2")
        basic.showNumber(y2)
    } else if (State == 4) {
        m = (y2 - y1) / (x2 - x1)
        b = y1 - m * x1
        basic.showString("y=" + m + "x+" + b)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (State == 0) {
        x1 += 1
        basic.showNumber(x1)
    } else if (State == 1) {
        y1 += 1
        basic.showNumber(y1)
    } else if (State == 2) {
        x2 += 1
        basic.showNumber(x2)
    } else if (State == 3) {
        y2 += 1
        basic.showNumber(y2)
    }
})
input.onGesture(Gesture.Shake, function () {
    Start()
})
let State = 0
let y2 = 0
let y1 = 0
let x2 = 0
let x1 = 0
let m = 0
let b = 0
Start()
