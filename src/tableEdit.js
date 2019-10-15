//this file is for editing the scores within the cells of the table.

//the number of points the winner gets when winner cell is clicked.
var winnerPoints = 1;

function addWinnersPoints() {
    var table = document.getElementsByTagName("table")[0];
    var tdCells = table.getElementsByTagName("td");

    for (var i = 0; i <= tdCells.length; i++) {

        // Cell Object
        var cell = tdCells[i];
        // Event happens on a double click, this ensures that user is able to manually type in score
        //by clicking on the value once, to edit.
        cell.ondblclick = function () {
            //the cell you click on will be assigned to cellIndex
            var cellIndex = this.cellIndex;
            //finds the index of the row of the cell you click on.
            var rowIndex = this.parentNode.rowIndex;
            //gets the number value of the cell clicked on.
            var cellValue = document.getElementById("myTable").rows[rowIndex].cells[cellIndex].innerHTML;
            //parses the number (which isnt an integer yet) into an integer and adds it to winner points. Parsing
            //ensures that it is always an integer.
            elementToInt = (parseInt(cellValue) + parseInt(winnerPoints));
            //changes the value of the cell using the added parsed integer value.
            document.getElementById("myTable").rows[rowIndex].cells[cellIndex].innerHTML = elementToInt;
        }
    }
}

