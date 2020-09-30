

INSERT INTO managers (first_name, last_name)
    VALUES
    ('Pedro', 'Smith'),
    ('Wanda', 'Jones');

INSERT INTO departments (name, manager_id)
    VALUES
    ('Kitchen', 1),
    ('Admin', 1),
    ('Service', 2),
    ('Supervisors', 2);

INSERT INTO roles (title, salary, department_id)
    VALUES
    ('Chef', '80000', 1),
    ('Cook', '45000', 1),
    ('Bookeeper', '55000', 2),
    ('Server', '30000', 3),
    ('Cashier', '45000', 3),
    ('FOH Supervisor', '60000', 4),
    ('BOH Supervisor', '55000', 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES
    ('Joe', 'Smith', 1, 1),
    ('Mary', 'Bunch', 2, 2),
    ('James', 'Rochester', 2, 1),
    ('Patty', 'Lulu', 2, 2),
    ('John', 'Knott', 2, 1),
    ('Jennifer', 'Williams', 2, 2),
    ('Robert', 'Rhimes', 2, 1),
    ('Linda', 'Lammda', 3, 2),
    ('Mike', 'Moore', 4, 1),
    ('Liz', 'Nunez', 4, 2),
    ('William', 'Burke', 4, 1),
    ('Barb', 'Schaffer', 4, 2),
    ('David', 'Donner', 4, 1),
    ('Susan', 'Gonzaga', 5, 2),
    ('Richard', 'Dent', 5, 1),
    ('Jessica', 'Burns', 5, 1),
    ('Thomas', 'Jones', 6, 2),
    ('Sarah', 'Richmond', 6, 2),
    ('Charles', 'Carter', 7, 1),
    ('Karen', 'Jackson', 7, 2);