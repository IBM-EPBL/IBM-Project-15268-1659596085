//Food's nutritional value 
const GRAINS = {
    "Oats, raw": {
        "Calories": 389,
        "TotalCarbohydrate": 66.27,
        "LinoleicAcid": 2.424,
        "AlphaLinoleicAcid": 0.111,
        "Protein": 16.89,
        "DietaryFiber": 10.6,
        "VitA": 0,
        "VitD": 0,
        "VitE": 0,
        "VitK": 0,
        "VitC": 0,
        "VitB1": 0.763,
        "VitB2": 0.139,
        "VitB3": 0.961,
        "VitB5": 1.349,
        "VitB6": 0.119,
        "VitB9": 56,
        "VitB12": 0,
        "Ca": 54,
        "Cu": 626,
        "Fe": 4.72,
        "Mg": 177,
        "Mn": 4.916,
        "P": 523,
        "Se": 0,
        "Zn": 3.97,
        "K": 0.429,
        "Na": 0.002
    },
    "Rice, raw": {
        "Calories": 362,
        "TotalCarbohydrate": 76.17,
        "LinoleicAcid": 0.918,
        "AlphaLinoleicAcid": 0.041,
        "Protein": 7.50,
        "DietaryFiber": 3.4,
        "VitA": 0,
        "VitD": 0,
        "VitE": 0,
        "VitK": 0,
        "VitC": 0,
        "VitB1": 0.413,
        "VitB2": 0.043,
        "VitB3": 4.308,
        "VitB5": 1.493,
        "VitB6": 0.509,
        "VitB9": 20,
        "VitB12": 0,
        "Ca": 33,
        "Cu": 277,
        "Fe": 1.80,
        "Mg": 143,
        "Mn": 3.743,
        "P": 264,
        "Se": 0,
        "Zn": 2.02,
        "K": 0.268,
        "Na": 0.004 
    },           
    "Quinoa, raw": {
        "Calories": 368,
        "TotalCarbohydrate": 64.16,
        "LinoleicAcid": 2.977,
        "AlphaLinoleicAcid": 0.260,
        "Protein": 14.12,
        "DietaryFiber": 7,
        "VitA": 8.4,
        "VitD": 0,
        "VitE": 2.44,
        "VitK": 0,
        "VitC": 0,
        "VitB1": 0.360,
        "VitB2": 0.318,
        "VitB3": 1.520,
        "VitB5": 0.772,
        "VitB6": 0.487,
        "VitB9": 184,
        "VitB12": 0,
        "Ca": 47,
        "Cu": 590,
        "Fe": 4.57,
        "Mg": 197,
        "Mn": 2.033,
        "P": 457,
        "Se": 0,
        "Zn": 3.10,
        "K": 0.563,
        "Na": 0.005
    }
};

