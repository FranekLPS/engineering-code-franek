input.onButtonPressed(Button.A, function () {
    if (random == 0) {
        servos.P1.run(66)
        score = score + 1
        timeouttemp = 0
        timeout = timeout - 100
        music.playTone(349, music.beat(BeatFraction.Whole))
        servos.P1.stop()
    }
    if (random == 1) {
        off = true
        servos.P1.run(-100)
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.OnceInBackground)
        basic.showNumber(score)
        basic.pause(2000)
        servos.P1.stop()
    }
    if (random == 2) {
        off = true
        servos.P1.run(-100)
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.OnceInBackground)
        basic.showNumber(score)
        basic.pause(2000)
        servos.P1.stop()
    }
})
input.onPinPressed(TouchPin.P2, function () {
    LIght_LDR = pins.analogReadPin(AnalogPin.P2)
    if (LIght_LDR > 300) {
        basic.showIcon(IconNames.No)
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.OnceInBackground)
        off = true
        servos.P1.run(-100)
        basic.showNumber(score)
        basic.pause(2000)
        servos.P1.stop()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (random == 2) {
        servos.P1.run(66)
        score = score + 1
        timeouttemp = 0
        timeout = timeout - 100
        music.playTone(330, music.beat(BeatFraction.Whole))
        servos.P1.stop()
    }
    if (random == 1) {
        off = true
        servos.P1.run(-100)
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.OnceInBackground)
        basic.showNumber(score)
        basic.pause(2000)
        servos.P1.stop()
    }
})
input.onButtonPressed(Button.B, function () {
    if (random == 1) {
        servos.P1.run(66)
        score = score + 1
        timeouttemp = 0
        timeout = timeout - 100
        music.playTone(440, music.beat(BeatFraction.Whole))
        servos.P1.stop()
    }
    if (random == 0) {
        off = true
        servos.P1.run(-100)
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.OnceInBackground)
        basic.showNumber(score)
        basic.pause(2000)
        servos.P1.stop()
    }
    if (random == 2) {
        off = true
        servos.P1.run(-100)
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.OnceInBackground)
        basic.showNumber(score)
        basic.pause(2000)
        servos.P1.stop()
    }
})
let LIght_LDR = 0
let timeouttemp = 0
let random = 0
let off = false
let timeout = 0
let score = 0
servos.P1.run(50)
music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.OnceInBackground)
basic.showString("3 2 1 ")
score = 0
timeout = 3000
off = false
servos.P1.stop()
while (off == false) {
    random = randint(0, 2)
    if (random == 0) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (random == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (random == 2) {
        basic.showLeds(`
            . # . # .
            # # . # #
            # # . # #
            # # . # #
            . # . # .
            `)
    }
    timeouttemp = timeout
    while (timeouttemp > 0) {
        basic.pause(1)
        timeouttemp = timeouttemp - 1
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(250)
}
