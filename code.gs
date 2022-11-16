var ui = SpreadsheetApp.getUi();
function onOpen(e){
  
  ui.createMenu("NSS Batch 2022 Data").addItem("Get Email Data by Label", "getGmailEmails").addToUi();
  // console.log(threads.length)

  
}

function getGmailEmails(){
  // var input = ui.prompt('Label Name', 'Enter the label name that is assigned to your emails:', Browser.Buttons.OK_CANCEL);
  // if (input.getSelectedButton() == ui.Button.CANCEL){
  //   return;
  // }
  
  // var label = GmailApp.getUserLabelByName(input.getResponseText());
  var label = GmailApp.getUserLabelByName("Test-v2");
  var threads = label.getThreads();
  for(var i = threads.length - 1; i >=0; i--){
    var messages = threads[i].getMessages();
    
    for (var j = messages.length-1; j >=0; j--){
      var message = messages[j];
      extractDetails(message);
        GmailApp.markMessageRead(message);
    }
    // threads[i].removeLabel(label);
    
  }
    // #TO CLEAR ENTIRE SHEET 
    // var clear = SpreadsheetApp.getActive().getSheetByName("Sheet1");
    // clear.clear();
  removeDuplicates();
}

function extractDetails(message){

  var emailData = {
    sName : "Null",
    sEmail : "Null",
    date : "Null",
    subject : "Null",
    sender : "Null",
    body : "Null",
    response: "Null", /* Extracting just the first line from the whole body */
    department: "Null", /* Department from gmail ID */
    admissionNo: "Null" /* Admission no from gamil ID */
  }

  emailData.date = message.getDate();
  emailData.subject = message.getSubject();
  emailData.sender = message.getFrom();
  emailData.body = message.getPlainBody();

  // REGEX to get email and name
  emailData.sEmail = emailData.sender.match(/(?<=\<).+?(?=\>)/).toString()
  emailData.sName = emailData.sender.match(/ *.+?(?=\<)/).toString()

  // Single line of response
  emailData.response = emailData.body.match(/^.*$/m)[0].toString()

  // admission
  emailData.admissionNo = emailData.sender.match(/(?<=\<).+?(?=\@)/).toString()

  // department
  emailData.department = emailData.admissionNo.match(/(?<=[0-9])[a-zA-Z]+(?=[0-9])/).toString()

  var activeSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  activeSheet.appendRow([ emailData.sName, emailData.sEmail, emailData.response, emailData.date, emailData.subject, emailData.admissionNo, emailData.department]);
  //                                                                   ^ it was body previously
}

function removeDuplicates() {
const ss = SpreadsheetApp.getActiveSpreadsheet();  
const shALL = ss.getSheetByName('Sheet1');  
const shUnique = ss.getSheetByName('Sheet2');  
const shDuplicates = ss.getSheetByName('DUPLICATES'); 
const data = shALL.getRange(2, 1, shALL.getLastRow() - 1, shALL.getLastColumn()).getValues();
 let uniqueSs = [];
 let uniqueRows = [];
  let duplicateRows = [];
  data.forEach((row) => {
  let studentName = row[0];
    if (!uniqueSs.includes(studentName)) {
      uniqueSs.push(studentName);
      uniqueRows.push(row);
    }
    else {
      duplicateRows.push(row);
    }
  });
shUnique.getRange(2, 1, uniqueRows.length, uniqueRows[0].length).setValues(uniqueRows);

  shDuplicates.getRange(2, 1, duplicateRows.length, duplicateRows[0].length).setValues(duplicateRows);
}