const VEGETABLES = {
    "Broccoli, raw": {
        "Calories": 34,
        "TotalCarbohydrate": 6.64,
        "LinoleicAcid": 0.049,
        "AlphaLinoleicAcid": 0.063,
        "Protein": 2.82,
        "DietaryFiber": 2.6,
        "VitA": 373.8,
        "VitD": 0,
        "VitE": 0.78,
        "VitK": 101.6,
        "VitC": 89.2,
        "VitB1": 0.071,
        "VitB2": 0.117,
        "VitB3": 0.639,
        "VitB5": 0.573,
        "VitB6": 0.175,
        "VitB9": 63,
        "VitB12": 0,
        "Ca": 47,
        "Cu": 49,
        "Fe": 0.73,
        "Mg": 21,
        "Mn": 0.210,
        "P": 66,
        "Se": 2.5,
        "Zn": 0.41,
        "K": 0.316,
        "Na": 0.033
    },
    "Carrots, raw": {
        "Calories": 41,
        "TotalCarbohydrate": 9.58,
        "LinoleicAcid": 0.100,
        "AlphaLinoleicAcid": 0.002,
        "Protein": 0.93,
        "DietaryFiber": 2.8,
        "VitA": 10023.6,
        "VitD": 0,
        "VitE": 0.66,
        "VitK": 13.2,
        "VitC": 5.9,
        "VitB1": 0.066,
        "VitB2": 0.058,
        "VitB3": 0.983,
        "VitB5": 0.273,
        "VitB6": 0.138,
        "VitB9": 19,
        "VitB12": 0,
        "Ca": 33,
        "Cu": 45,
        "Fe": 0.30,
        "Mg": 12,
        "Mn": 0.143,
        "P": 35,
        "Se": 0.1,
        "Zn": 0.24,
        "K": 0.320,
        "Na": 0.069 
    },  
    "Potatos, raw, skin": {
        "Calories": 58,
        "TotalCarbohydrate": 12.44,
        "LinoleicAcid": 0.032,
        "AlphaLinoleicAcid": 0.010,
        "Protein": 2.57,
        "DietaryFiber": 2.5,
        "VitA": 0,
        "VitD": 0,
        "VitE": 0,
        "VitK": 0,
        "VitC": 11.4,
        "VitB1": 0.021,
        "VitB2": 0.038,
        "VitB3": 1.033,
        "VitB5": 0.302,
        "VitB6": 0.239,
        "VitB9": 17,
        "VitB12": 0,
        "Ca": 30,
        "Cu": 423,
        "Fe": 3.24,
        "Mg": 23,
        "Mn": 0.602,
        "P": 38,
        "Se": 0.3,
        "Zn": 0.35,
        "K": 0.413,
        "Na": 0.010
    }
};

const FRUITS = {
    "Apples, raw, with skin": {
        "Calories": 52,
        "TotalCarbohydrate": 13.81,
        "LinoleicAcid": 0.043,
        "AlphaLinoleicAcid": 0.009,
        "Protein": 0.26,
        "DietaryFiber": 2.4,
        "VitA": 32.4,
        "VitD": 0,
        "VitE": 0.18,
        "VitK": 2.2,
        "VitC": 4.6,
        "VitB1": 0.017,
        "VitB2": 0.026,
        "VitB3": 0.091,
        "VitB5": 0.061,
        "VitB6": 0.041,
        "VitB9": 3,
        "VitB12": 0,
        "Ca": 6,
        "Cu": 27,
        "Fe": 0.12,
        "Mg": 5,
        "Mn": 0.035,
        "P": 11,
        "Se": 0,
        "Zn": 0.04,
        "K": 0.107,
        "Na": 0.001 
    },
    "Bananas, raw": {
        "Calories": 89,
        "TotalCarbohydrate": 22.84,
        "LinoleicAcid": 0.046,
        "AlphaLinoleicAcid": 0.027,
        "Protein": 1.09,
        "DietaryFiber": 2.6,
        "VitA": 38.4,
        "VitD": 0,
        "VitE": 0.10,
        "VitK": 0.5,
        "VitC": 8.7,
        "VitB1": 0.031,
        "VitB2": 0.073,
        "VitB3": 0.665,
        "VitB5": 0.334,
        "VitB6": 0.367,
        "VitB9": 20,
        "VitB12": 0,
        "Ca": 5,
        "Cu": 78,
        "Fe": 0.26,
        "Mg": 27,
        "Mn": 0.270,
        "P": 22,
        "Se": 1.0,
        "Zn": 0.15,
        "K": 0.358,
        "Na": 0.001
    },
    "Oranges, raw, with peel": {
        "Calories": 63,
        "TotalCarbohydrate": 15.50,
        "LinoleicAcid": 0.044,
        "AlphaLinoleicAcid": 0.016,
        "Protein": 1.30,
        "DietaryFiber": 4.5,
        "VitA": 150,
        "VitD": 0,
        "VitE": 0,
        "VitK": 0,
        "VitC": 71,
        "VitB1": 0.100,
        "VitB2": 0.050,
        "VitB3": 0.500,
        "VitB5": 0.330,
        "VitB6": 0.093,
        "VitB9": 30,
        "VitB12": 0,
        "Ca": 70,
        "Cu": 57,
        "Fe": 0.80,
        "Mg": 14,
        "Mn": 0,
        "P": 22,
        "Se": 0.7,
        "Zn": 0.11,
        "K": 0.196,
        "Na": 0.002 
    }
};
 
