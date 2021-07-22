const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name,id,email,office){
        super(name,id,email);
        this.officeNumber = office;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return 'Manager';
    }
    renderOffice(){
        return `<li class="list-group-item winter-bg">Office Number: ${this.office}</li>`;
    }

    renderCard(){
        return `<div class="card m-3 border-0">
                    <div class="card-header p-3 secondary-bg">
                        ${this.renderHeader()}
                    </div>
                    <div class="p-3 winter-bg">
                        <ul class="list-group list-group-flush">
                            ${this.renderBody()}
                            ${this.renderOffice()}
                        </ul>
                    </div>
                </div>`;
    }

}

module.exports = Manager;