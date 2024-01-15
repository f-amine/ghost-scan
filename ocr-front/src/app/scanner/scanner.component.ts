import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrl: './scanner.component.css'
})
export class ScannerComponent {
  imageSrc: string | ArrayBuffer | null ='';
  imageFile: File | null = null;
  isLoading: boolean = false;
  userData = {
    name: '',
    id: '',
    arabic_name: ''
  };
  constructor(private http: HttpClient) {}
  displayImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.imageFile = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(event.target.files[0]);
    }
  }
  uploadImage() {
    if (this.imageFile) {
      this.isLoading = true;
      const formData = new FormData();
      formData.append('image', this.imageFile);

      this.http.post<any>('http://localhost:8000/ghost-scan/ocr/', formData).subscribe(
        (response: any) => {
          this.userData = response;
          this.isLoading = false;
        },
        (error) => {
          console.log(error);
          this.isLoading = false;
        }
      );
    }
  }
  refreshPage() {
    location.reload();
}

}
