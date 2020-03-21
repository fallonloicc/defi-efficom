class User {
    constructor(data) {
        this.name = data.name;
        this.firstname = data.firstname;
        this.pseudo = data.pseudo;
        this.mail = data.mail;
        this.phone = data.phone;
        this.id_PE = data.id_pole_emploi;
        this.password = data.password;
        this.token = data.token;
        this.role = data.role;
        this.money = data.money;
    }
}

module.exports = User;
