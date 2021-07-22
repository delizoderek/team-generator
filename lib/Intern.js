const Employee = require('./Employee');

// TeamMember handles generating the team member cards
class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern';
    }

    renderGithub(){
        return `<li class="list-group-item winter-bg">Github: <a href="https://github.com/${this.github}">${this.github}</a></li>`;
    }

    renderCard(){
        return `<div class="card m-3 border-0">
                    <div class="card-header p-3 secondary-bg">
                        ${this.renderHeader()}
                    </div>
                    <div class="p-3 winter-bg">
                        <ul class="list-group list-group-flush">
                            ${this.renderBody()}
                            ${this.renderGithub()}
                        </ul>
                    </div>
                </div>`;
    }
}

module.exports = Intern;