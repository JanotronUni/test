basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
