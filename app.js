'use strict';
var id=999;

var employee1={
    employeeID: 0,
    fullName: "Ghazi Samer",
    Department: "Administration",
    Level: "Senior",
    image:"./images/1.png",
    Salary:0,
    uniqueID: function(counter){
        this.employeeID=counter+1;
        ++id
    },
    netSalary:function() {
        let sal= Math.floor(Math.random() * (2000 - 1500) ) + 1500;
        this.Salary=Math.round(sal-(sal*0.075));
        
        
    }, 
} 
employee1.uniqueID(id)
employee1.netSalary()
console.log("Employee name: "+employee1["fullName"])
console.log("Employee salary: "+employee1["Salary"])

var employee2={
    employeeID: 0,
    fullName: "Lana Ali",
    Department: "Finance",
    Level: "Senior",
    image:"./images/2.png",
    Salary:0,
    uniqueID: function(counter){
        this.employeeID=counter+1;
        ++id
    },
    netSalary:function() {
        let sal= Math.floor(Math.random() * (2000 - 1500) ) + 1500;
        this.Salary=Math.round(sal-(sal*0.075));
    }, 
} 
employee2.uniqueID(id)
employee2.netSalary()
console.log("Employee name: "+employee2["fullName"])
console.log("Employee salary: "+employee2["Salary"])

var employee3={
    employeeID: 0,
    fullName: "Tamara Ayoub",
    Department: "Marketing",
    Level: "Senior",
    image:"./images/3.png",
    Salary:0,
    uniqueID: function(counter){
        this.employeeID=counter+1;
        ++id
    },
    netSalary:function() {
        let sal= Math.floor(Math.random() * (2000 - 1500) ) + 1500;
        this.Salary=Math.round(sal-(sal*0.075));
    }, 
} 
employee3.uniqueID(id)
employee3.netSalary()
console.log("Employee name: "+employee3["fullName"])
console.log("Employee salary: "+employee3["Salary"])

var employee4={
    employeeID: 0,
    fullName: "Safi Walid",
    Department: "Administration",
    Level: "Mid-Senior",
    image:"./images/4.png",
    Salary:0,
    uniqueID: function(counter){
        this.employeeID=counter+1;
        ++id
    },
    netSalary:function() {
        let sal= Math.floor(Math.random() * (1500 - 1000) ) + 1000;
        this.Salary=Math.round(sal-(sal*0.075));
    }, 
} 
employee4.uniqueID(id)
employee4.netSalary()
console.log("Employee name: "+employee4["fullName"])
console.log("Employee salary: "+employee4["Salary"])

var employee5={
    employeeID: 0,
    fullName: "Omar Zaid",
    Department: "Development",
    Level: "Senior",
    image:"./images/5.png",
    Salary:0,
    uniqueID: function(counter){
        this.employeeID=counter+1;
        ++id
    },
    netSalary:function() {
        let sal= Math.floor(Math.random() * (2000 - 1500) ) + 1500;
        this.Salary=Math.round(sal-(sal*0.075));
    }, 
} 
employee5.uniqueID(id)
employee5.netSalary()
console.log("Employee name: "+employee5["fullName"])
console.log("Employee salary: "+employee5["Salary"])

var employee6={
    employeeID: 0,
    fullName: "Rana Saleh",
    Department: "Development",
    Level: "Junior",
    image:"./images/6.png",
    Salary:0,
    uniqueID: function(counter){
        this.employeeID=counter+1;
        ++id
    },
    netSalary:function() {
        let sal= Math.floor(Math.random() * (1000 - 500) ) + 500;
        this.Salary=Math.round(sal-(sal*0.075));
    }, 
} 
employee6.uniqueID(id)
employee6.netSalary()
console.log("Employee name: "+employee6["fullName"])
console.log("Employee salary: "+employee6["Salary"])

var employee7={
    employeeID: 0,
    fullName: "Hadi Ahmad",
    Department: "Finance",
    Level: "Mid-Senior",
    image:"./images/7.png",
    Salary:0,
    uniqueID: function(counter){
        this.employeeID=counter+1;
        ++id
    },
    netSalary:function() {
        let sal= Math.floor(Math.random() * (1500 - 1000) ) + 1000;
        this.Salary=Math.round(sal-(sal*0.075));
    }, 
} 
employee7.uniqueID(id)
employee7.netSalary()
console.log("Employee name: "+employee7["fullName"])
console.log("Employee salary: "+employee7["Salary"])