//Daily required macro and micronutrients, depending on age, sex, if pregnant or lactating
const USERS_NUTRIENT_REQUIRMENTS = {
    "maleReq18": {
        "reqTotalCarbohydrate": 130,
        "reqLinoleicAcid": 17,
        "reqAlphaLinoleicAcid": 1.6,
        "reqProtein": 56,
        "reqDietaryFiber": 38,
        "reqVitA": 900,
        "reqVitD": 15,
        "reqVitE": 15,
        "reqVitK": 120,
        "reqVitC": 90,
        "reqVitB1": 1.2,
        "reqVitB2": 1.3,
        "reqVitB3": 16,
        "reqVitB5": 5,
        "reqVitB6": 1.3,
        "reqVitB9": 400,
        "reqVitB12": 2.4,
        "reqCa": 1000,
        "reqCu": 900,
        "reqFe": 8,
        "reqMg": 400,
        "reqMn": 2.3,
        "reqP": 700,
        "reqSe": 55,
        "reqZn": 11,
        "reqK": 4.7,
        "reqNa": 1.5
    },
    "maleReq31": {
        "reqTotalCarbohydrate": 130,
        "reqLinoleicAcid": 17,
        "reqAlphaLinoleicAcid": 1.6,
        "reqProtein": 56,
        "reqDietaryFiber": 38,
        "reqVitA": 900,
        "reqVitD": 15,
        "reqVitE": 15,
        "reqVitK": 120,
        "reqVitC": 90,
        "reqVitB1": 1.2,
        "reqVitB2": 1.3,
        "reqVitB3": 16,
        "reqVitB5": 5,
        "reqVitB6": 1.3,
        "reqVitB9": 400,
        "reqVitB12": 2.4,
        "reqCa": 1000,
        "reqCu": 900,
        "reqFe": 8,
        "reqMg": 420,
        "reqMn": 2.3,
        "reqP": 700,
        "reqSe": 55,
        "reqZn": 11,
        "reqK": 4.7,
        "reqNa": 1.5
    },
    "maleReq51": {
        "reqTotalCarbohydrate": 130,
        "reqLinoleicAcid": 14,
        "reqAlphaLinoleicAcid": 1.6,
        "reqProtein": 56,
        "reqDietaryFiber": 30,
        "reqVitA": 900,
        "reqVitD": 15,
        "reqVitE": 15,
        "reqVitK": 120,
        "reqVitC": 90,
        "reqVitB1": 1.2,
        "reqVitB2": 1.3,
        "reqVitB3": 16,
        "reqVitB5": 5,
        "reqVitB6": 1.7,
        "reqVitB9": 400,
        "reqVitB12": 2.4,
        "reqCa": 1000,
        "reqCu": 900,
        "reqFe": 8,
        "reqMg": 420,
        "reqMn": 2.3,
        "reqP": 700,
        "reqSe": 55,
        "reqZn": 11,
        "reqK": 4.7,
        "reqNa": 1.3
    },
    "maleReq71": {
        "reqTotalCarbohydrate": 130,
        "reqLinoleicAcid": 14,
        "reqAlphaLinoleicAcid": 1.6,
        "reqProtein": 56,
        "reqDietaryFiber": 30,
        "reqVitA": 900,
        "reqVitD": 20,
        "reqVitE": 15,
        "reqVitK": 120,
        "reqVitC": 90,
        "reqVitB1": 1.2,
        "reqVitB2": 1.3,
        "reqVitB3": 16,
        "reqVitB5": 5,
        "reqVitB6": 1.7,
        "reqVitB9": 400,
        "reqVitB12": 2.4,
        "reqCa": 1200,
        "reqCu": 900,
        "reqFe": 8,
        "reqMg": 420,
        "reqMn": 2.3,
        "reqP": 700,
        "reqSe": 55,
        "reqZn": 11,
        "reqK": 4.7,
        "reqNa": 1.2
    },                                                        
    "femaleReq18": {
        "reqTotalCarbohydrate": 130,
        "reqLinoleicAcid": 12,
        "reqAlphaLinoleicAcid": 1.1,
        "reqProtein": 46,
        "reqDietaryFiber": 25,
        "reqVitA": 700,
        "reqVitD": 15,
        "reqVitE": 15,
        "reqVitK": 90,
        "reqVitC": 75,
        "reqVitB1": 1.1,
        "reqVitB2": 1.1,
        "reqVitB3": 14,
        "reqVitB5": 5,
        "reqVitB6": 1.3,
        "reqVitB9": 400,
        "reqVitB12": 2.4,
        "reqCa": 1000,
        "reqCu": 900,
        "reqFe": 18,
        "reqMg": 310,
        "reqMn": 1.8,
        "reqP": 700,
        "reqSe": 55,
        "reqZn": 8,
        "reqK": 4.7,
        "reqNa": 1.5
    },
    "femaleReq31": {
        "reqTotalCarbohydrate": 130,
        "reqLinoleicAcid": 12,
        "reqAlphaLinoleicAcid": 1.1,
        "reqProtein": 46,
        "reqDietaryFiber": 25,
        "reqVitA": 700,
        "reqVitD": 15,
        "reqVitE": 15,
        "reqVitK": 90,
        "reqVitC": 75,
        "reqVitB1": 1.1,
        "reqVitB2": 1.1,
        "reqVitB3": 14,
        "reqVitB5": 5,
        "reqVitB6": 1.3,
        "reqVitB9": 400,
        "reqVitB12": 2.4,
        "reqCa": 1000,
        "reqCu": 900,
        "reqFe": 18,
        "reqMg": 320,
        "reqMn": 1.8,
        "reqP": 700,
        "reqSe": 55,
        "reqZn": 8,
        "reqK": 4.7,
        "reqNa": 1.5
    },
    "femaleReq51": {
        "reqTotalCarbohydrate": 130,
        "reqLinoleicAcid": 11,
        "reqAlphaLinoleicAcid": 1.1,
        "reqProtein": 46,
        "reqDietaryFiber": 21,
        "reqVitA": 700,
        "reqVitD": 15,
        "reqVitE": 15,
        "reqVitK": 90,
        "reqVitC": 75,
        "reqVitB1": 1.1,
        "reqVitB2": 1.1,
        "reqVitB3": 14,
        "reqVitB5": 5,
        "reqVitB6": 1.5,
        "reqVitB9": 400,
        "reqVitB12": 2.4,
        "reqCa": 1200,
        "reqCu": 900,
        "reqFe": 8,
        "reqMg": 320,
        "reqMn": 1.8,
        "reqP": 700,
        "reqSe": 55,
        "reqZn": 8,
        "reqK": 4.7,
        "reqNa": 1.3
    },
    "femaleReq71": {
        "reqTotalCarbohydrate": 130,
        "reqLinoleicAcid": 11,
        "reqAlphaLinoleicAcid": 1.1,
        "reqProtein": 46,
        "reqDietaryFiber": 21,
        "reqVitA": 700,
        "reqVitD": 20,
        "reqVitE": 15,
        "reqVitK": 90,
        "reqVitC": 75,
        "reqVitB1": 1.1,
        "reqVitB2": 1.1,
        "reqVitB3": 14,
        "reqVitB5": 5,
        "reqVitB6": 1.5,
        "reqVitB9": 400,
        "reqVitB12": 2.4,
        "reqCa": 1200,
        "reqCu": 900,
        "reqFe": 8,
        "reqMg": 320,
        "reqMn": 1.8,
        "reqP": 700,
        "reqSe": 55,
        "reqZn": 8,
        "reqK": 4.7,
        "reqNa": 1.2
    },
    "femalePregnant": {
        "reqTotalCarbohydrate": 175,
        "reqLinoleicAcid": 13,
        "reqAlphaLinoleicAcid": 1.4,
        "reqProtein": 71,
        "reqDietaryFiber": 28,
        "reqVitA": 770,
        "reqVitD": 15,
        "reqVitE": 15,
        "reqVitK": 90,
        "reqVitC": 85,
        "reqVitB1": 1.4,
        "reqVitB2": 1.4,
        "reqVitB3": 18,
        "reqVitB5": 6,
        "reqVitB6": 1.9,
        "reqVitB9": 600,
        "reqVitB12": 2.6,
        "reqCa": 1000,
        "reqCu": 1000,
        "reqFe": 27,
        "reqMg": 360,
        "reqMn": 2,
        "reqP": 700,
        "reqSe": 60,
        "reqZn": 11,
        "reqK": 4.7,
        "reqNa": 1.5
    },
    "femaleLactating": {
        "reqTotalCarbohydrate": 210,
        "reqLinoleicAcid": 13,
        "reqAlphaLinoleicAcid": 1.3,
        "reqProtein": 71,
        "reqDietaryFiber": 29,
        "reqVitA": 1300,
        "reqVitD": 15,
        "reqVitE": 15,
        "reqVitK": 90,
        "reqVitC": 120,
        "reqVitB1": 1.4,
        "reqVitB2": 1.6,
        "reqVitB3": 17,
        "reqVitB5": 7,
        "reqVitB6": 2,
        "reqVitB9": 500,
        "reqVitB12": 2.8,
        "reqCa": 1000,
        "reqCu": 1300,
        "reqFe": 9,
        "reqMg": 310,
        "reqMn": 2.6,
        "reqP": 700,
        "reqSe": 70,
        "reqZn": 12,
        "reqK": 5.1,
        "reqNa": 1.5
    }
};

