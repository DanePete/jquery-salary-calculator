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
  let empTitle = $('#employeeTitle').val();
  let annualSalary = Number($('#annualSalary').val());

  if ( !firstName || !lastName || !empId || !empTitle || !annualSalary ) {
    $('.alert').alert();
  } else {
    let employee = newEmployee(firstName, lastName, empId, empTitle, annualSalary);
    appendTable(employee);
  }
}

/**
 * New Employee
 * Creates a new employee object
 */

function newEmployee(firstName, lastName, empId, empTitle, annualSalary) {
  const employeeObj = {
    first_name: firstName,
    last_name: lastName,
    employee_id: empId,
    employee_title: empTitle,
    annual_salary: annualSalary
  }
  return employeeObj;
}

/**
 * Add Employee
 * Adds our employee
 */

 function appendTable(employee) {
   console.log(employee);
  $('#exampleModalCenter').modal();
  $('#employee-table')
    .append(`
      <tr>
        <td>${employee.first_name}</td>
        <td>${employee.last_name}</td>
        <td>${employee.employee_id}</td>
        <td>${employee.employee_title}</td>
        <td>${employee.annual_salary}</td>
        <td><button id="btnDelete" class="btn btn-danger">DELETE</button></td>
      </tr>
    `);
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