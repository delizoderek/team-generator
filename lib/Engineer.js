const Employee = require('./Employee');

// TeamMember handles generating the team member cards
class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }

    // renderGithub(){
    //     return `<li class="list-group-item winter-bg">Github: <a href="https://github.com/${this.github}">${this.github}</a></li>`;
    // }

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

module.exports = Engineer;