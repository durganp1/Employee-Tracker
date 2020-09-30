

const connect = require('./connection');

class dataBase {
    constructor(connect) {
        this.connect = connect;
    }

    findAllEmployees() {
        return this.connect.promise().query(
            "SELECT employees.id, employees.first_name, employees.last_name, roles.title AS title, departments.name, roles.salary AS Salary, CONCAT(managers.first_name,' ', managers.last_name) AS Manager FROM employees JOIN roles ON employees.role_id = roles.id JOIN managers ON employees.manager_id = managers.id JOIN departments ON roles.department_id = departments.id;"
        );
    }

    findAllDepartments() {
        return this.connect.promise().query(
            "SELECT * FROM departments;"
        );
    }

    findAllRoles() {
        return this.connect.promise().query(
            "SELECT roles.title AS 'Job Title', roles.id, roles.salary, departments.name AS 'Department Name' FROM roles JOIN departments ON roles.department_id = departments.id;"
        );
    }







}

module.exports = new dataBase(connect);