var isvalid = 0;
var html = "<br>";
function main(){  
    var rNo = document.getElementById("registrationno").value;
rNo = rNo.toString().split('') ;
for(i=0;i<rNo.length;i++) {
rNo[i] = parseInt(rNo[i]);
}
    var is_cgpa = document.getElementById("cgpa").value;
    var even_odd = (document.getElementById("Semister_Odd").checked) ? "Odd" : (document.getElementById("Semister_Even").checked) ? "Even" : "" ; 
    
    //console.log(rNo);
    //console.log(is_cgpa);
    //console.log(even_odd);
    
    rno_if_valid(rNo);
    var year= getyear(rNo);
    //console.log(year);
     
    var school= getschool(rNo);
    //console.log(school);
    
    //console.log(isvalid);
    if (isvalid==0) {
    html="<br><br><br><h1>INVALID REGISTRATION NUMBER</h1>";}
    else{
     got_the_school(getyear(rNo),even_odd,getschool(rNo),is_cgpa);
    }

    document.getElementById("main").classList.remove("login");
    document.getElementById("main").classList.add("the_main_php");
    document.getElementById("main").innerHTML = html;
    
    
 }

  /*var rNo = 179301197
  rNo = rNo.toString().split('') ;
for(i=0;i<rNo.length;i++) {
    rNo[i] = parseInt(rNo[i]);
}
  var is_cgpa = 10;
  var even_odd = "Odd";//ether Even or Odd
  var iselogible=1;
var isvalid = 1;*/

    //-------------------------------------------------------------------------------------------------------------

// WORKING PERFECTLY
 function rno_if_valid(rNo){
    if(rNo.length==9){//1
        if(rNo[0]==1){
            isvalid = 1;    
        }
        else{
            isvalid = 0;    
        }
    }//1
    else{
        isvalid = 0;    
    }
}
  //-------------------------------------------------------------------------------------------------------------

  // WORKING PERFECTLY
   function getyear(rNo){
   var year=0;
  if(isvalid==1){
    if(rNo[1]==9&&rNo[2]==9){
    year=1;
    }
    else if(rNo[1]==8&&rNo[2]==9){
      year=2;
    }
    else if (rNo[1]==7&&rNo[2]==9){
      year=3;
    }
    else if (rNo[1]==6&&rNo[2]==9){
      year=4;
    }
    else{
      year=0;
      isvalid = 0;
    }
  }
  return year;
}
  //-------------------------------------------------------------------------------------------------------------

  // WORKING PERFECTLY
 function getschool(rNo)
{   var school = null;
    if(isvalid==1){
      if(rNo[3]=="3" && rNo[4]=="0") {//4.1
        school = "School Of Compute Science And Information Technology";
      }
      else if(rNo[3]=="2" && rNo[4]=="0") {
        school = "School Of Electrical Electronics And Communication Engineering";
      }
      else if(rNo[3]=="4" && rNo[4]=="0") {
        school = "School of Automobile Mechanical And Mechatronics";
      }
      else if (rNo[3]=="1" && rNo[4]=="0") {
        school = "School of Civil and Chemical Engineering";
      }
      else {
        isvalid = 0;
      }
  }
  return school;
  //if registrationno is right
}


  //-------------------------------------------------------------------------------------------------------------

