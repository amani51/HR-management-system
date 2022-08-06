'use strict';
var id=999;
//getting elements by the name of tag 
const div=document.getElementsByTagName("div");
// create an object 
const administration =[];
const finance =[];
const marketing =[];
const development =[];
const allEmployees=[];
function Employees(employeeID,fullName,department,level,image,salary){
    this.employeeID=employeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.image=image;
    this.Salary=salary;
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

Employees.prototype.render=function(){
    const Image= document.createElement('img');
    Image.src=this.image;
    Image.alt=this.fullName;
    const employeeNameId=document.createElement('p')
    employeeNameId.textContent=`Name: ${this.fullName} -ID: ${this.employeeID}`;
    const employeeDepartment=document.createElement('p')
    employeeDepartment.textContent=`Department: ${this.department} -Level: ${this.level}`;
    const employeeSalary=document.createElement('p')
    employeeSalary.textContent= this.Salary;
    if (this.department=="Administration"){
        div[0].appendChild(Image);
        div[0].appendChild(employeeNameId);
        div[0].appendChild(employeeDepartment);
        div[0].appendChild(employeeDepartment);
        div[0].appendChild(employeeSalary);
        administration.push(this)
    }else if(this.department=="Finance"){
        div[1].appendChild(Image);
        div[1].appendChild(employeeNameId);
        div[1].appendChild(employeeDepartment);
        div[1].appendChild(employeeDepartment);
        div[1].appendChild(employeeSalary);
        finance.push(this)
    }else if(this.department=="Marketing"){
        div[2].appendChild(Image);
        div[2].appendChild(employeeNameId);
        div[2].appendChild(employeeDepartment);
        div[2].appendChild(employeeDepartment);
        div[2].appendChild(employeeSalary);
        marketing.push(this)

    }else{
        div[3].appendChild(Image);
        div[3].appendChild(employeeNameId);
        div[3].appendChild(employeeDepartment);
        div[3].appendChild(employeeDepartment);
        div[3].appendChild(employeeSalary);
        development.push(this)
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
    allEmployees[i].uniqueID(id);
    allEmployees[i].netSalary();
    allEmployees[i].render();
}

