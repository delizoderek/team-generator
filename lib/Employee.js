class Employee {
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }

    // renderHeader(){
    //     let icon = "";
    //     if(this.role.toLowerCase() === 'manager'){
    //         icon = "fa-mug-hot";
    //     } else if(this.role.toLowerCase() === 'intern'){
    //         icon = "fa-user-graduate";
    //     } else {
    //         icon = "fa-glasses";
    //     }
    //     return `<h2 class="winter-text">${this.name}</h2>
    //                     <h3 class="winter-text"><i class="fas ${icon}"></i> ${this.role}</h3>`;
    // }

    renderBody(){
        return `<li class="list-group-item winter-bg">ID: ${this.id}</li>
                            <li class="list-group-item winter-bg">Email: <a href="mailto:${this.email}">${this.email}</a></li>`;
    }
}

module.exports = Employee;