// WORKING PERFECTLY
 function got_the_school(year,even_odd,school,is_cgpa)
{
  if(isvalid==1&&school!=null&&year!=0){
        if(school=="School Of Compute Science And Information Technology"){
          ofAMM(is_cgpa,year,even_odd);
          ofCC(is_cgpa,year,even_odd);
          ofECEE(is_cgpa,year,even_odd);
        }
        else if (school=="School Of Electrical Electronics And Communication Engineering") {
          ofAMM(is_cgpa,year,even_odd);
          ofCC(is_cgpa,year,even_odd);
          ofCSIT(is_cgpa,year,even_odd);
        }
        else if (school=="School of Automobile Mechanical And Mechatronics") {
          ofCC(is_cgpa,year,even_odd);
          ofCSIT(is_cgpa,year,even_odd);
          ofECEE(is_cgpa,year,even_odd);
        }
        else if(school=="School of Civil and Chemical Engineering"){
          ofAMM(is_cgpa,year,even_odd);
          ofCSIT(is_cgpa,year,even_odd);
          ofECEE(is_cgpa,year,even_odd);
      }
  }
}


  //-------------------------------------------------------------------------------------------------------------

   function ofAMM(num,year,even_odd){
      html+="<br><h2>School of Automobile Mechanical And Mechatronics</h2>";
      //-------------------------------------------------------------------------------------------------------------
      if(year==2 && even_odd=="Odd"){
        if(num <= 10 && num >=7){
          html+="<br>AU1491   Electrical and Hybrid Vehicle";
          html+="<br>ME1491   Introduction to Nanotechnology";
        }
        if(num<=10&&num>=5){
          html+="<br>ME1492   Smart Materials";

        }
        if(num<=10&&num>=4){
          html+="<br>AU1490   Fundamentals of Automobile Engineering";
          html+="<br>AU1492   Engine Emissions and Control";
        }
        if(num<4){
          html+="<br></h1>NOT ELIGIBLE FOR OPEN ELECTIVE</h1>";
        }
      }
      //-------------------------------------------------------------------------------------------------------------
      else if (year==2 && even_odd=="Even") {
          if(num<=10&&num>=8.5){
            html+="<br>ME1592 Welding Technology";
            html+="<br>AU1690 Vehicle Maintenance and Garage practice";
          }
          if(num<=10&&num>=6.5){
            html+="<br>ME1593 Modern Manufacturing";
            html+="<br>ME1594 Designing for Automation";
            html+="<br>AU1691 Automotive Safety Systems";
          }
          if(num<=10&&num>=4){
            html+="<br>ME1595 Industrial Metrology";
            html+="<br>ME1596 Introduction to Computer Graphics";
            html+="<br>AU1692 Autotronics";
          }
          if(num<4){
            html+="<br></h1>NOT ELIGIBLE FOR OPEN ELECTIVE</h1>";
          }
      }
      //-------------------------------------------------------------------------------------------------------------
      else if (year==3 && even_odd=="Odd") {
        if(num<=10&&num>=8.5){
          html+="<br>ME1692 Non-destructive Testing";
        }
        if(num<=10&&num>=6.5){
          html+="<br>ME1693 Reliability, Availability and Maintenance Engineering";
          html+="<br>ME1695 Theory of Combustion and Emissions";
        }
        if(num<=10&&num>=4){
          html+="<br>ME1694 Energy Conservation, Audit and Management";
          html+="<br>ME1696 Optimization in Engineering Design";
        }
        if(num<4){
          html+="<br></h1>NOT ELIGIBLE FOR OPEN ELECTIVE</h1>";
        }
      }
      //-------------------------------------------------------------------------------------------------------------
      else if (year==3 && even_odd=="Even") {
          html+="<br>NO OPEN ELECTIVE OFFERED";
      }
      //-------------------------------------------------------------------------------------------------------------
      else {
        html+="<br></h1>NOT ELIGIBLE FOR OPEN ELECTIVE</h1>";
      }
  }//ofAMM


