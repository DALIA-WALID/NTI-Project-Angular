import { Component } from '@angular/core';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {


  constructor(private auth : AuthService , private toastr : ToastrService , private router : Router){}

  isSubmited = false
  registerForm = new FormGroup(
    {
      name: new FormControl("Nouran", [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]), // Validators.pattern()
      phone: new FormControl('', [Validators.required, Validators.maxLength(11)]),
      confirm_password: new FormControl('' )
    }
  )
}
