input.onPinPressed(TouchPin.P0, function () {
    music.playTone(330, music.beat(BeatFraction.Sixteenth))
    dotkniecia += 1
})
input.onPinPressed(TouchPin.P2, function () {
    music.playTone(988, music.beat(BeatFraction.Whole))
    basic.showString("" + (dotkniecia))
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("Start")
    dotkniecia = 0
    music.playTone(131, music.beat(BeatFraction.Whole))
})
let dotkniecia = 0
dotkniecia = 0
basic.forever(function () {
	
})
