const inquire = require("inquirer");
const htmlBuilder = require("./assets/utils/htmlBuilder");
// TODO: Initial team manager question
const commonQuestion = {
  type: "list",
  name: "keepBuilding",
  message: "Would you like to add a team member or wrap-up your team?",
  choices: ["Add an Engineer", "Add an Intern", "Wrap-up your team"],
  filter(val) {
    if (val === "Wrap-up your team") {
      return "w";
    } else if (val === "Add an Intern") {
      return "Intern";
    } else {
      return "Engineer";
    }
  },
};

const managerQuestions = [
  {
    type: "input",
    name: "teamName",
    message: "What is your team name?",
  },
  {
    type: "input",
    name: "managerName",
    message: "What is your name?",
  },
  {
    type: "number",
    name: "managerId",
    message: "What is your id number?",
    validate(value) {
      if (!value) {
        return "Please enter a number";
      }
      return true;
    },
  },
  {
    type: "number",
    name: "officeNumber",
    message: "What is your office number?",
    validate(value) {
      if (!value) {
        return "Please enter a number";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is your email?",
  },
  commonQuestion,
];

const memberQuestions = [
  {
    type: "input",
    name: "memberName",
    message: "What is their name?",
  },
  {
    type: "number",
    name: "memberId",
    message: "What is their ID?",
  },
  {
    type: "input",
    name: "memberEmail",
    message: "What is their email?",
  },
  {
    type: "input",
    name: "memberGit",
    message: "What is their Github username?",
  },
  commonQuestion,
];

const fullTeam = {
  teamName: "",
  manager: new Manager(),
  members: [],
};

function Manager() {
  this.name = "";
  this.id = 0;
  this.office = 0;
  this.email = "";
}

function TeamMember(role) {
  this.name = "";
  this.role = role;
  this.id = 0;
  this.email = "";
  this.github = "";
}

const init = async () => {
  let contTeamBuilding = true;
  let memberRole = "";
  const managerPromise = await inquire.prompt(managerQuestions);
  if (managerPromise.keepBuilding !== "w") {
    fullTeam.teamName = managerPromise.teamName;
    fullTeam.manager.name = managerPromise.managerName;
    fullTeam.manager.id = managerPromise.managerId;
    fullTeam.manager.office = managerPromise.officeNumber;
    fullTeam.manager.email = managerPromise.managerEmail;
    memberRole = managerPromise.keepBuilding;
  } else {
    contTeamBuilding = false;
  }

  // memberRole needs to have a value that is not w before entering the loop
  while (contTeamBuilding) {
    const newMember = new TeamMember(memberRole);
    const memberPromise = await inquire.prompt(memberQuestions);

    newMember.name = memberPromise.memberName;
    newMember.id = memberPromise.memberId;
    newMember.email = memberPromise.memberEmail;
    newMember.github = memberPromise.memberGit;

    fullTeam.members.push(newMember);

    if (memberPromise.keepBuilding === "w") {
      contTeamBuilding = false;
    } else {
      memberRole = memberPromise.keepBuilding;
    }
  }
  let htmlGenerator = new htmlBuilder(fullTeam);
  console.log(htmlGenerator.renderHtml());
};
// TODO: Team member loop for adding multiple team members
// TODO: Create webpage template
// TODO: Generate HTML for manager card
// TODO: Generate HTML for team member card
// TODO: Write HTML to index.html
init();
