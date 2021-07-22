const Manager = require("./Manager");
const TeamMember = require("./teamMember");

class HtmlBuilder {
  constructor(fullTeam) {
    this.teamName = fullTeam.teamName;
    this.manager = new Manager(
      fullTeam.manager.name,
      fullTeam.manager.id,
      fullTeam.manager.email,
      fullTeam.manager.office
    );
    this.memberList = [];
    for (let member of fullTeam.members) {
      const newTeammate = new TeamMember(
        member.name,
        member.id,
        member.role,
        member.email,
        member.github
      );
      this.memberList.push(newTeammate);
    }
  }

  getManagerCard() {
    return this.manager.renderCard();
  }

  getMemberCards() {
    let cardHtml = ``;
    for (let member of this.memberList){
      cardHtml += member.renderCard() + `\n             `;
    }
    return cardHtml;
  }

  getBody() {
    return `<header class="primary-bg">
              <h1 class="winter-text">${this.teamName}</h1>
                </header>
                <main class="d-flex flex-column align-items-center">
                    <section class="team-section w-75 border-bottom border-dark border-2">
                        ${this.getManagerCard()}
                    </section>
                    <section class="team-section w-75">
                        ${this.getMemberCards()}
                    </section>
                </main>`;
  }

  renderHtml() {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
    </head>
    <body>
        ${this.getBody()}
        <script
        src="https://kit.fontawesome.com/2b8c674079.js"
        crossorigin="anonymous"
        ></script>
        <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
        ></script>
    </body>
</html>`;
  }
  // TODO: Get HTML for manager card
  // TODO: Build HTML for team member list
  // TODO: Load in generated html into page layout
  // TODO: return the html string, to be written to a file
}

module.exports = HtmlBuilder;