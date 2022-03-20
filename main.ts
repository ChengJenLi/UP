input.onGesture(Gesture.LogoUp, function () {
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.West)
})
basic.forever(function () {
	
})
