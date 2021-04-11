//console.log('hi js');

let employees = [];
// created a variable called employees and set it to 0 
//setting employees to 0 will allow me to render new employeers added from the dom
let salary = [];
const totalMonthly= 0;
// created a const called totalMonthly and set it to 0
// totalMonthly will be where my salary is added up 
$(document).ready(onReady);

function onReady(){
 //   console.log('jQ');
    $(`#submit`).on(`click`, addEmployeeInfo);
    // onReady calls the function addEmployeeInfo when the submit button is clicked
    $(`#out-employees`).on(`click`, `.delete`, deleteEmployees);
    //onReady calls the function deleteEmployees when the delete button is clicked
    renderEmployees();
    //onReady calls the function renderEmployee to append newEmployee into the dom 
    calculateRemainingMonthly()
    //onReady calls the calculateRemainigMonthly to calacule the salary 
   clearInputFields();
   //onReady calls the function clearInputFields to clear the input field
}
function deleteEmployees(){
    //this function deletes the employees on the dom
    console.log('Delete Employee');
    $(this).closest('tr').remove();
}

function renderEmployees(){
    //this function appends the info submitted to the dom 
    $(`#out-employees`).empty();
    for( let person of employees ){
        $(`#out-employees`).append(`
    <tr>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.idNumber}</td>
        <td>${person.jobTitle}</td>
        <td>${person.annualSalary}</td>
        <td>
            <button class="delete">Delete</button>
        </td>
    </tr>
        `)
    }
}

function addEmployeeInfo(){
    // this function adds the information entered into a value
    console.log('Adding Employee info');
    let newEmployeeInfo = {
        firstName: $(`#in-first-name`).val(),
        lastName: $(`#in-last-name`).val(),
        idNumber: $(`#in-id-number`).val(),
        jobTitle: $(`#in-job-title`).val(),
        annualSalary: $(`#in-annual-salary`).val(),
    }
employees.push(newEmployeeInfo);

console.log(employees);
renderEmployees();
calculateRemainingMonthly();
clearInputFields();
}

function calculateRemainingMonthly(){
    //this function calculates the salary input 
    console.log('in calculateRemainingMonthly');
    //loop through employees array
    let newTotalMonthly = 0;
    for(let i=0; i < employees.length; i++){
        //for each employee, add up total of all salary
  newTotalMonthly += Number(employees[ i ].annualSalary);
}//end for loop
    console.log('newTotalMonthly:', newTotalMonthly);
      //add remainingMonthly from totalMonthly for newTotalMonthly
      const remainingMonthly = totalMonthly + newTotalMonthly;
      // bling called id remainingMonthOut from html to .text which produce 
      //remainingMonthly data and use an if statement to see if the remainingMonthly 
      //is greater than 20000 if not then it continues with regular background color
      //if it is greater then 20000 then the background changes to red.
        $(`#remainingMonthlyOut`).text(`${remainingMonthly}`);
        if(remainingMonthly > 20000) {
            $(`#totalMonth`).css("background-color", "red");
        }



    //display remainingBudget
    let el = $( '#remainingMonthlyOut')
    el.empty();
    el.append(remainingMonthly);
}

  function clearInputFields(){
      //this function clears the input field after submission 
    $(`#in-first-name`).val('');
    $(`#in-last-name`).val('');
    $(`#in-id-number`).val('');
    $(`#in-job-title`).val('');
    $(`#in-annual-salary`).val('');
}