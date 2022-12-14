'use strict';
var id=999;
const allEmployees=[];
function Employees(employeeID,fullName,department,level,image,salary){
    this.employeeID=employeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.image=image;
    this.salary=salary;
    allEmployees.push(this);
}

Employees.prototype.uniqueID=function (counter){
    this.employeeID=counter+1;
    ++id
}

Employees.prototype.netSalary=function() {
    if (this.level=="Senior"){
    let sal= Math.floor(Math.random() * (2000 - 1500) ) + 1500;
    this.Salary=Math.round(sal-(sal*0.075)); 
    }else if (this.level=="Mid-Senior"){
        let sal= Math.floor(Math.random() * (1500 - 1000) ) + 1000;
        this.Salary=Math.round(sal-(sal*0.075));    
    }else{
        let sal= Math.floor(Math.random() * (1000 - 500) ) + 500;
        this.Salary=Math.round(sal-(sal*0.075));     
    }
}
let firstEmployee = new Employees(0,"Ghazi Samer","Administration","Senior","https://raw.githubusercontent.com/LTUC/prep-course-py-03/main/Day10/Task/assets/Ghazi.jpg",0);
let secondEmployee=new Employees(0,"Lana Ali","Finance","Senior","https://raw.githubusercontent.com/LTUC/prep-course-py-03/main/Day10/Task/assets/Lana.jpg",0);
let thirdEmployee=new Employees(0,"Tamara Ayoub","Marketing","Senior","https://raw.githubusercontent.com/LTUC/prep-course-py-03/main/Day10/Task/assets/Tamara.jpg",0);
let fourthEmployee=new Employees(0,"Safi Walid","Administration","Mid-Senior","https://raw.githubusercontent.com/LTUC/prep-course-py-03/main/Day10/Task/assets/Safi.jpg",0);
let fifthEmployee=new Employees(0,"Omar Zaid","Development","Senior","https://raw.githubusercontent.com/LTUC/prep-course-py-03/main/Day10/Task/assets/Omar.jpg",0);
let sixthEmployee=new Employees(0,"Rana Saleh","Development","Junior","https://raw.githubusercontent.com/LTUC/prep-course-py-03/main/Day10/Task/assets/Rana.jpg",0);
let seventhEmployee=new Employees(0,"Hadi Ahmad","Finance","Mid-Senior","https://raw.githubusercontent.com/LTUC/prep-course-py-03/main/Day10/Task/assets/Hadi.jpg",0);


for (let i= 0; i< allEmployees.length;i++) {
  allEmployees[i].uniqueID(id)
allEmployees[i].netSalary()
  
}

console.log(allEmployees)

function render(){
for (let i = 0; i < allEmployees.length; i++) {
  document.write(`<table style="margin:75px; font-size:30px;width:50%">
  <tr>
  <th style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);background-color:rgb(219, 199, 175)">Employee Name:</th>
  <th style="margin:75px; font-size:30px;text-align: center;color:rgb(211, 123, 22);background-color:rgb(233, 223, 212)""> ${allEmployees[i].fullName}</th>
</tr>
<tr>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);rgb(196, 188, 180)">Department:</td>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(211, 123, 22);rgb(196, 188, 180)">  ${allEmployees[i].department}</td>
</tr>
<tr>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);background-color:rgb(219, 199, 175)">Salary: </td>
  <td style="margin:75px; font-size:30px;text-align: center;color:rgb(211, 123, 22);background-color:rgb(233, 223, 212)"> ${allEmployees[i].Salary}</td>
</tr>
</table>`)
}
}



render();
