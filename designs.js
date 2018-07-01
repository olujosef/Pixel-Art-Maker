// Select color input
let colorInput = $('#colorPicker');
	// Select size input
let heightInput = $('#inputHeight');
let widthInput = $('#inputWeight');

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(event){
	event.preventDefault();
	let row = heightInput.val(); 
	let column = widthInput.val();
	makeGrid(row, column);
});

//Create a function that produces the grids.
function makeGrid(x, y) {
  	// your code goes here.
  	$('tr').remove();
  	for(var N = 1; N <= x; N++){
    	$('#pixelCanvas').append('<tr></tr>');
    	for(var M = 1; M <= y; M++){
      		$('tr:last').append('<td></td>');
    	}
  	}


	//select gridCell
	let gridCell = $('td');

	//Add color from the 'Pick A Color' to the individaul clicked cells.
	gridCell.click(function putColor() {
		let color = colorInput.val();
		if($(this).attr('style')){
          	$(this).removeAttr('style')
        }else {
       		$(this).attr('style', 'background-color:' + color)
   		}
		
	});

}
