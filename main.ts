radio.onReceivedValue(function (name, value) {
    if (name == "forward") {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, speed * value)
    } else if (name == "backward") {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, speed * value)
    } else if (name == "left") {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, speed * value)
    } else if (name == "right") {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, speed * value)
    } else if (name == "stop") {
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    } else if (name == "boost") {
        speed = value * 25
    }
})
let speed = 0
speed = 25
let radio_group = 1
radio.setGroup(radio_group)
basic.showNumber(radio_group)
basic.forever(function () {
	
})
