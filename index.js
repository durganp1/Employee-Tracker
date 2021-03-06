

const { prompt } = require('inquirer');
const db = require('./db');
const logo = require('asciiart-logo');
require('console.table');

begin();

function begin() {
console.log(
    logo({
        name: 'Employee Tracker',
        font: 'DOS Rebel',
        lineChars: 10,
        padding: 2,
        margin: 3,
    })
    .emptyLine()
    .render()
);

openingPrompts();

}

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

//VIEW ALL EMPLOYEES
function viewEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        console.table(rows);
    })
    .catch(console.log)
    .then(() => openingPrompts());
}

// VIEW ALL DEPARTMENTS
function viewDepartments() {
    db.findAllDepartments()
    .then(([rows]) => {
        console.table(rows);
    })
    .catch(console.log)
    .then(() => openingPrompts());
}

// VIEW ALL ROLES
function viewRoles() {
    db.findAllRoles()
    .then(([rows]) => {
        console.table(rows);
    })
    .catch(console.log)
    .then(() => openingPrompts());
}

// ADD A DEPARTMENT
function addDepartment() {
    prompt([
        {
            name: 'name',
            message: 'What would you like to name the department?'
        }
    ])
    .then(res => {
        let name = res;
        db.createDepartment(name)
        .then(() => console.log(`Added ${name.name} to the database`))
        db.findAllDepartments()
        .then(([rows]) => {
            console.table(rows);
        })
        .catch(console.log)
        .then(() => openingPrompts());
    })
}

function addRole() {
    db.findAllDepartments()
    .then(([rows]) => {
        let departments = rows;
        const allDepartments = departments.map(({ id, name }) => ({
            name: name,
            value: id
        }));
   
    prompt([
        {
            name: 'title',
            message: 'What is the title of the new role?'
        },
        {
            name: 'salary',
            message: 'What is the salary of the new role?'
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'What department does the new role belong in?',
            choices: allDepartments
        }
        ])
        .then(role => {
            db.createRole(role)
            .then(() => console.log(`Added ${role.title} to the database.`))
            db.findAllRoles()
            .then (([rows]) => {
                console.table(rows)
            })
            .catch(console.log)
            .then(() => openingPrompts());
        })
    })
}

function addEmployee() {
    db.findJustRoles()
    .then(([rows]) => {
        let roles = rows;
        const allRoles = roles.map(({ id, title }) => ({
            name: title,
            value: id
        }));
    db.findAllManagers()
    .then(([data]) => {
        let managers = data;
        const allManagers = managers.map(({ id, first_name }) => ({
            name: first_name,
            value: id
        }));
    prompt([
        {
            name: 'first_name',
            message: 'What is the employees first name?'
        },
        {
            name: 'last_name',
            message: 'What is the employees last name?'
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'What is the new employees role?',
            choices: allRoles
        },
        {
            type: 'list',
            name: 'manager_id',
            message: 'What manager is the employee to report to?',
            choices: allManagers
        }
    ])
    .then(res => {
        let newEmployee = {
        first_name: res.first_name,
        last_name: res.last_name,
        role_id: res.role_id,
        manager_id: res.manager_id
        }

        db.createEmployee(newEmployee)
        .then(() => console.log(`Added ${newEmployee.first_name} to the database.`))
        db.findAllEmployees()
        .then(([rows]) => {
            console.table(rows)
        })
        .catch(console.log)
        .then(() => openingPrompts());
        })
    })
    })
}

function updateRole() {
    db.findJustRoles()
    .then(([rows]) => {
        let roles = rows;
        const allRoles = roles.map(({ id, title }) => ({
            name: title,
            value: id
        }));
    db.findAllEmployees()
    .then(([data]) => {
        let employees = data;
        const allEmployees = employees.map(({ id, first_name, last_name }) => ({
            name: (first_name.concat(' ', last_name)),
            value: id
        }));
    prompt([
        {
            type: 'list',
            name: 'employee_id',
            message: 'Which employee would you like to change?',
            choices: allEmployees
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'What role would you like for them to have?',
            choices: allRoles
        }
    ])
    .then(res => db.updateRole(res.role_id, res.employee_id))
    .catch(err=> console.log(err.message))
       .then(() => openingPrompts());
    })
    })
}

function exit() {
    process.exit();
}


