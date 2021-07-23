$(document).ready(onReady);

function onReady() {
  console.log('hello');
  $(document).on('click', '#addBtn', addEmployee);
}

function addEmployee() {
  
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