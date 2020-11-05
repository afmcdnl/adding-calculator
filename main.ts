input.onButtonPressed(Button.A, function () {
    num1 += 1
    basic.showNumber(num1)
})
input.onButtonPressed(Button.AB, function () {
    total = num1 + num2
    basic.showNumber(total)
})
input.onButtonPressed(Button.B, function () {
    num2 += 1
    basic.showNumber(num2)
})
let total = 0
let num2 = 0
let num1 = 0
num1 = 0
num2 = 0
total = 0
