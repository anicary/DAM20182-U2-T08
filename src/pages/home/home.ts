import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaserestProvider } from '../../providers/firebaserest/firebaserest';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  validations_form: FormGroup;
  errorMessage: string = '';
  validation_messages = {
    'rfc': [
      { type: 'required', message: 'ingrese un RFC correcto' },
      /*{ type: 'pattern', message: 'Ingresar un RFC Valido.' },*/
      { type: 'minlength', message: 'debe contener max 13 caracteres' },
      { type: 'maxlength', message: 'debe contener max 13 caracteres' }
    ],
    'name': [
      { type: 'required', message: 'Se requiere un nombre o razon ' },
    ],
    'calle': [
      { type: 'required', message: 'Se requiere una calle ' },
    ],
    'callenumero': [
      { type: 'required', message: 'Se requiere una calle ' },
    ],
    'telefono': [
      { type: 'required', message: 'Se requiere una calle ' },
      { type: 'minlength', message: 'debe contener max 13 caracteres' }
    ],
    'email': [
      { type: 'required', message: 'Se requiere una calle ' },
    ],
    'activo': [
      { type: 'required', message: 'Se requiere una calle ' },
    ]
  };
  constructor(
    public navCtrl: NavController,
    private db: FirebaserestProvider,
    private formBuilder: FormBuilder
  ) {
  }
  ionViewWillLoad(){
    this.validations_form = this.formBuilder.group({
      rfc: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(13),
        /*Validators.pattern('/^[a-zA-Z]{3,4}(\d{6})((\D|\d){2,3})?$/')*/
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      calle: new FormControl('', Validators.compose([
        Validators.required
      ])),
      callenumero: new FormControl('', Validators.compose([
        Validators.required
      ])),
      telefono: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required
      ])),
      activo: new FormControl('', Validators.compose([
          Validators.required
      ]))
    });
  }
  agregarPersona(valor){
    console.log(valor);
    this.db.agregarPersona(valor);
  }
}
