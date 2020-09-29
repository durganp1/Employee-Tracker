

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

INSERT INTO employees (first_name, last_name, role_id)
    VALUES
    ('Joe', 'Smith', 1),
    ('Mary', 'Bunch', 2),
    ('James', 'Rochester', 2),
    ('Patty', 'Lulu', 2),
    ('John', 'Knott', 2),
    ('Jennifer', 'Williams', 2),
    ('Robert', 'Rhimes', 2),
    ('Linda', 'Lammda', 3),
    ('Mike', 'Moore', 4),
    ('Liz', 'Nunez', 4),
    ('William', 'Burke', 4),
    ('Barb', 'Schaffer', 4),
    ('David', 'Donner', 4),
    ('Susan', 'Gonzaga', 5),
    ('Richard', 'Dent', 5),
    ('Jessica', 'Burns', 5),
    ('Thomas', 'Jones', 6),
    ('Sarah', 'Richmond', 6),
    ('Charles', 'Carter', 7),
    ('Karen', 'Jackson', 7);