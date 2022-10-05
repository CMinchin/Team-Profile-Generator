const fs = require("fs");
const iq = require("inquirer");
const Manager = require("./Classes/Manager");
const Engineer = require("./Classes/Engineer");
const Intern = require("./Classes/Intern");
const { NONAME } = require("dns");

const questions = {
    Manager: [
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your Email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "officeNumber"
        }
    ],
    default: {
        type: "list",
        message: "Add a new team member?",
        name: "member",
        choices: [
            "Engineer",
            "Intern",
            "No"
        ]
    },
    Engineer: [
        {
            type: "input",
            message: "What is their name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is their ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is their Email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is their Github?",
            name: "github"
        }
    ],
    Intern: [
        {
            type: "input",
            message: "What is their name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is their ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your Email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is their school?",
            name: "school"
        }
    ]
}

function employeeHTML(employee) {
    return `        <div>
            <h2>${employee.getName()}</h2>
            <h2>${employee.getRole()}</h2>
            <div>
                <p>ID: ${employee.getId()}</p>
                <p>Email: ${employee.getId()}</p>
                <p>${employee.officeNumber ? 'Office number' : employee.github ? 'Github' : employee.school ? 'School' : 'none'}: ${employee.officeNumber || employee.github || employee.school || 'none'}</p>
            </div>
        </div>`
}

async function main() {
    let employees = [];
    let manager = await iq.prompt(questions.Manager);

    employees.push(employeeHTML( new Manager(manager.name, manager.id, manager.email, manager.officeNumber)));

    while (true){
        let answer = await iq.prompt(questions.default);
        
        if (answer.member == "No") {
            break
        }

        let employee = await iq.prompt(questions[answer.member]);

        let emp = answer.member == 'Engineer' ? Engineer : Intern;
        employees.push(employeeHTML( new emp(employee.name, employee.id, employee.email, employee.github || employee.school || "none")));
    }

    let HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <Nav>
        <h2>My Team</h2>
    </Nav>
    <main>
${employees.join("\n")}
    </main>
    <script src="./script.js"></script>
</body>
</html>`

    fs.writeFile("dist/index.html", HTML, e => e ? console.log(e): {});
}

main();