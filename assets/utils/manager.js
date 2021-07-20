const Employee = require('./employee');

class Manager extends Employee{
    constructor(name,id,email,office){
        super(name,'Manager',id,email);
        this.office = office;
    }

    renderOffice(){
        return `<li class="list-group-item">Office Number: ${this.office}</li>`;
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

module.exports = Manager;