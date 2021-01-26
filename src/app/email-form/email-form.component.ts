import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

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
  usersId: string[] = []
  constructor(private http: HttpClient) { 
    this.http.get<User[]>("http://localhost:3000/api/user").subscribe(result => {
      this.users = result;
      this.filteredUsers = this.users;
      this.usersId = this.filteredUsers.map(user => user._id)
      console.log(result)
    })
  }

  ngOnInit(): void {
    this.emailFormGroup = new FormGroup({
      subject: new FormControl(''),
      body: new FormControl(''),
      usersId: new FormControl(null),
      attachment: new FormControl(null)
    })
  }

  onSelectCountry(country: string) {
    this.filteredUsers = this.users.filter(user => {
      return user.country === country
    });
    this.usersId = this.filteredUsers.map(user => user._id)
    console.log(this.usersId);
  }

  onSubmit() {


    const formData = new FormData();

        formData.append('subject', '')
    formData.append('body', '')
    formData.append('usersId', '')
    formData.append('attachment', '')
    console.log(formData)

      this.emailFormGroup.patchValue({
        usersId: this.usersId
      })
      this.http.post('http://localhost:3000/api/email', this.emailFormGroup.value).subscribe(result => {
        this.emailFormGroup.reset();
      });
      
    // const size = 500;
    // let HourlyTimer = setInterval(() => {
    //   let usersIdNumber = this.usersId.length;
    //   if (usersIdNumber >= 500) {
    //     clearInterval(HourlyTimer);
    //   }
    //   const firstFiveHunduredOfUsersIf = this.usersId.slice(0, size)
    //   this.usersId = this.usersId.filter((userId, index) =>  index > 499 ? userId : null)
  
    //   this.emailFormGroup.patchValue({
    //     usersId: firstFiveHunduredOfUsersIf
    //   })
    //   this.http.post('http://localhost:3000/api/email', this.emailFormGroup.value).subscribe(result => {
    //     this.emailFormGroup.reset();
    //   });
    // },3600000)
  }

  onFileSelected(event) {
    this.emailFormGroup.patchValue({
      attachment: event.target.files[0]
    })
  }
}
