const Employee = require('./employee');

// TeamMember handles generating the team member cards
class TeamMember extends Employee{
    constructor(name,id,role,email,github){
        super(name,role,id,email);
        this.github = github;
    }

    renderOffice(){
        return `<li class="list-group-item">Github: <a href="https://github.com/${this.github}">${this.github}</a></li>`;
    }

    renderCard(){
        return `<div class="card m-3">
                    <div class="card-header p-3">
                        ${this.renderHeader()}
                    </div>
                    <div class="p-3">
                        <ul class="list-group list-group-flush">
                            ${this.renderBody()}
                            ${this.renderOffice()}
                        </ul>
                    </div>
                </div>`;
    }
}

module.exports = TeamMember;