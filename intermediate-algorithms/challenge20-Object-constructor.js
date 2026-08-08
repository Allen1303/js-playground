"use strict";
/**
@@param Make a Person
@param Task: Fill in/complete the object constructor
 getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)

 * */
const Person = function (first, last) {
  let firstName = first,
    lastName = last;
  this.getFirstName = function () {
    return firstName;
  };
  this.getLastName = function () {
    return lastName;
  };
  this.getFullName = function () {
    return `${this.getFirstName()} ${this.getLastName()}`;
  };
  this.setFirstName = function (first) {
    return (firstName = first);
  };
  this.setLastName = function (last) {
    return (lastName = last);
  };
  this.setFullName = function (first, last) {
    this.setFirsName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};
const bob = new Person("Bob", "Ross");
console.log(bob.getFullName());
