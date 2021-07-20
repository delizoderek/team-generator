class Employee {
    constructor(name,role,id,email){
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    }

    renderHeader(){
        let icon = "";
        if(this.role.toLowerCase() === 'manager'){
            icon = "fa-mug-hot";
        } else if(this.role.toLowerCase() === 'intern'){
            icon = "fa-user-graduate";
        } else {
            icon = "fa-glasses";
        }

        return `<h2>${this.name}</h2>\n<h3><i class="fas ${icon}"></i> ${this.role}</h3>`;
    }

    renderBody(){
        return `<li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>`;
    }
}

module.exports = Employee;