
# Data Aggregation for NSS 📊

This program is built using Google Apps Script and allows you to collect data from email replies sent by students. It automates the process of aggregating student information such as their email, name, register number, department, and willingness into a Google Sheets spreadsheet.

## Features 🚀

- Automated data collection: The program automatically processes email replies and extracts relevant information such as email address, name, register number, department, and willingness.
- Seamless integration with Google Sheets: The collected data is directly stored in a Google Sheets spreadsheet for easy management, analysis, and further processing.
- Customizable fields: You can easily customize the fields to collect based on your specific requirements by modifying the code.
- Trigger-based execution: The program is triggered to run automatically when new email replies are received, ensuring timely and efficient data aggregation.
- Error handling: The script incorporates error handling to handle various scenarios and provide informative error messages when necessary.
- Easy setup and configuration: The setup process is straightforward, and the code is well-documented, making it easy to get started and customize as needed.
- Security-conscious design: While the program focuses on functionality, it also emphasizes the security and privacy of collected data, with suggestions for implementing appropriate measures.
- Duplicate entries are identified and updated, making sure that only the latest information is stored in the sheet.
## Getting Started 📝

- Create a new Google Sheets spreadsheet to store the collected data.
- Set up the necessary headers in the spreadsheet to match the fields you want to collect (eg: "Mail," "Name," "Register Number," "Department," "Willingness").
- Open the Google Apps Script editor by going to `Tools > Script editor` within your Google Sheets document.
- Copy and paste the code from `code.gs` in this repository into the script editor.
- Save the project with a meaningful name.
- Customize the code as needed, making sure to specify the appropriate columns and sheet names in the script.
- Set up a trigger to automatically run the script when new emails are received. To do this, go to `Edit > Current project's triggers` in the script editor, add a new trigger, and configure it to run the function that handles email processing.
- Save and enable the trigger.

## Prerequisites 🤖

Before you can use this program, make sure you have the following:

- A Google account
- Access to Google Sheets
- Basic knowledge of Google Apps Script or Java Script

## Usage 🧠

- The admin should send an email to all the students in a particular year, asking for their willingness to participate. Instruct the students to reply with either "yes" or "no."

- When students reply to the email, the script will automatically process their responses and store the data in the specified Google Sheets spreadsheet.

- The collected data can then be accessed, analyzed, or further processed within the Google Sheets document.



## Contributing ❤️

Contributions to this project are welcome! If you find any issues, have suggestions for improvements, or would like to add new features, please feel free to open an issue or submit a pull request.


