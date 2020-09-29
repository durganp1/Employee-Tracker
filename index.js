

const { prompt } = require('inquirer');
const db = require('./db');

function openingPrompts() {
    prompt ([
        {
        type: 'list',
        name: 'choice',
        message: 'What would you like to choose?',
        choices: [
            {
                name: 'View all Departments',
                value: 'VIEW_DEPARTMENTS'
            },
            {
                name: 'View all Roles',
                value: 'VIEW_ROLES'
            },
            {
                name: 'View all Employees',
                value: 'VIEW_EMPLOYEES'
            },
            {
                name: 'Add a Department',
                value: 'ADD_DEPARTMENT'
            },
            {
                name: 'Add a Role',
                value: 'ADD_ROLE'
            },
            {
                name: 'Add an Employee',
                value: 'ADD_EMPLOYEE'
            },
            {
                name: 'Update an Employee Role',
                value: 'UPDATE_ROLE'
            },
            {
                name: 'Exit',
                value: 'EXIT'
            }
        ]
        }
    ]).then(res => {
        let choice = res.choice;
        switch (choice) {
            case 'VIEW_DEPARTMENTS':
                viewDepartments();
                break;
            case 'VIEW_ROLES':
                viewRoles();
                break;
            case 'VIEW_EMPLOYEES':
                viewEmployees();
                break;
            case 'ADD_DEPARTMENT':
                addDepartment();
                break;
            case 'ADD_ROLE':
                addRole();
                break;
            case 'ADD_EMPLOYEE':
                addEmployee();
                break;
            case 'UPDATE_ROLE':
                updateRole();
                break;
            default:
                exit();
        }
    })
}