input.onButtonPressed(Button.A, function () {
    animals += 1
    basic.showIcon(IconNames.Giraffe)
    basic.showNumber(animals)
})
input.onButtonPressed(Button.B, function () {
    plants += 1
    basic.showIcon(IconNames.Pitchfork)
    basic.showNumber(plants)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Giraffe)
    basic.showNumber(animals)
    basic.showIcon(IconNames.Pitchfork)
    basic.showNumber(plants)
})
let animals = 0
let plants = 0
basic.showNumber(0)
plants = 0
animals = 0
