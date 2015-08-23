import {computedFrom} from 'aurelia-framework';

export class Welcome{
  heading = 'Welcome to the Aurelia Navigation App!';

  get isValidated() {
    return this.user && this.user.isValidated();
  }

  submit(){
    this.user.previousValue = this.user.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }
}

export class User {
  firstName = 'John';
  lastName = 'Doe';
  previousValue = this.fullName;

  isValidated() {
    return true;
  }

  //Getters can't be observed with Object.observe, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
  //@computedFrom('firstName', 'lastName')
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
