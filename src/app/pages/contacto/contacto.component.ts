import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(2) ] ],
    correo: [ '', [ Validators.required, Validators.pattern(this.emailPattern)] ],
    asunto: [ '', [ Validators.required ] ],
    mensaje: [ '', [ Validators.required ] ],
    
  });

  get emailErrorMsg(): string{
    // console.log(this.miFormulario.get('email')?.errors);
    
    let emailError = this.miFormulario.get('correo')?.errors;
    let mensaje = ''
  
    if (emailError?.['required']) {
      mensaje =  'El email es requerido'
    } else if (emailError?.['pattern']) {
      mensaje =  'El formato del email es incorrecto'

    }
   return mensaje;
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid &&
    this.miFormulario.get(campo)?.touched

  }

  constructor( private fb: FormBuilder ) { }

  guardar(){
      console.log(this.miFormulario.value);
      this.miFormulario.reset();
  }
  
    
   
}
