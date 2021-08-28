function check () {
    let p: number
let stl : number
let sth : number
let tf: boolean
stl = 0
sth = 200
    p = input.rotation(Rotation.Pitch)
    tf = (p < stl || p < sth)
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
