$(document).ready(onReady);

function onReady() {
  $(document).on('click', '#addBtn', checkIfInputIsEmpty);
}

/**
  * Check if input is empty
*/
function checkIfInputIsEmpty() {
  console.log('got here');
  let firstName = $('#firstName').val();
  let lastName = $('#lastName').val();
  let empId = $('#employeeId').val();
  let annualSalary = $('#annualSalary').val();

  if ( !firstName || !lastName || !empId || !annualSalary ) {
    $('.alert').alert();
  } else {
    let employee = newEmployee(firstName, lastName, empId, annualSalary);
    console.log(employee);
    // $(document).on('click', '#confirmModal', confirm);
  }
}

/**
 * New Employee
 * Creates a new employee object
 */

function newEmployee(firstName, lastName, empId, annualSalary) {
  console.log('new employee:', firstName, lastName, empId, annualSalary);
  const employeeObj = {
    first_name: firstName,
    last_name: lastName,
    employee_id: empId,
    annual_salary: annualSalary
  }
  return employeeObj;
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