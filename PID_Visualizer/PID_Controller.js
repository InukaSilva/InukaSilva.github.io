
class pidController {
    constructor(kp, ki, kd) {
        this.kp = kp;
        this.ki = ki;
        this.kd = kd;
        this.dt = 0.00001;
        this.min = -12;
        this.max = 12;
        this.previous_error = 0
        this.integral = 0
    }

    reset(){
        this.previous_error = 0;
        this.integral = 0;
    }

    compute(target_position, current_position){
        let error = target_position - current_position;

        let proportional_out = this.kp * error;

        this.integral += error * this.dt;
        let integral_out = this.ki * this.integral;

        let derivative_out = this.kd * ((error - this.previous_error) / this.dt);

        let output = proportional_out + integral_out + derivative_out;

        // Operating v : 4.5v - 12v
        if (output > 0){
            if (output > 12){
                output = 12;
            }
            else if (output < 4.5)  {
                output = 4.5;
            }
        }
        else if (output < 0){
            if (output < -12){
                output = -12;
            }
            else if (output > -4.5)  {
                output = -4.5;
            }
        }
        else{
            output = 0.0;
        }
        // // Operating v : 4.5v - 12v
        // if (output > this.max){
        //     output = this.max
        // }
        // else if (output < this.min)  {
        //     output = this.min
        // }

        this.previous_error = error
        console.log("Output:" + output);
        return output
    }
}

class robot {
    constructor (){
            // uses Banebots RS-540 motor
            this.target_pos = 30.0;
            this.current_pos = 0.0;
            this.wheel_diameter = 0.1524;
            this.wheel_friction = 0.95;
            this.max_velocity = 0.005;
            this.previous_velocity = 0.0;
            this.robot_weight = 50.0;
            this.gravity = 9.81;
            this.previous_time = 0.0;
            this.time = 0.0;
            this.speed_constant = 1400.0;
            this.torque_constant = 0.0066;
            this.resistance = 0.5;
    }

    reset(){
        this.time = 0.0;
        this.previous_time = 0.0;
        this.current_pos = 0.0;
        this.previous_velocity = 0.0;
    }

    get_tar_pos(){
        return this.target_pos;
    }

    get_curr_pos(){
        return this.current_pos;
    }

    increase_time(){
        this.time += 1;
        console.log("second" + this.time/1000);
    }
    
    get_time_seconds(){
        let current_time = this.time;
        let seconds = current_time /1000;
        return seconds;
    }

    get_velocity(voltage){

        let wheel_circumference = this.wheel_diameter * 3.14;

        let motor_rpm = voltage * this.speed_constant;

        let rotations_per_second = motor_rpm / 60;

        let velocity = (rotations_per_second * wheel_circumference) / 1000;


        if (velocity > this.max_velocity){
            velocity = this.max_velocity;
        }
        else if (velocity < -this.max_velocity){
            velocity = -this.max_velocity;
        }
        console.log("velocity" + velocity);
        return velocity;
    }

    calculate_current(voltage){
        let current = voltage / this.resistance;
        console.log("current" + current);
        return current;
    }
    calculate_torque(voltage){
        let torque = this.torque_constant * this.calculate_current(voltage);
        console.log("torque" + torque);
        return torque;
    }

    calculate_acceleration(voltage){
        let applied_force = this.calculate_torque(voltage) / (this.wheel_diameter / 2);
        let friction_force = -1 * this.wheel_friction * this.robot_weight * this.gravity;
        if (applied_force < 0){
            friction_force *= -1;
        }
        let net_force = applied_force - friction_force;

        let acceleration = (net_force / this.robot_weight) / 1000000;

        if (acceleration > 3){
            acceleration = 3;
        }
        else if (acceleration < -3){
            acceleration = -3;
        }
        console.log("acceleration" + acceleration);
        return acceleration;
    }

    get_distance_travelled(velocity, acceleration){
        let time_diff = this.get_time_seconds() - this.previous_time;
        let distance = (velocity * time_diff) + 0.5 * acceleration * (time_diff * time_diff);
        console.log("distance travelled: " + distance);
        this.current_pos += distance ;
        let total_distance = this.current_pos;  
    
        console.log("total distance: " + total_distance);
        return total_distance 
    }
    
}

function visualizer (){
    while (robotObject.time < 10000){
        robotObject.increase_time();
        let voltage = controllerObject.compute(robotObject.get_tar_pos(), robotObject.get_curr_pos());
        let velocity = robotObject.get_velocity(voltage);
        let acceleration = robotObject.calculate_acceleration(voltage);
        position = robotObject.get_distance_travelled(velocity, acceleration);   
    
        positionArray.push(position);
        timeArray.push(robotObject.get_time_seconds());
        targetArray.push(robotObject.get_tar_pos());
    }

    Plotly.newPlot("chart", [{
        x: timeArray,
        y: positionArray,
        type: "scatter",
        name: "Position"
    }, {
        x: timeArray,
        y: targetArray,
        type: "scatter",
        name: "Target Position"
    }], layout);

    console.log("robot position: " + position);
    console.log("Time Array: ", timeArray);
    console.log("Position Array: ", positionArray);
    console.log("Target Array: ", targetArray);
}

function run(){
    kp = parseFloat(document.getElementById("kp").value);
    ki = parseFloat(document.getElementById("ki").value);
    kd = parseFloat(document.getElementById("kd").value);
    position = 0.0; 

    if (!isNaN(kp) && !isNaN(ki) && !isNaN(kd)){
        controllerObject = new pidController(kp, ki, kd);
        controllerObject.reset();
        robotObject.reset();
        
        timeArray = [];
        positionArray = [];
        targetArray = [];

        visualizer();
    }
    else{
        kp = 0.0;
        ki = 0.0;
        kd = 0.0;
    }
}

let kp = 0.0;
let ki = 0.0;
let kd = 0.0;

let controllerObject = new pidController(kp, ki, kd);
const robotObject = new robot();
let position = 0.0;

let positionArray = [];
let timeArray = [];
let targetArray = [];
positionArray.push(position);
timeArray.push(0.0);
targetArray.push(robotObject.get_tar_pos());

const layout = {
    xaxis: {range: [0, 10], title: "Time (s)"},
    yaxis: {range: [0, 40], title: "Position (m)"},
    title: "Position vs Time"
};

//visualizer();
Plotly.newPlot("chart", [{
    x: timeArray,
    y: positionArray,
    mode: "lines",
    type: "scatter",
    name: "Position"
}, {
    x: timeArray,
    y: targetArray,
    mode: "lines",
    type: "scatter",
    name: "Target Position"
}], layout);
