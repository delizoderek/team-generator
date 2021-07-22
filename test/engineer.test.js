const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("It should create an object with a property for the github",() => {
            const testEngineer = new Engineer("TestEmployee",3453,"test@test.com","testTester");

            expect(testEngineer.github).toEqual("testTester");
        });
        it("It should return the name of the employee",() => {
            const testEngineer = new Engineer("TestEmployee",3453,"test@test.com","testTester");

            expect(testEngineer.getName()).toEqual("TestEmployee");
        });
        it("It should return the id of the employee",() => {
            const testEngineer = new Engineer("TestEmployee",3453,"test@test.com","testTester");
            expect(testEngineer.getId()).toEqual(3453);
        });
        it("It should return the email of the employee",() => {
            const testEngineer = new Engineer("TestEmployee",3453,"test@test.com","testTester");

            expect(testEngineer.getEmail()).toEqual("test@test.com");
        });
        it("It should return 'Employee' as the role",() => {
            const testEngineer = new Engineer("TestEmployee",3453,"test@test.com","testTester");

            expect(testEngineer.getRole()).toEqual("Engineer");
        });
    });
});