import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
	selector: '[dropdownDirective]'
})
export class DropdownDirective {

	constructor(private _el: ElementRef) { }

	@HostBinding('class.show') isOpen: boolean = false;

	@HostListener('click') Open() {
		this.isOpen = true;
		this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
	}

	@HostListener('click') Close() {
		this.isOpen = false;
		this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
		// setTimeout(() => {
		// 	this.isOpen = false;
		// 	this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
		// }, 500);
	}

}