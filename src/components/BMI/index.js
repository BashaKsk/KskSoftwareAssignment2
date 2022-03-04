

import {Component} from 'react'

class BMIResults extends Component{

    render(){


        return (

      
        const PatientsData = [{
        "Gender" : "Male",
        "HeightCm": 171,
        "WeightKg": 96
    }, {
        "Gender": "Male",
        "HeightCm": 161,
        "WeightKg": 85
    }, {
        "Gender": "Male",
        "HeightCm": 180,
        "WeightKg": 77
    }, {
        "Gender": "Female",
        "HeightCm": 166,
        "WeightKg": 62
    }, {
        "Gender": "Female",
        "HeightCm": 150,
        "WeightKg": 70
    },
    {
        "Gender": "Female",
        "HeightCm": 167,
        "WeightKg": 82
    }
];


let calculateBMI = (eachPatient) => {
   
    let {
        HeightCm,
        WeightKg,
        Gender
    } = eachPatient;
    let HeightInMeters = (HeightCm / 100);
    let HeightInMeterSquare = HeightInMeters * HeightInMeters;
    let BMI = (WeightKg / HeightInMeterSquare).toFixed(3);
    if (BMI <= 18.4) {
        console.log(`Gender : ${Gender}, BMI is ${BMI} Kg/m2, Malnutrition Risk`);
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        console.log(`Gender : ${Gender}, BMI is ${BMI} Kg/m2, Low Risk`);
    } else if (BMI >= 25 && BMI <= 29.9) {
        console.log(`Gender : ${Gender}, BMI is ${BMI} Kg/m2, Enhanced Risk`);
    } else if (BMI >= 30 && BMI <= 34.9) {
        console.log(`Gender : ${Gender}, BMI is ${BMI} Kg/m2, Medium Risk`);
    } else if (BMI >= 35 && BMI <= 39.9) {
        console.log(`Gender : ${Gender}, BMI is ${BMI} Kg/m2, High Risk`);
    } else if (BMI >= 40) {
        console.log(`Gender : ${Gender}, BMI is ${BMI} Kg/m2, Very High Risk`);
    }

};


for (let eachPatient of PatientsData) {
    calculateBMI(eachPatient);
}

  )

    }
}

  

export default BMIResults
