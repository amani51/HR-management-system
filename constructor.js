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
let firstEmployee = new Employees(0,"Ghazi Samer","Administration","Senior","./images/1.png",0);
let secondEmployee=new Employees(0,"Lana Ali","Finance","Senior","./images/2.png",0);
let thirdEmployee=new Employees(0,"Tamara Ayoub","Marketing","Senior","./images/3.png",0);
let fourthEmployee=new Employees(0,"Safi Walid","Administration","Mid-Senior","./images/4.png",0);
let fifthEmployee=new Employees(0,"Omar Zaid","Development","Senior","./images/5.png",0);
let sixthEmployee=new Employees(0,"Rana Saleh","Development","Junior","./images/6.png",0);
let seventhEmployee=new Employees(0,"Hadi Ahmad","Finance","Mid-Senior","./images/7.png",0);

// form last tasks methods
firstEmployee.uniqueID(id)
firstEmployee.netSalary()
secondEmployee.uniqueID(id)
secondEmployee.netSalary()
thirdEmployee.uniqueID(id)
thirdEmployee.netSalary()
fourthEmployee.uniqueID(id)
fourthEmployee.netSalary()
fifthEmployee.uniqueID(id)
fifthEmployee.netSalary()
sixthEmployee.uniqueID(id)
sixthEmployee.netSalary()
seventhEmployee.uniqueID(id)
seventhEmployee.netSalary()

