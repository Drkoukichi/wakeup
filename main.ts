function check () {
    let p: number
let st : number
let tf: boolean
st = 0
    p = input.rotation(Rotation.Pitch)
    tf = p < st
    return tf
}

function sleep () {
    led.plot(2, 2)
}

function desleep () {
    led.unplot(2, 2)
}

basic.forever(function () {
    if (check()) {
        sleep()
    } else {
        desleep()
    }
})
