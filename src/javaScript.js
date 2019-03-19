function addRows() {

    var table = document.getElementById("myTable");
    var row = table.insertRow(table.rows.length);
    var i;

    for (i = 0; i < table.rows[0].cells.length; i++) {
        if (i == 0) {
            createCell(row.insertCell(i), "Name", 'row', 'true', 'div');
        }else if (i > 0) {
            createCell(row.insertCell(i), "0", 'row', 'true', 'div');
        }

    }
}

function createCell(cell, text, style, editable, element) {
    var div = document.createElement(element);
    var txt = document.createTextNode(text);
    div.appendChild(txt);
    div.setAttribute('class', style);
    div.setAttribute('contenteditable', editable)
    cell.appendChild(div);
}

function addCell() {
    var tbl = document.getElementById('myTable'),
    rowSize = tbl.rows.length,
        i;
    for (i = 0; i < rowSize; i++) {
            if(i==0){
             //   createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), 'New Game', 'colHeader', 'true', 'div');
             var tr = document.getElementById('myTable').tHead.children[0];
             tr.insertCell(tbl.rows[i].cells.length).outerHTML = "<th>Insert Game Name</th>"
         }else if(i>0){
             createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), '0', 'col', 'true', 'div');
         }
}
}