//-------------------------------------------------------------------------------------------------------------


   function ofCSIT(num,year,even_odd)
  {
    html+="<br><h2>School Of Compute Science And Information Technology</h2>";
    //-------------------------------------------------------------------------------------------------------------
    if(year==2 && even_odd=="Odd"){
      if (num<=10&&num>=8.5) {
        html+="<br>CS1490   Basics of Linux Programming";
        html+="<br>CS1492   Data Structures & Algorithms";
        html+="<br>CS1690   Web Technologies";
      }
      if (num<=10&&num>=7.5) {
        html+="<br>CS1491   OOPS using Java";
        html+="<br>CS1691   Soft Computing Techniques";

      }
      if (num<=10&&num>=6.5) {
        html+="<br>CS1493   Databases & ERP";
        html+="<br>CS1693   Introduction to Cyber Security";

      }
      if (num<=10&&num>=4) {
        html+="<br>CS1692   Numerical Methods in C";
      }
      if(num<4){
        html+="<br></h1>NOT ELIGIBLE FOR OPEN ELECTIVE</h1>";
      }
    }
    //-------------------------------------------------------------------------------------------------------------
    else if (year==2 && even_odd=="Even") {
      if(num<=10 && num>=8.5){
        html+="<br>CS1594 Enterprise Resource Planning";
        html+="<br>IT1591 Introduction to Python Programming";
      }
      if(num<=10&&num>=6.5){
        html+="<br>CC1590 Introduction to Web Technology";
        html+="<br>CC1591 Software Testing";
      }
      if(num<=10 && num>=4){
        html+="<br>CS1593 Principles of Programing Languages";
        html+="<br>CC1590 Introduction to Web Technology";
        html+="<br>IT1590 Cryptography";
        html+="<br>CC1591 Software Testing";
      }
      if(num<4){
        html+="<br></h1>NOT ELIGIBLE FOR OPEN ELECTIVE</h1>";
      }
    }
    //-------------------------------------------------------------------------------------------------------------
      else if (year==3 && even_odd=="Odd") {
        if(num<=10&& num>=8.5){
          html+="<br>CS1694 Process Mining";
          html+="<br>CS1698 Android Programming & App Development";
        }
        if(num<=10&& num>=6.5){
          html+="<br>IT1692 Introduction to Data Science";
          html+="<br>IT1693 Advance Topics in Computing";
        }
        if( num<=10&& num>=4){
          html+="<br>CC1690 Open Source Techniques";
          html+="<br>CC1691 Soft Computing Techniques";
        }
        if( num<4){
          html+="<br></h1>NOT ELIGIBLE FOR OPEN ELECTIVE</h1>";
        }
      }
      //-------------------------------------------------------------------------------------------------------------
      else if (year==3 && even_odd=="Even") {
        if(num<=10&& num>=8.5){
          html+="<br>CS1790 Introduction to Data Mining";
        }
        if( num<=10&& num>=6.5){
          html+="<br>CC1791 Introduction to Internet of Things";
        }
        if( num<=10&& num>=4){
          html+="<br>IT1791 Introduction to Real Time System";
          html+="<br>IT1792 Information & Web Security";
        }
        if(num<4){
          html+="<br></h1>NOT ELIGIBLE FOR OPEN ELECTIVE</h1>";
        }
      }
      //-------------------------------------------------------------------------------------------------------------
      else {
        html+="<br></h1>NOT ELIGIBLE FOR OPEN ELECTIVE</h1>";
      }
  }//ofCSIT


