import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [FormsModule,
    RouterLink
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
    destination: '' // <-- Added this property
  };

  saveData() {
    localStorage.setItem('registrationData', JSON.stringify(this.formData));
    alert('Your data has been saved to localStorage!');
    this.formData = { name: '', email: '', subject: '', message: '', destination: '' }; // Reset form
  }
}
