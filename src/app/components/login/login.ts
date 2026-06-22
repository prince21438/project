import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  protected submitted = false;
  protected captchaValue = this.generateCaptcha();
  protected loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      captcha: ['', Validators.required],
    });
  }


  protected get email() {
    return this.loginForm.get('email');
  }

  protected get password() {
    return this.loginForm.get('password');
  }

  protected get captcha() {
    return this.loginForm.get('captcha');
  }

  protected refreshCaptcha() {
    this.captchaValue = this.generateCaptcha();
    this.captcha?.setValue('');
    this.captcha?.markAsUntouched();
  }

  protected onSubmit() {
    this.submitted = true;

    const enteredCaptcha = this.captcha?.value?.toString().trim().toUpperCase();
    if (enteredCaptcha !== this.captchaValue) {
      this.captcha?.setErrors({ invalidCaptcha: true });
    }

    if (this.loginForm.invalid) {
      return;
    }

    console.log('Login submitted', this.loginForm.value);
  }

  private generateCaptcha() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }
}

