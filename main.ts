basic.forever(function () {
    if (input.lightLevel() > 50) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
