import { Component } from '@angular/core';
import { MaterialModule } from '../material/material-module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    MaterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  formulario!: FormGroup;

  constructor(
    private router: Router,  
    private formBuilder: FormBuilder  
  ){this.initFormulario()}


  private initFormulario(): void {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.minLength(3), Validators.required]]
    });
  }

  onLogin(): void {
    this.router.navigate(['dashboard']);
  }

}
