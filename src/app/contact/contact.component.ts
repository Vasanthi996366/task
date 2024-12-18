import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    // Initialize form with validation
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  // Submit handler
  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      alert('Message sent successfully!');
      this.contactForm.reset();
      this.submitted = false;
    }
  }
}
