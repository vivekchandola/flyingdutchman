// MAIN FUNCTION FOR MODULE
function listPurchases(){
    if((userWroteInput())){
        $('#messages').text('')
        fetchStaticDataAndPrintTable()
    } else {
        printErrorMsg()
    }
    
}

// HELPER FUNCTIONS FOR THIS MODULE

function fetchStaticDataAndPrintTable(){
    fetchDataAndPrintTable('data/purchases.json')
}

function fetchDynamicDataAndPrintTable(){
    // TODO: fetch json from URL instead of a static file.
    // 'fetchDataAndPrintTable(<JSON URL GOES HERE>)'
}

function fetchDataAndPrintTable(json){
    // fetches data from input
    // argument and use it to creat a table
    $.getJSON(json).done(function( data ){
        printTable(data)
    });

}

function printTable(data){
    printListInfo();
    printHeader();
    
    purchases = data.payload
    printList(purchases);
}

function printErrorMsg(){
    var msg = 'PLEASE INPUT A NAME'
//    alert(msg)
//    $(msg).insertBefore('#purchases')
    $('#messages').text(msg)
}


function printListInfo(){
    $('#purchases').empty()
    usrname = $('#test').val()
}

// Prints metadata for the table
function printHeader(){
    var name = getUserInput()
    printUserName(name)
    printTableHeader()
}

function getUserInput () {
    return  $('#userinput').val()
}

function printUserName(name){
    $('#messages').text('Data for user: '+name)
}

function printTableHeader(){
    $('#purchases').append("<tr> <th>Timestamp</th> <th> Name </th> <th>Name2</th> <th>Beer_id</th> <th> Price </th> ")
}

function printList(purchaseList){
    // For each item (beverage, refered as 'this') in the list,
    // create a row and append it to the table.

    $.each(purchaseList, function(){
        row = createTableRow(this)
        $('#purchases').append(row);
    });
}

function createTableRow(purchase){
    var tableRow = $("<tr></tr>");
    
    // reads data from 'purchase'
    // and inserts it into a row
    
    appendCell(tableRow, purchase.timestamp)
    appendCell(tableRow, purchase.namn)
    appendCell(tableRow, purchase.namn2)
    appendCell(tableRow, purchase.beer_id)
    appendCell(tableRow, purchase.price)
    
    return tableRow;
}

function appendCell(tableRow, content){
    tableRow.append($("<td>"+content+"</td>"));
}

function userWroteInput(){
    return ($('#userinput').val() != '')
}
