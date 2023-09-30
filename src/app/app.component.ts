import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactForm: FormGroup; // Reactive form group

  constructor(private formBuilder: FormBuilder) {
    // inicializar los contro
    this.contactForm = this.formBuilder.group({
      representante: ['', Validators.required], 
      curp: ['', Validators.required],
      nombre: ['', Validators.required],
      paterno: ['', Validators.required],
      materno: ['', Validators.required],
      telefono: ['', Validators.required],
      celular: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      nivel: ['', Validators.required], 
      municipio: ['', Validators.required],
      asunto: ['', Validators.required],
    });
  }


  onSubmit() {
    this.markFormGroupTouched(this.contactForm);

  if (this.contactForm.valid) {

    console.log(this.contactForm.value);
  }
}

  // Helper function to mark all controls as touched
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
 
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }else{
        control.markAsTouched();
      }
    });
  }
}