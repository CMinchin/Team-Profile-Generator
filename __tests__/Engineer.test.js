const Engineer = require("../Classes/Engineer");

describe('Functionality', () => {
  it('Correctly returns all values given to it', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');
    
    expect(engineer.getName()).toBe('name');

    expect(engineer.getId()).toBe('id');

    expect(engineer.getEmail()).toBe('email');

    expect(engineer.getGithub()).toBe('github');
  });

  it('Correctly displays its role as "Employee"', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');

    expect(engineer.getRole()).toBe('Engineer');
  });
});