//Creating empty object for user's personal nutrient requirements
let userNutReq = {}; 

//Checking if the required field are filled and moving to the next div
function logIn() {
    let name = document.getElementById("inputName").value;
    let email = document.getElementById("inputEmail").value;
    let question = document.getElementById("personalQuestion").innerHTML;
    
    if (name === "" || email === "") {
        document.getElementById("messageFillIn").innerHTML = "Please fill in the required fields.";
    }
    
    else {
        scrollTo(0,0);
        document.getElementById("divLogIn").style.display = "none";
        document.getElementById("divPersonalInfo").style.display = "block";
        document.getElementById("personalGreeting").innerHTML = "HI, " + name.toUpperCase() + "!";
        document.getElementById("personalQuestion").innerHTML = name.toUpperCase() + question;               
    }
}

//If the user is female, show select box, so she can choose if she is pregnant or lactating
function showSelect() {
    let sexValue = document.getElementById("selectSex").value;
    
    if (sexValue === "female") {
        document.getElementById("selectPregnantLactating").style.display = "inline-block";
        document.getElementById("pregnantLactating").style.display = "inline-block";
    }

    else {
        document.getElementById("selectPregnantLactating").style.display = "none";
        document.getElementById("pregnantLactating").style.display = "none";
        document.getElementById("selectPregnantLactating").value = "";
    }
}

