const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const engagementTeam = [];

const confirmName = async (name) => {
    if (name === '') {
        return 'Incorrect answer';
    };
    return true;
};

const confirmNumber = async (name) => {
    if (name === '') {
        return 'Incorrect answer';
    };
    return true;
};



function teamMember() {


    inquirer.prompt([
        {
            type: "input",
            message: "What is your manager's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your manager's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your manager's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your manager's office number?",
            name: "officeNumber",
        }
    ])

        .then(function (answers) {
            let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            engagementTeam.push(manager)
            chooseMemberNext()
        })
        .catch(function (err) {
            console.log(err);
        });


    async function chooseMemberNext() {
        try {

            let teamChoice = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'team',
                    message: 'Which type of team member would you like to add',
                    choices: ['Engineer', 'Intern', 'I don/t want to add anymore team members.']
                }
            ]);

            if (teamChoice.team === 'Engineer') {

                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your engineer's name?",
                        name: "name",
                    },
                    {
                        type: "input",
                        message: "What is your engineer's id?",
                        name: "id",
                    },
                    {
                        type: "input",
                        message: "What is your engineer's email?",
                        name: "email",
                    },
                    {
                        type: "input",
                        message: "What is your engineer's GitHub username?",
                        name: "github",
                    }
                ])

                    .then(function (answers) {
                        let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                        engagementTeam.push(engineer);
                        chooseMemberNext();
                    })
                    .catch(function (err) {
                        console.log(err);
                    });

            } else if (teamChoice.team === 'Intern') {
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your intern's name?",
                        name: "name",
                    },
                    {
                        type: "input",
                        message: "What is your intern's id?",
                        name: "id",
                    },
                    {
                        type: "input",
                        message: "What is your intern's email?",
                        name: "email",
                    },
                    {
                        type: "input",
                        message: "What is your intern's school?",
                        name: "school",
                    }
                ])
                    .then(function (answers) {
                        let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                        engagementTeam.push(intern);
                        chooseMemberNext();
                    })
                    .catch(function (err) {
                        console.log(err);
                    });

            } else { generateFile() }


        } catch (err) {
            console.log(err);
        }
    }




}

teamMember();






function generateFile() {
    fs.writeFileSync(outputPath, render(engagementTeam), "utf-8")
}