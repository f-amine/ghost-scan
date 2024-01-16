import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormControl } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  email = new FormControl('');
  password = new FormControl('');
  first_name = new FormControl('');
  last_name = new FormControl('');
  registerEmail = new FormControl('');
  registerPassword = new FormControl('');
  hasToken: boolean = false;
  user: any = {};
  tokens: any = {};
  isCopied: boolean = false;
  constructor(
    private cookieService: CookieService,
    private cdr: ChangeDetectorRef,
    private http: HttpClient
  ) { }
  ngOnInit() {
    this.hasToken = this.cookieService.check('jwt');
    if (this.hasToken) {
      const token = this.cookieService.get('jwt');
      this.http
        .get(
          `http://localhost:8000/api/check-token-validity/${token}`
        )
        .subscribe((response: any) => {
          if (response.message.trim().toLowerCase() === 'not valid') {
            this.cookieService.delete('jwt');
            location.reload();
          } else {
            this.http
              .post(
                `http://localhost:8000/api/user`,
                { 'jwt': token }
              )
              .subscribe((response: any) => {
                this.user = response;
                console.log(this.user);
              });
          }
        });
      this.cdr.detectChanges();
    }
  }

  onSubmit() {
    this.http
      .post('http://localhost:8000/api/login', {
        email: this.email.value,
        password: this.password.value,
      })
      .subscribe((response: any) => {
        this.cookieService.set('jwt', response.jwt);
        location.reload();
      }, (error) => {
        Swal.fire('Error', 'An error occurred while registering', 'error');
      });
  }
  onRegister() {
    this.http
      .post('http://localhost:8000/api/register', {
        first_name: this.first_name.value,
        last_name: this.last_name.value,
        email: this.registerEmail.value,
        password: this.registerPassword.value,
      })
      .subscribe((response: any) => {
        Swal.fire({
          title: "Success!",
          text: "You have successfully registered!",
          icon: "success"
        });
      }, (error) => {
        Swal.fire('Error', 'An error occurred while registering', 'error');
      });
  }
  logout() {
    this.cookieService.delete('jwt');
    location.reload();
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copying to clipboard was successful!');
      this.isCopied = true;
      this.cdr.detectChanges();

    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }
}