//Calculate and present energy requirements and personalized daily nutrient requirements
function calculate() {
    let age = document.getElementById("inputAge").value;
    let sex = document.getElementById("selectSex").value;
    let pregnantOrLactating = document.getElementById("selectPregnantLactating").value;
    let height = document.getElementById("inputHeight").value;
    let weight = document.getElementById("inputWeight").value;
    let lifestyle = document.getElementById("selectLifestyle").value;

    //Inicializing activity coeficient (which depend of user's sex) and required calories (which depends of user's age, height, weight, sex, pregnant or lactating and activity)
    let activity = 0;
    let reqCalories = 0;  

    //Checking if the form is filled
    if (age === "" || sex === "") {
        document.getElementById("messageFillIn2").innerHTML = "Please fill in the required fields.";
    }
    
    else if ((height === "" || weight === "") || lifestyle === "") {
        document.getElementById("messageFillIn2").innerHTML = "Please fill in the required fields.";
    }

    else if (age < 18) {
        document.getElementById("messageFillIn2").innerHTML = "This app is not for users under 18 years";    
    }

    //If the form is filled, calculate
    else {   
        scrollTo(0,0);         
        document.getElementById("divPersonalInfo").style.display = "none";
        document.getElementById("divDailyRequirement").style.display = "block";

        //Calculating calories and daily nutrient requirements
        if (sex === "male") {
            //Calculating activity coeficient and required daily calories
            switch (lifestyle) {
                case "sedentary":
                    activity = 1;
                    break;
                case "littleActive":
                    activity = 1.11;
                    break;
                case "active":
                    activity = 1.25;
                    break;
                case "veryActive":
                    activity = 1.48;
                    break;
            }

            reqCalories = 662 - (9.53 * age) + activity * ( (15.91 * weight) + (539.6 * height / 100) );

            //Asigning age specific nutrient requirements for male users
            if (18 <= age <= 30) {
                userNutReq = USERS_NUTRIENT_REQUIRMENTS["maleReq18"];
            }
            else if (31 <= age <= 50) {
                userNutReq = USERS_NUTRIENT_REQUIRMENTS["maleReq31"];
            }
            else if (51 <= age <= 70) {
                userNutReq = USERS_NUTRIENT_REQUIRMENTS["maleReq51"];
            }
            else if (age >= 71) {
                userNutReq = USERS_NUTRIENT_REQUIRMENTS["maleReq71"];
            }
        }

        else if (sex === "female") {
            //Calculating activity coeficient and required daily calories
            switch (lifestyle) {
                case "sedentary":
                    activity = 1;
                    break;
                case "littleActive":
                    activity = 1.12;
                    break;
                case "active":
                    activity = 1.27;
                    break;
                case "veryActive":
                    activity = 1.45;
                    break;
            }

            reqCalories = 354 - (6.91 * age) + activity * ( (9.36 * weight) + (726 * height / 100) );
                               
            //Calculating calories & nutrient requirements when the user is pregnant or lactating
            if (pregnantOrLactating !== "") {
                switch (pregnantOrLactating) {
                    case "pregnant2":
                        reqCalories += 340;
                        break;
                    case "pregnant3":
                        reqCalories += 452;
                        break;
                    case "lactating1":
                        reqCalories += 330;
                        break;
                    case "lactating2":
                        reqCalories += 400;
                        break;
                }

                switch (pregnantOrLactating) {
                    case "pregnant1":
                    case "pregnant2":
                    case "pregnant3":
                        userNutReq = USERS_NUTRIENT_REQUIRMENTS["femalePregnant"];
                        break;
                    case "lactating1":
                    case "lactating2":
                        userNutReq = USERS_NUTRIENT_REQUIRMENTS["femaleLactating"];
                        break;
                }
            }
            else {
                //Asigning age specific nutrient requirements for female users
                if (18 <= age <= 30) {
                    userNutReq = USERS_NUTRIENT_REQUIRMENTS["femaleReq18"];
                }
                else if (31 <= age <= 50) {
                    userNutReq = USERS_NUTRIENT_REQUIRMENTS["femaleReq31"];
                }
                else if (51 <= age <= 70) {
                    userNutReq = USERS_NUTRIENT_REQUIRMENTS["femaleReq51"];
                }
                else if (age >= 71) {
                    userNutReq = USERS_NUTRIENT_REQUIRMENTS["femaleReq71"];
                }
            }                   
        }

        //Adding calories property to user's object with nutrient requrements
        userNutReq["reqCalories"] = reqCalories.toFixed(0);
        
        //Filling the table "Daily Requirement"
        let tableReq = document.getElementById("tableDailyRequirement");
        let cellReqId = "";

        for (let rowIndex = 0; rowIndex < tableReq.rows.length; rowIndex++) {
            if (rowIndex == 6 || rowIndex == 19) {
            }
            else {
                cellReqId = tableReq.rows.item(rowIndex).cells[1].id;
                tableReq.rows.item(rowIndex).cells[1].innerHTML = userNutReq[cellReqId];
            }
        }
    }
    
}