console.log(allEmployees)
// render method
function render(){
    document.write(`<div style="margin:75px; font-size:20px"><p>Employee Name: ${firstEmployee.fullName} </p><p> Department:  ${firstEmployee.department}</p><p> Salary: ${firstEmployee.Salary}</p></brk></div>`);
    document.write(`<div style="margin:70px"><p>Employee Name: ${secondEmployee.fullName} </p><p>Department:  ${secondEmployee.department} </p><p>Salary: ${secondEmployee.Salary}</p></div>`);
    document.write(`<div style="margin:70px"><p>Employee Name: ${thirdEmployee.fullName} </p><p>Department:  ${thirdEmployee.department} </p><p>Salary: ${thirdEmployee.Salary}</p></div>`);
    document.write(`<div style="margin:70px"><p>Employee Name: ${fourthEmployee.fullName} </p><p>Department:  ${fourthEmployee.department} </p><p>Salary: ${fourthEmployee.Salary}</p></div>`);
    document.write(`<div style="margin:70px"><p>Employee Name: ${fifthEmployee.fullName} </p><p>Department:  ${fifthEmployee.department} </p><p>Salary: ${fifthEmployee.Salary}</p></div>`);
    document.write(`<div style="margin:70px"><p>Employee Name: ${sixthEmployee.fullName}</p><p> Department:  ${sixthEmployee.department} </p><p>Salary: ${sixthEmployee.Salary}</p></div>`);
    document.write(`<div style="margin:70px"><p>Employee Name: ${seventhEmployee.fullName}</p><p> Department:  ${seventhEmployee.department}</p><p> Salary: ${seventhEmployee.Salary}</p></div>`);
}
function render(){

document.write(`<table style="margin:75px; font-size:30px;width:50%">
  <tr>
  <th style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);background-color:rgb(219, 199, 175)">Employee Name:</th>
  <th style="margin:75px; font-size:30px;text-align: center;color:rgb(211, 123, 22);background-color:rgb(233, 223, 212)""> ${firstEmployee.fullName}</th>
</tr>
<tr>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);rgb(196, 188, 180)">Department:</td>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(211, 123, 22);rgb(196, 188, 180)">  ${firstEmployee.department}</td>
</tr>
<tr>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);background-color:rgb(219, 199, 175)">Salary: </td>
  <td style="margin:75px; font-size:30px;text-align: center;color:rgb(211, 123, 22);background-color:rgb(233, 223, 212)"> ${firstEmployee.Salary}</td>
</tr>
</table>`)
document.write(`<table style="margin:75px; font-size:30px;width:50%">
  <tr>
  <th style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);background-color:rgb(219, 199, 175)">Employee Name:</th>
  <th style="margin:75px; font-size:30px;text-align: center;color:rgb(211, 123, 22);background-color:rgb(233, 223, 212)""> ${secondEmployee.fullName}</th>
</tr>
<tr>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);rgb(196, 188, 180)">Department:</td>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(211, 123, 22);rgb(196, 188, 180)">  ${secondEmployee.department}</td>
</tr>
<tr>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);background-color:rgb(219, 199, 175)">Salary: </td>
  <td style="margin:75px; font-size:30px;text-align: center;color:rgb(211, 123, 22);background-color:rgb(233, 223, 212)"> ${secondEmployee.Salary}</td>
</tr>
</table>`)
document.write(`<table style="margin:75px; font-size:30px;width:50%">
  <tr>
  <th style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);background-color:rgb(219, 199, 175)">Employee Name:</th>
  <th style="margin:75px; font-size:30px;text-align: center;color:rgb(211, 123, 22);background-color:rgb(233, 223, 212)""> ${thirdEmployee.fullName}</th>
</tr>
<tr>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);rgb(196, 188, 180)">Department:</td>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(211, 123, 22);rgb(196, 188, 180)">  ${thirdEmployee.department}</td>
</tr>
<tr>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);background-color:rgb(219, 199, 175)">Salary: </td>
  <td style="margin:75px; font-size:30px;text-align: center;color:rgb(211, 123, 22);background-color:rgb(233, 223, 212)"> ${thirdEmployee.Salary}</td>
</tr>
</table>`)
document.write(`<table style="margin:75px; font-size:30px;width:50%">
  <tr>
  <th style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);background-color:rgb(219, 199, 175)">Employee Name:</th>
  <th style="margin:75px; font-size:30px;text-align: center;color:rgb(211, 123, 22);background-color:rgb(233, 223, 212)""> ${fourthEmployee.fullName}</th>
</tr>
<tr>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);rgb(196, 188, 180)">Department:</td>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(211, 123, 22);rgb(196, 188, 180)">  ${fourthEmployee.department}</td>
</tr>
<tr>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);background-color:rgb(219, 199, 175)">Salary: </td>
  <td style="margin:75px; font-size:30px;text-align: center;color:rgb(211, 123, 22);background-color:rgb(233, 223, 212)"> ${fourthEmployee.Salary}</td>
</tr>
</table>`)
document.write(`<table style="margin:75px; font-size:30px;width:50%">
  <tr>
  <th style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);background-color:rgb(219, 199, 175)">Employee Name:</th>
  <th style="margin:75px; font-size:30px;text-align: center;color:rgb(211, 123, 22);background-color:rgb(233, 223, 212)""> ${fifthEmployee.fullName}</th>
</tr>
<tr>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);rgb(196, 188, 180)">Department:</td>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(211, 123, 22);rgb(196, 188, 180)">  ${fifthEmployee.department}</td>
</tr>
<tr>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);background-color:rgb(219, 199, 175)">Salary: </td>
  <td style="margin:75px; font-size:30px;text-align: center;color:rgb(211, 123, 22);background-color:rgb(233, 223, 212)"> ${fifthEmployee.Salary}</td>
</tr>
</table>`)
document.write(`<table style="margin:75px; font-size:30px;width:50%">
  <tr>
  <th style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);background-color:rgb(219, 199, 175)">Employee Name:</th>
  <th style="margin:75px; font-size:30px;text-align: center;color:rgb(211, 123, 22);background-color:rgb(233, 223, 212)""> ${sixthEmployee.fullName}</th>
</tr>
<tr>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);rgb(196, 188, 180)">Department:</td>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(211, 123, 22);rgb(196, 188, 180)">  ${sixthEmployee.department}</td>
</tr>
<tr>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);background-color:rgb(219, 199, 175)">Salary: </td>
  <td style="margin:75px; font-size:30px;text-align: center;color:rgb(211, 123, 22);background-color:rgb(233, 223, 212)"> ${sixthEmployee.Salary}</td>
</tr>
</table>`)
document.write(`<table style="margin:75px; font-size:30px;width:50%">
  <tr>
  <th style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);background-color:rgb(219, 199, 175)">Employee Name:</th>
  <th style="margin:75px; font-size:30px;text-align: center;color:rgb(211, 123, 22);background-color:rgb(233, 223, 212)""> ${seventhEmployee.fullName}</th>
</tr>
<tr>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);rgb(196, 188, 180)">Department:</td>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(211, 123, 22);rgb(196, 188, 180)">  ${seventhEmployee.department}</td>
</tr>
<tr>
  <td style="margin:75px; font-size:30px; text-align: center;color:rgb(141, 85, 21);background-color:rgb(219, 199, 175)">Salary: </td>
  <td style="margin:75px; font-size:30px;text-align: center;color:rgb(211, 123, 22);background-color:rgb(233, 223, 212)"> ${seventhEmployee.Salary}</td>
</tr>
</table>`)
}


render();
