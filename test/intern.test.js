const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("It should create an object with a property for the school",() => {
            const testIntern = new Intern("TestEmployee",3453,"test@test.com","University of Washington");

            expect(testIntern.school).toEqual("University of Washington");
        });
        it("It should return the name of the employee",() => {
            const testIntern = new Intern("TestEmployee",3453,"test@test.com","University of Washington");

            expect(testIntern.getName()).toEqual("TestEmployee");
        });
        it("It should return the id of the employee",() => {
            const testIntern = new Intern("TestEmployee",3453,"test@test.com","University of Washington");
            expect(testIntern.getId()).toEqual(3453);
        });
        it("It should return the email of the employee",() => {
            const testIntern = new Intern("TestEmployee",3453,"test@test.com","University of Washington");

            expect(testIntern.getEmail()).toEqual("test@test.com");
        });
        it("It should return 'Intern' as the role",() => {
            const testIntern = new Intern("TestEmployee",3453,"test@test.com","University of Washington");

            expect(testIntern.getRole()).toEqual("Intern");
        });
    });
});