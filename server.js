const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');
const sql = require('./db/seeds.sql');
const sql2 = require('./db/schema.sql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
    password: 'Yellow1!'
});


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
            if (choices === 'View all departments') {
                viewAllDepartments();
            }
            if (choices === 'View all roles') {
                viewAllRoles();
            }
            if (choices === 'View all employees') {
                viewAllEmployees();
            }
            if (choices === 'Add department') {
                addDepartment();
            }
            if (choices === 'Add a role') {
                addRole();
            }
            if (choices === 'Add an employee') {
                addEmployee();
            }
            if (choices === 'Update an employee') {
                updateEmployee();
            }
    });
}

const viewAllDepartments = () => {
    connection.query( 
        'SELECT id AS Dept_ID, name AS departments FROM departments',
    function(err, results, fields) {
        console.log(results);
        console.log(fields);
    });
//    connection.query(query, function(err, query) {
//        console.table(query);
//        promptUser();
//    })
}


promptUser();