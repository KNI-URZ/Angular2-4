import { Component, OnInit } from '@angular/core';
import { PersonModel } from '../models/person-model';
import { PersonService } from '../services/person.service';
import { Response } from '@Angular/http/src/static_response';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  newFirstName = "";
  newLastName = "";
  newAvatar = "";

  persons: Array<PersonModel> ;
  // = [
  //   new PersonModel(1, "a", "a", "a"),
  //   new PersonModel(2, "b", "b", "b"),
  //   new PersonModel(3, "c", "c", "c")
  // ];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  addPerson() {
    this.persons.push(new PersonModel(
      this.persons.length + 1,
      this.newFirstName,
      this.newLastName,
      this.newAvatar));
  }
  removePerson(id: number) {
    this.persons.splice(id - 1, 1);
  }
  isValid() {
    if (this.newFirstName == "" || this.newLastName == "", this.newAvatar == "") {
      return false;
    } else {
      return true;
    }
  }
  getPersons() {
    this.personService.get("https://angular2prezentacja.herokuapp.com/persons")
      .subscribe(response => {
        this.persons = response
      })
  }
}
