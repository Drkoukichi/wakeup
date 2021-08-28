function check () //現在の本体の角度をもとに寝ているかの判断を行う
{
    let p: number
    let stl : number
    let sth : number
    let tf: boolean
    stl = 0
    sth = 110
    p = input.rotation(Rotation.Pitch)
    tf = p < stl || p > sth
    return tf
}

function sleep ()　//寝ていた場合の処理 
{
    pins.digitalWritePin(0,1)
    led.plot(2,2)
}

function desleep ()　//寝ていなかった場合、もしくは起床した場合 
{
    pins.digitalWritePin(0, 0)
    led.unplot(2,2)
}

//ここまで判定　実行用
basic.forever(function () {
    if (check()) {
        sleep()
    } else {
        desleep()
    }
})