//-------------------------------------------------------------------------------------------------------------


 function ofECEE(num, year, even_odd)
{
  html+="<br><h2>School Of Electrical Electronics And Communication Engineering</h2>";
  //-------------------------------------------------------------------------------------------------------------
  if(year==2 && even_odd=="Odd"){
    if(num<=10&&num>=9){
      html+="<br>EE1491    Renewable Energy Sources";
    }
    if(num<=10&&num>=8.5){
      html+="<br>EE1490    Energy Conversion Technologies";
    }
    if (num<=10&&num>=7.5) {
      html+="<br>EC1490   Introduction to Communication Systems";

    }
    if (num<=10&&num>=6.5) {
      html+="<br>EC1491   Transducers and Instrumentation";
      html+="<br>EC1493   Introduction to Microprocessors ";
      html+="<br>EE1492   Analog& Digital Circuits";

    }
    if (num<=10&&num>=4) {
      html+="<br>EC1492   Consumer Electronics";
      html+="<br>EE1493   Electrical Energy Systems";
    }
    if(num<4){
      html+="<br></h1>NOT ELIGIBLE FOR OPEN ELECTIVE</h1>";
    }
  }
  //-------------------------------------------------------------------------------------------------------------
  else if (year==2 && even_odd=="Even") {
    if(num<=10&& num>=8.5){
      html+="<br>EC1590 Electronic Measurement & Measuring Instruments";
      html+="<br>EE1690 Electric Drives";
    }
    if(num<=10&& num>=6.5){
      html+="<br>EC1591 Electronic Product Design& Packaging";
      html+="<br>EE1691 Industrial Automation & Control";

    }
    if(num<=10&&num>=4){
      html+="<br>EC1592 Fundamentals of Image Processing";
      html+="<br>EE1692 Energy Auditing & Management";
      html+="<br>EE1693 Microprocessors & Microcontrollers";
    }
    if(num<4){
      html+="<br></h1>NOT ELIGIBLE FOR OPEN ELECTIVE</h1>";
    }
  }
  //-------------------------------------------------------------------------------------------------------------
  else if (year==3 && even_odd=="Odd") {
    if(num<=10&& num>=8.5){
      html+="<br>EC1690 MEMS Technology";
      html+="<br>EC1694 Non- Conventional Energy Sources";
    }
    if(num<=10&& num>=6.5){
      html+="<br>EC1691 Microcontrollers and Applications";
      html+="<br>EC1695 Audio and Video Systems";
    }
    if(num<=10&&num>=4){
      html+="<br>EC1692 Electronic Product Design and Packaging";
      html+="<br>EC1693 Neural Network and Fuzzy Logic";
      html+="<br>EC1696 Optical Fiber Technology";
    }
    if(num<4){
      html+="<br></h1>NOT ELIGIBLE FOR OPEN ELECTIVE</h1>";
    }
  }
  //-------------------------------------------------------------------------------------------------------------
  else if (year==3 && even_odd=="Even") {
    html+="<br>NO OPEN ELECTIVE OFFERED";
  }
  //-------------------------------------------------------------------------------------------------------------
  else {
    html+="<br></h1>NOT ELIGIBLE FOR OPEN ELECTIVE</h1>";
  }
}  //ofECEE


//-------------------------------------------------------------------------------------------------------------


 function ofCC(num,year,even_odd){
  html+="<br><h2>School of Civil and Chemical Engineering</h2>";
  //-------------------------------------------------------------------------------------------------------------
  if(year==2 && even_odd=="Odd"){
    if (num<=10&&num>=4) {
    html+="<br>CE1407   Heat Transfer Operations";
    html+="<br>CY1440 Physical and Analytical Chemistry Lab";
    }
    if(num<4){
      html+="<br></h1>NOT ELIGIBLE FOR OPEN ELECTIVE</h1>";
    }
  }
  //-------------------------------------------------------------------------------------------------------------
  else if (year==2 && even_odd=="Even") {
    if (num<=10&&num>=4) {
    html+="<br>CE1531 Transport Phenomena Lab";
    html+="<br>CE1532 Process Modeling and Simulation Lab";
    }
    if(num<4){
      html+="<br></h1>NOT ELIGIBLE FOR OPEN ELECTIVE</h1>";
    }
  }
  //-------------------------------------------------------------------------------------------------------------
  else if (year==3 && even_odd=="Odd") {
    if (num<=10&&num>=4) {
    html+="<br>CE1631 Transport Phenomena Lab II";
  }
    if(num<4){
      html+="<br></h1>NOT ELIGIBLE FOR OPEN ELECTIVE</h1>";
    }
  }
  //-------------------------------------------------------------------------------------------------------------
  else if (year==3 && even_odd=="Even") {
    html+="<br>NO OPEN ELECTIVE OFFERED";
  }
  //-------------------------------------------------------------------------------------------------------------
  else {
    html+="<br></h1>NOT ELIGIBLE FOR OPEN ELECTIVE</h1>";
  }
}//ofCC


//-------------------------------------------------------------------------------------------------------------

