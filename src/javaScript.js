// This file for codes that sets up the table. You will find here:
// 1. adding columns and rows
// 2. updating scores of the table.

//html to insert into table to assign buttons and default scores, as well as allowing parts of rows/columns to be editable.
var htmlToUse = '<td contenteditable=' + true + ' ><span>0</td>',
    //size of table
    totalColumns = 2;
totalRows = 2;

//function to add cells using a format.
function createCell(cell, text, style, editable) {
    var div = document.createElement('div');
    var txt = document.createTextNode(text);
    div.appendChild(txt);
    div.setAttribute('class', style);
    div.setAttribute('contenteditable', editable)
    cell.appendChild(div);
}

//adds rows to table when clicking on "Add Rows" button.

function addRows() {

    var table = document.getElementById("myTable");
    var row = table.insertRow(table.rows.length);
    var i;
    if (totalRows <= 4) {
        for (i = 0; i < table.rows[0].cells.length; i++) {
            if (i == 0) {
                totalRows++;
                createCell(row.insertCell(i), "Name", 'row', 'true'); //adds first cell of the row, which is for the name of the player.

            } else if (i == 1) {
                createCell(row.insertCell(i), "0", 'row', 'false'); //adds second cell of the row, which is the total score.
            } else if (i > 1) {
                var innerCell = row.insertCell(i);//adds the rest of the cells

                //adds HTML elements to generate the rest of the cell for the length of the row, and also includes buttons.
                innerCell.outerHTML = htmlToUse;
            }

        }
    } else {
        alert("Limit Reached");
    }
}


//adds column when "Add Column" button is clicked.
function addCell() {
    var tbl = document.getElementById('myTable'),
        rowSize = tbl.rows.length,
        i;
    if (totalColumns <= 4) {
        for (i = 0; i < rowSize; i++) {
            if (i == 0) {
                totalColumns++;
                //inserts first cell at top of new column, which is the game name.
                var tr = document.getElementById('myTable').tHead.children[0];
                tr.insertCell(tbl.rows[i].cells.length).outerHTML = '<th contenteditable=' + true + '>Insert Game Name</th>'
            } else if (i >= 1) {
                //fills the rest of the column with cells with buttons and a starting score of zero.
                var tr = document.getElementById('myTable').tHead.children[i];
                tr.insertCell(tbl.rows[i].cells.length).outerHTML = htmlToUse;
            }

        }
    } else {
        alert("Limit Reached!");
    }
}

//calculates scores in a row and returns total score in the total column
function updateTable() {
    var tbl = document.getElementById('myTable'),
        rowSize = tbl.rows.length;
    //  tableSize = tbl.length;
    for (var rowIndex = 1; rowIndex < rowSize; rowIndex++) {
        var totalValue = 0;
        for (var columnIndex = 2; columnIndex < rowSize + 1; columnIndex++) {

            //get value of cell
            var score = tbl.rows[rowIndex].cells[columnIndex].innerHTML;
            var scoreInt = parseInt(score);
            //add value of cell to total
            totalValue = totalValue + scoreInt;
            //get value of total cell and change to new total


        } tbl.rows[rowIndex].cells[1].innerHTML = totalValue;
    }
}