//Moving to divQuestion from 
function next() {
    scrollTo(0,0);
    document.getElementById("divDailyRequirement").style.display = "none";
    document.getElementById("divQuestion").style.display = "block";  
}

//Moving to divFoodSelection
function checkMyDay() {
    scrollTo(0,0);
    document.getElementById("divQuestion").style.display = "none";
    document.getElementById("divFoodSelection").style.display = "block";
}

//Storing row index of tableMyPlate
let rowIndexMyPlate = 0;

//Adding food artical and number input for entering food's quantity in tableMyPlate, if food is chosen in drop down menu
function addFood(foodCategory) {
    let foodCategoryID = foodCategory.id;
    let foodCategoryValue = document.getElementById(foodCategoryID).value;

    if (foodCategoryValue !== "") {
        document.getElementById("tableMyPlate").style.display = "block";

        rowIndexMyPlate++;
        
        let tableFood = document.getElementById("tableMyPlate");
        let rowFood = tableFood.insertRow(rowIndexMyPlate);
        let cellFood1 = rowFood.insertCell(0);
        let cellFood2 = rowFood.insertCell(1);
        let cellFood3 = rowFood.insertCell(2);
        let cellFood4 = rowFood.insertCell(3);
    
        cellFood1.innerHTML = foodCategoryValue;  

        let inputCell2 = document.createElement("INPUT");
        inputCell2.className = "inputsMyPlate";
        inputCell2.type = "number";
        inputCell2.name = "quantity";
        inputCell2.value = 100;
        cellFood2.appendChild(inputCell2);

        cellFood3.innerHTML = "g ";
    
        let btnCell4 = document.createElement("BUTTON"); 
        btnCell4.className = "btnDelete"; 
        btnCell4.type = "button";
        btnCell4.addEventListener("click", deleteRow);           
        let textBtn = document.createTextNode("Delete");
        btnCell4.appendChild(textBtn);     
        cellFood4.appendChild(btnCell4);
    }
}

