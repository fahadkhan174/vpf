import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
	selector: '[dropdownDirective]'
})
export class DropdownDirective {

	constructor(private _el: ElementRef) { }

	@HostBinding('class.show') isOpen: boolean = false;

	@HostListener('mouseenter') Open() {
		this.isOpen = true;
		this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
	}

	@HostListener('mouseleave') Close() {
		setTimeout(() => {
			this.isOpen = false;
			this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
		}, 1000);
	}

}