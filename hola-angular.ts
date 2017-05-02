import { Component } form '@angular/core';
import { boostrap } from 'angular/platform-browser-dynamic';

@Component({
	selector: 'hola-angular',
	template: '<h1> {{saludo}} </h1>'
})
class HolaAngularComponent {
	saludo: string;
	constructor() {
	this.saludo = '¡Hola Angular 2';
	}
}

bootstrap(HolaAngularComponent); // Componente es bootstrapped!