//Calculating the sum of nutrients of all food and calling other function for calculating percents of fullfiled daily requirements
function tracking() {       
    //Initiazilizing daily consumed nutrients
    let totalNutrients = {
        "Calories": 0,
        "TotalCarbohydrate": 0,
        "LinoleicAcid": 0,
        "AlphaLinoleicAcid": 0,
        "Protein": 0,
        "DietaryFiber": 0,
        "VitA": 0,
        "VitD": 0,
        "VitE": 0,
        "VitK": 0,
        "VitC": 0,
        "VitB1": 0,
        "VitB2": 0,
        "VitB3": 0,
        "VitB5": 0,
        "VitB6": 0,
        "VitB9": 0,
        "VitB12": 0,
        "Ca": 0,
        "Cu": 0,
        "Fe": 0,
        "Mg": 0,
        "Mn": 0,
        "P": 0,
        "Se": 0,
        "Zn": 0,
        "K": 0,
        "Na": 0 
    };    
    let tableList = document.getElementById("tableMyPlate");
    let foodValue = "";
    let foodQuantityCell = "";
    let foodQuantity = 0;
    let foodCtg = {};

    if (tableList.rows.length === 1) {
        document.getElementById("messageFillIn3").innerHTML = "Please choose your food.";
    }
    
    else {
        scrollTo(0,0);
        document.getElementById("divFoodSelection").style.display = "none";
        document.getElementById("divNutritionTracker").style.display = "block";
    
        //Checking the food category
        for (let indexRows = 1; indexRows < tableList.rows.length; indexRows++) {
            foodValue = tableList.rows.item(indexRows).cells[0].innerHTML;
            foodQuantityCell = tableList.rows.item(indexRows).cells[1];
            foodQuantity = foodQuantityCell.children[0].value;

            if (GRAINS.hasOwnProperty(foodValue)) {
                foodCtg = GRAINS;
            }
            else if (VEGETABLES.hasOwnProperty(foodValue)) {
                foodCtg = VEGETABLES;
            }
            else if (FRUITS.hasOwnProperty(foodValue)) {
                foodCtg = FRUITS;
            }

            totalNutrients["Calories"] += foodCtg[foodValue]["Calories"] * foodQuantity / 100;
            totalNutrients["TotalCarbohydrate"] += foodCtg[foodValue]["TotalCarbohydrate"] * foodQuantity / 100;
            totalNutrients["LinoleicAcid"] += foodCtg[foodValue]["LinoleicAcid"] * foodQuantity / 100;
            totalNutrients["AlphaLinoleicAcid"] += foodCtg[foodValue]["AlphaLinoleicAcid"] * foodQuantity / 100;
            totalNutrients["Protein"] += foodCtg[foodValue]["Protein"] * foodQuantity / 100;
            totalNutrients["DietaryFiber"] += foodCtg[foodValue]["DietaryFiber"] * foodQuantity / 100;
            totalNutrients["VitA"] += foodCtg[foodValue]["VitA"] * foodQuantity / 100;
            totalNutrients["VitD"] += foodCtg[foodValue]["VitD"] * foodQuantity / 100;
            totalNutrients["VitE"] += foodCtg[foodValue]["VitE"] * foodQuantity / 100;
            totalNutrients["VitK"] += foodCtg[foodValue]["VitK"] * foodQuantity / 100;
            totalNutrients["VitC"] += foodCtg[foodValue]["VitC"] * foodQuantity / 100;
            totalNutrients["VitB1"] += foodCtg[foodValue]["VitB1"] * foodQuantity / 100;
            totalNutrients["VitB2"] += foodCtg[foodValue]["VitB2"] * foodQuantity / 100;
            totalNutrients["VitB3"] += foodCtg[foodValue]["VitB3"] * foodQuantity / 100;
            totalNutrients["VitB5"] += foodCtg[foodValue]["VitB5"] * foodQuantity / 100;
            totalNutrients["VitB6"] += foodCtg[foodValue]["VitB6"] * foodQuantity / 100;
            totalNutrients["VitB9"] += foodCtg[foodValue]["VitB9"] * foodQuantity / 100;
            totalNutrients["VitB12"] += foodCtg[foodValue]["VitB12"] * foodQuantity / 100;
            totalNutrients["Ca"] += foodCtg[foodValue]["Ca"] * foodQuantity / 100;
            totalNutrients["Cu"] += foodCtg[foodValue]["Cu"] * foodQuantity / 100;
            totalNutrients["Fe"] += foodCtg[foodValue]["Fe"] * foodQuantity / 100;
            totalNutrients["Mg"] += foodCtg[foodValue]["Mg"] * foodQuantity / 100;
            totalNutrients["Mn"] += foodCtg[foodValue]["Mn"] * foodQuantity / 100;
            totalNutrients["P"] += foodCtg[foodValue]["P"] * foodQuantity / 100;
            totalNutrients["Se"] += foodCtg[foodValue]["Se"] * foodQuantity / 100;
            totalNutrients["Zn"] += foodCtg[foodValue]["Zn"] * foodQuantity / 100;
            totalNutrients["K"] += foodCtg[foodValue]["K"] * foodQuantity / 100;
            totalNutrients["Na"] += foodCtg[foodValue]["Na"] * foodQuantity / 100; 
        }
        
        //calculating percenting of daily nutrients fullfilment and filling the tables cells
        //Filling the table "Daily Requirement"
            let tableResult = document.getElementById("tableNutritionTracker");
            let cellResultId = "";
            let percents = 0;
            let str = "req";
            let prop = "";
        
            for (let rowIndex = 0; rowIndex < tableResult.rows.length; rowIndex++) {
                if (rowIndex == 6 || rowIndex == 19) {
                }
                else {
                    cellResultId = tableResult.rows.item(rowIndex).cells[1].id;
                    prop = str.concat(cellResultId);
                    percents = totalNutrients[cellResultId] / userNutReq[prop] * 100;
                    tableResult.rows.item(rowIndex).cells[1].children[0].innerHTML = percents.toFixed(0) + "%";

                    if (percents >= 100) {
                        tableResult.rows.item(rowIndex).cells[1].children[0].style.width = "100%";
                        tableResult.rows.item(rowIndex).cells[1].children[0].style.backgroundColor = "#8aff75";
                    }
                    else {
                        tableResult.rows.item(rowIndex).cells[1].children[0].style.width = percents.toFixed(0) + "%";
                        tableResult.rows.item(rowIndex).cells[1].children[0].style.backgroundColor = "#ff758a";
                    }
                }
            }
    }
}

//Returning to add more foods on daily food list
function addMoreFood() {
    scrollTo(0,0);
    document.getElementById("divFoodSelection").style.display = "block";
    document.getElementById("divNutritionTracker").style.display = "none";
}

//Delete the row with the artical that the user doesn't need
function deleteRow() {
    this.closest("tr").remove();

    rowIndexMyPlate--;
}

