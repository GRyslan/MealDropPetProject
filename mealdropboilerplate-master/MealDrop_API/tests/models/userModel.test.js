const chai = require("chai");
const expect = chai.expect;
const UsersModel = require("../../models/userModel");

describe("Users Model ", () => {

    const inValidModel = new UsersModel();

    it("should be invalid if name property is empty", function (done) {
        inValidModel.validate(function (err) {
            expect(err.errors.name).to.exist;
            done();
        });
    });

    it("should be invalid if email property is empty", function (done) {
        inValidModel.validate(function (err) {
            expect(err.errors.email).to.exist;
            done();
        });
    });

    it("should be invalid if password property is empty", function (done) {
        inValidModel.validate(function (err) {
            expect(err.errors.password).to.exist;
            done();
        });
    });


});
