const Manager = require("../Classes/Manager");

describe('Functionality', () => {
  it('Correctly returns all values given to it', () => {
    const manager = new Manager('name', 'id', 'email', 'office number');
    
    expect(manager.getName()).toBe('name');

    expect(manager.getId()).toBe('id');

    expect(manager.getEmail()).toBe('email');
    
    expect(manager.getOfficeNumber()).toBe('office number');
  });

  it('Correctly displays its role as "Manager"', () => {
    const manager = new Manager('name', 'id', 'email', 'office number');

    expect(manager.getRole()).toBe('Manager');
  });
});
