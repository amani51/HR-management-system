var employees=  {
    "1":{
    employeeID: "",
    fullName: "Ghazi Samer",
    Department: "Administration",
    Level: "Senior",
    image:"",
    Salary:""
    },
    "2":{
        employeeID: "",
        fullName: "Lana Ali	",
        Department: "Finance",
        Level: "Senior",
        image:"",
        Salary:""
    },
    "3":{
        employeeID: "",
        fullName: "Tamara Ayoub",
        Department: "",
        Level: "Senior",
        image:"",
        Salary:""
    },
    "4":{
        employeeID: "",
        fullName: "Safi Walid",
        Department: "Administration",
        Level: "Mid-Senior",
        image:"",
        Salary:""
    },
    "5":{
        employeeID: "",
        fullName: "Omar Zaid",
        Department: "Development",
        Level: "Senior",
        image:"",
        Salary:""
    },
    "6":{
        employeeID: "",
        fullName: "Rana Saleh",
        Department: "Development",
        Level: "Junior",
        image:"",
        Salary:""
    },
    "7":{
        employeeID: "",
        fullName: "Hadi Ahmad",
        Department: "Finance",
        Level: "Mid-Senior",
        image:"",
        Salary:""


    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

for (let i=1;i<8;i++){
    let ID=999+i
    employees[i]["employeeID"]=ID
    // console.log(employees[i]["employeeID"])
}

for (let i=1;i<8;i++){
    if (employees[i]["Level"]=="Senior"){
        let sal= getRndInteger(1500, 2000)
        let netSalary=Math.round(sal-(sal*0.075));
        employees[i]["Salary"]=netSalary
    }else if (employees[i]["Level"]=="Mid-Senior"){
        let sal= getRndInteger(1000,1500)
        let netSalary=Math.round(sal-(sal*0.075));
        employees[i]["Salary"]=netSalary
    }else{
        let sal= getRndInteger(500,1000)
        let netSalary=Math.round(sal-(sal*0.075));
        employees[i]["Salary"]=netSalary
    }
    //  console.log(employees[i]["Salary"]) 
}
// console.log(employees)
for (let i=1;i<8;i++){
    console.log("Employee name: "+employees[i]["fullName"])
    console.log("Employee salary: "+employees[i]["Salary"])
}

