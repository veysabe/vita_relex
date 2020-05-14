"use strict"

+function() {
	function startTable() {
		let lines, columns;
		do {
			lines = prompt("Введите число строк", 1);
		} while ( !isFinite(lines) );
		
		if (lines === null || lines === '') return null;

		do {
			columns = prompt("Введите число столбцов", 1);
		} while ( !isFinite(columns) );
		
		if (columns === null || columns === '') return null;

		tableSize = {
			rows: +lines,
			cols: +columns,
		}
	}

	function createTable() {
		let i, j;

		let cellBody = document.createElement('div');
		cellBody.className = "cell-body";
		document.body.append(cellBody);

		let cellRow;
		let cellItem;

		for (i = 0; i < tableSize.rows; i++) {
			cellRow = document.createElement('div');
			cellRow.className = "cell-row";
			cellBody.append(cellRow);

			for (j = 0; j < tableSize.cols; j++) {
				cellItem = document.createElement('div');
				cellItem.className = "cell-item";
				cellRow.append(cellItem);
			}
		}

		let cellCounter = document.createElement('div');
		cellCounter.className = "cell-counter";
		cellCounter.innerHTML = "<span>Столбец № </span><span class='col-counter'></span><br><span>Строка № </span><span class='row-counter'></span>"
		cellBody.append(cellCounter);
	}

	let tableSize;
	startTable();
	createTable();

}();

$('.cell-item').click(function(){

	let selectedItemCol = $(this).index();
	// console.log($(this).parents('.cell-row').index());

	let selectedItemRow = this.parentElement;
	selectedItemRow = $(selectedItemRow).index();

	selectedItemCol++;
	selectedItemRow++;
	$(".row-counter").text(selectedItemRow);
	$(".col-counter").text(selectedItemCol);
	console.log('Столбец № ' + selectedItemCol);
	console.log('Строка № ' + selectedItemRow);


	// let selectedItemCol = $(this).index();
	// let selectedItemRow = $(this).parents('.cell-row').index();

	// selectedItemCol++;
	// selectedItemRow++;
	
	// console.log('Столбец № ' + selectedItemCol);
	// console.log('Строка № ' + selectedItemRow);
});