const Intern = require("../Classes/Intern");

describe('Functionality', () => {
  it('Correctly returns all values given to it', () => {
    const intern = new Intern('name', 'id', 'email', 'school');
    
    expect(intern.getName()).toBe('name');

    expect(intern.getId()).toBe('id');

    expect(intern.getEmail()).toBe('email');

    expect(intern.getSchool()).toBe('school');
  });

  it('Correctly displays its role as "Employee"', () => {
    const intern = new Intern('name', 'id', 'email', 'school');

    expect(intern.getRole()).toBe('Intern');
  });
});
