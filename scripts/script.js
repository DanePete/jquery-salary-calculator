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
    addEmployee();
    // $(document).on('click', '#confirmModal', confirm);
  }
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