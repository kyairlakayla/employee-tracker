const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');


const promptUser = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'allChoices',
            message: 'Please select an option to continue:',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add department',
                'Add a role',
                'Add an employee',
                'Update an employee role'

            ]
        }
    ]).then((answers) => {
        const {choices} = answers;
            if (allChoices === 'View all departments') {
                viewAllDepartments();
            }
            if (allChoices === 'View all roles') {
                viewAllRoles();
            }
            if (allChoices === 'View all employees') {
                viewAllEmployees();
            }
            if (allChoices === 'Add department') {
                addDepartment();
            }
            if (allChoices === 'Add a role') {
                addRole();
            }
            if (allChoices === 'Add an employee') {
                addEmployee();
            }
            if (allChoices === 'Update an employee') {
                updateEmployee();
            }
    });
}

promptUser();