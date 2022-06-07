import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder,Validators,FormArray } from '@angular/forms';
import { PasswordValidator } from './shared/password.validator';
import { forbiddenNameValidator } from './shared/user-name.validaator';
// import { forbiddenNameValidator } from './shared/user-name.validaator'; 
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
 registrationForm:any = FormGroup;

 get userName(){
  return this.registrationForm.get('userName')
}

  get email(){
    return this.registrationForm.get('email')
  }

  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray; 
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb:FormBuilder, private _registrationService: RegistrationService){}
   
   ngOnInit(){
   this.registrationForm = this.fb.group({
      userName:['', [Validators.required, Validators.minLength(3),forbiddenNameValidator(/password/)]],
      email:[''],
      subscribe:['false'],
      password:[''],
      confirmPassword:[''],
      address:this.fb.group({
        city:[''],
        state:[''],
        postalCode:['']
      }),
      alternateEmails: this.fb.array([])
          }, {validator : PasswordValidator});


    this.registrationForm.get('subscribe').valueChanges
    .subscribe((checkedValue:any) =>{
      const email = this.registrationForm.get('email');
      if(checkedValue){
        email.setValidators(Validators.required);
      }else{
        email.clearValidators();
      }
      email.updateValueAndValidity();
    })
   }
   

   
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Deepak'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  loadApiData(){
    this.registrationForm.patchValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword : 'test',
      address:{
        city:'City',
        state:'State',
        postalCode:'12345'
      }
    })
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
    .subscribe(
      response => console.log('Success!', response),
      error => console.log('Error!', error)
    );
  }
}
// const myAbsolutelyNotNullElement = window.document.getElementById("foobar")!

