// $(".pickMonthButton").click(function() {
// 	let month = $(".pickMonthMSelect option:selected").attr("name").slice(0, -3);
// 	alert(month);
// });
$(".pickMonthButton").click(function() {
	let month = $(".pickMonthMSelect option:selected").attr("name").slice(0, -3);
	let mon = month - 1;
	let year = $(".pickMonthYSelect option:selected").attr("name");
	let d = new Date(year, mon);
	let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

	// пустые ячейки с понедельника до начала месяца
	for (let i = 0; i < getDay(d); i++) {
		table += '<td class="pDateCell"></td>';
	}

	// ячейки с датами
	while (d.getMonth() == mon) {
		table += '<td class="dateCell">' + d.getDate() + '</td>';
		if (getDay(d) % 7 == 6) { // 
			table += '</tr><tr>';
		}
		d.setDate(d.getDate() + 1);
	}

	if (getDay(d) != 0) {
		for (let i = getDay(d); i < 7; i++) {
			table += '<td class="fDateCell"></td>';
		}
	}

	if (month == 1) monthName = "Январь";
	if (month == 2) monthName = "Февраль";
	if (month == 3) monthName = "Март";
	if (month == 4) monthName = "Апрель";
	if (month == 5) monthName = "Май";
	if (month == 6) monthName = "Июнь";
	if (month == 7) monthName = "Июль";
	if (month == 8) monthName = "Август";
	if (month == 9) monthName = "Сентябрь";
	if (month == 10) monthName = "Октябрь";
	if (month == 11) monthName = "Ноябрь";
	if (month == 12) monthName = "Декабрь";
	// закрыть таблицу
	table += '</tr></table>';

	content = "<h1>" + monthName + "</h1>" + table;
	calendar.innerHTML = content;
});



function getDay(date) { 
	let day = date.getDay();
	if (day == 0) day = 7; 
	return day - 1;
}

function yearList(elemY) {
	let maxYear = 2019;
	let minYear = 1900;
	let list = `<select class='pickMonthYSelect'>`;
	for (let k = maxYear; k > minYear; k--) {
		list += `<option name="` + k + `">` + k + "</option>";
	}
	list += "</select>"
	elemY.innerHTML = list;
}

yearList(pickMonthY);
