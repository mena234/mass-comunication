import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  users: User[];
  filter: string;
  country: string;
  filteredUsers: User[];
  emailFormGroup: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        name: "Mina",
        country: "Egypt"
      },
      {
        name: "Wessa",
        country: "America"
      },
      {
        name: "Abanoub",
        country: "Germany"
      },
      {
        name: "Anurag",
        country: "America"
      },
    ]

    this.filteredUsers = this.users;
  }

  // onSelectCountry(country: string) {
  //   console.log(country)
  //   this.users.forEach(user => {
  //     if (user.country == country) {
  //       this.filteredUsers.push(user);
  //     }
  //   })
  //   console.log(this.filteredUsers)
  // }
  onSelectCountry(country: string) {
    this.filteredUsers = this.users.filter(user => {
      return user.country === country
    });
    console.log(this.filteredUsers);
  }

  onSubmit() {}

  onFileSelected() {}

}
