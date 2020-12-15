radio.onReceivedNumber(function (receivedNumber) {
    if (50 >= Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength))) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else if (60 > Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength))) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
radio.setGroup(5)
basic.forever(function () {
    radio.sendNumber(0)
})
