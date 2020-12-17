radio.onReceivedNumber(function (receivedNumber) {
    if (50 < Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength))) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (40 < Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength))) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        music.setVolume(255)
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.A, function () {
    caller += 1
})
radio.sendNumber(0)
let caller = 0
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(1)
})
