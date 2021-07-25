$(document).ready(onReady);
let employees = [];

function onReady() {
  $(document).on('click', '#addBtn', checkIfInputIsEmpty);
  $(document).on('click', '#btnDelete', removeRow);
  $(document).on('click', "#confirmModal", confirm);
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
    employees.push(employee);
    appendTable();
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

 function appendTable() {
  // $('#exampleModalCenter').modal();
  $('#employee-table tbody').empty();
  $('.totalMonthly').removeClass('red');
  let totalMonth = 0;
  console.log(employees);
  for (employeeIndex of employees) {
    console.log(employeeIndex);
    $('#employee-table tbody')
      .append(`
        <tr>
          <td>${employeeIndex.first_name}</td>
          <td>${employeeIndex.last_name}</td>
          <td class='empId'>${employeeIndex.employee_id}</td>
          <td>${employeeIndex.employee_title}</td>
          <td id="annual-salary">${employeeIndex.annual_salary}</td>
          <td><button id="btnDelete" class="btn btn-danger">DELETE</button></td>
        </tr>
      `);
    }
  totalMonth = (calculateSalaries().toFixed(2));
  $('.totalMonthly').text(totalMonth);
  if(totalMonth > 20000) {
    console.log('yes');
    $('.totalMonthly').addClass('red');
  }
}

/**
 * Remove Row
 * Function removes the row when the delete button is clicked
 */
function removeRow() {
  let trigger = $(this).closest('tr').find('.empId').text();
  $.each(employees, function( index, value ) {
    console.log(value.employee_id);
    if(value.employee_id === trigger) {
      console.log('bingo');
      console.log('index is',index);
      employees.splice(index, 1);
      appendTable();
    }
  });
}

/**
 * Cofirm Modal Function
 * Handles closing the bootstrap modal
 */
 function confirm() {
  console.log('confirmed');
  // $('#exampleModalCenter').modal('hide');

}

function calculateSalaries() {
  let total = 0;
  for (let employee of employees) {
      total += employee.annual_salary;
  }
  return ( total / 12); 
}

/**
 * Clear out Fields
*/
function emptyValues() {
  $('#firstName').empty();
  $('#lastName').empty();
  $('#employeeId').empty();
  $('#annualSalary').empty();
}