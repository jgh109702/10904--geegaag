radio.onReceivedNumber(function (receivedNumber) {
    if (50 >= Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength))) {
        basic.showLeds(`
            # . . . #
            . # # # .
            . # # # .
            . # # # .
            # . . . #
            `)
        OLED.writeStringNewLine("good")
    } else if (60 > Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength))) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        OLED.writeStringNewLine("caution")
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.setVolume(97)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        OLED.writeStringNewLine("warning")
        music.setVolume(255)
        music.playTone(988, music.beat(BeatFraction.Breve))
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
