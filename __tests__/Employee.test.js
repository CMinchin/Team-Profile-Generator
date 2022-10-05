const Employee = require('../Classes/Employee');

describe('Functionality', () => {
  it('Correctly returns all values given to it', () => {
    const employee = new Employee('name', 'id', 'email');
    
    expect(employee.getName()).toBe('name');

    expect(employee.getId()).toBe('id');

    expect(employee.getEmail()).toBe('email');
  });

  it('Correctly displays its role as "Employee"', () => {
    const employee = new Employee('name', 'id', 'email');

    expect(employee.getRole()).toBe('Employee');
  });
});
