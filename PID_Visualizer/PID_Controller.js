
class pidController {
    constructor(kp, ki, kd) {
        this.kp = kp;
        this.ki = ki;
        this.kd = kd;
        this.dt = 0.001;
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

        if (output > this.max){
            output = this.max
        }
        else if (output < this.min)  {
            output = this.min
        }

        this.previous_error = error
        console.log("Output:" + output);
        return output
    }
}

class robot {
    constructor (){
            this.target_pos = 30.0;
            this.current_pos = 0.0;
            this.wheel_diameter = 0.1524;
            this.wheel_friction = 0.95;
            this.max_velocity = 12.0;
            this.previous_velocity = 0.0;
            this.robot_weight = 50.0;
            this.previous_time = 0.0;
            this.time = 0.0;
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

    get_velocity(power){

        let wheel_circumference = this.wheel_diameter * 3.14;

        let motor_rpm = power * 15;

        let rotations_per_second = motor_rpm / 60;

        let velocity = rotations_per_second * wheel_circumference;

        if (velocity > this.max_velocity){
            velocity = this.max_velocity;
        }
        else if (velocity < -this.max_velocity){
            velocity = -this.max_velocity;
        }
        console.log("velocity" + velocity);
        return velocity;
    }

    get_acceleration(current_velocity){
        let time = this.get_time_seconds();
        
        let acceleration = (current_velocity - this.previous_velocity)/(time - this.previous_time || 1);
        this.previous_time = time;
        this.previous_velocity = current_velocity;

        console.log("acceleration" + acceleration);
        return acceleration;
    }

    calculate_acceleration_after_friction(acceleration){
        let applied_force = this.robot_weight * acceleration;
        let friction_force = (this.wheel_friction * this.robot_weight * 9.18);
        if (applied_force > 0){
            friction_force = -1 * friction_force;
        }
        
        let new_acceleration = (applied_force + friction_force) / this.robot_weight;

        if (new_acceleration > 3){
            new_acceleration = 3;
        }
        else if (new_acceleration < -3){
            new_acceleration = -3;
        }

        console.log("after friction acceleration" + new_acceleration);
        return new_acceleration
    }

    get_distance_travelled(velocity, acceleration){
        let time = this.get_time_seconds();
        //let time_diff = time - this.previous_time;
        let distance = (velocity * time) + 0.5 * acceleration * (time * time);
    
        this.current_pos += distance ;
        let total_distance = this.current_pos;  
    
        console.log("total distance: " + total_distance);
        return total_distance 
    }
    
}

function visualizer (){
    //10000
    while (robotObject.time < 10000){
        let power = controllerObject.compute(robotObject.get_tar_pos(), robotObject.get_curr_pos());
        let velocity = robotObject.get_velocity(power);
        let acceleration = robotObject.get_acceleration(velocity);
        let final_acceleration = robotObject.calculate_acceleration_after_friction(acceleration);
    
        position = robotObject.get_distance_travelled(velocity, final_acceleration);   
    
        positionArray.push(position);
        timeArray.push(robotObject.get_time_seconds());
        targetArray.push(robotObject.get_tar_pos());
 
        robotObject.increase_time();
    }
        //visualizer();
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