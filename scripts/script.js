$(document).ready(onReady);

function onReady() {
  $(document).on('click', '#addBtn', checkIfInputIsEmpty);
}

/**
  * Check if input is empty
*/
function checkIfInputIsEmpty() {
  let firstName = $('#firstName').val();
  let lastName = $('#lastName').val();
  let empId = $('#employeeId').val();
  let annualSalary = $('#annualSalary').val();

  if ( !firstName || !lastName || !empId || !annualSalary ) {
    alert('please fill out all of the fields');
  } else {
    newEmployee(firstName, lastName, empId, annualSalary);
    // $(document).on('click', '#confirmModal', confirm);
  }
}

/**
 * New Employee
 * Creates a new employee object
 */

function newEmployee(firstName, lastName, empId, annualSalary) {
  console.log('in newCar:', firstName, lastName, empId, annualSalary);
  const newCarObject = {
    first_name: firstName,
    last_name: lastName,
    employee_id: empId,
    annual_salary: annualSalary
  }
  // garage.push(newCarObject);
  return true;
}

/**
 * Add Employee
 * Adds our employee
 */

 function addEmployee() {
  $('#exampleModalCenter').modal();
  confirm();
}

/**
 * Cofirm Modal Function
 * Handles closing the bootstrap modal
 */

 function confirm() {
  $('#exampleModalCenter').modal('hide');
}



// function getFieldValues() {
//   daEmployee = $('#empName').val();
// }

/**
 * Clear out Fields
*/
function emptyValues() {
  $('#firstName').empty();
  $('#lastName').empty();
  $('#employeeId').empty();
  $('#annualSalary').empty();
}