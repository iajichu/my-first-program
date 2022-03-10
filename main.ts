input.onButtonPressed(Button.A, function () {
    basic.showString("deez")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("B E G D A F C C5 ", 120)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(9)
})
basic.showIcon(IconNames.Rabbit)
basic.forever(function () {
	
})
