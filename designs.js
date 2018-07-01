function makeGrid() {

	var vas, cols, H, W, rows;
	
		vas = $('#pixelCanvas');
			H = $('#inputHeight').val();
				W = $('#inputWeight').val();
		
		vas.children().remove()
	
				for (n = 0; n < H; n++) {
		vas.append('<tr></tr>');
	}
	
	rows = $('tr');
	
				for (k = 0; k < W; k++) {
	rows.append('<td></td>');
	} 
	
	cols = vas.find('td');
	
	// change color of td, when clicked
			cols.click(function() {

		// Select color input

			var color;
				color = $("#colorPicker").val();
					$(this).attr('bgcolor', color);
	});
	
}

// call makeGrid() perform function of size submitted
	var submitQuery;

		submitQuery = $('input[type="submit"]')
	
			submitQuery.click(function(event) {
  				event.preventDefault();
  					makeGrid();
});
