$(document).ready(onReady);

function onReady() {
  $(document).on('click', '#addBtn', addEmployee);
}


function addEmployee(event) {
  // Stops the forms default behavior
  // no reload
  event.preventDefault();
  $('#exampleModalCenter').modal();
  checkIfInputIsEmpty();
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
    if ( addEmployee( firstName, lastName, empId, annualSalary) === true ) {
      // displayItemsInUnOrderedList( year, make, model, price, img );
      // sumTotalPrice();
      // clearOutFields();
      console.log('added');
    }
  }
}

// function getFieldValues() {
//   daEmployee = $('#empName').val();
// }

// /**
//  * Clear out Fields
// */
// function emptyValues() {
//   $('#empName').empty();
//   $('#employeeName').empty();
//   $('#bonusPercent').empty();
//   $('#totalComp').empty();
//   $('#totalBonus').empty();
// }