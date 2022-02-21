import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropDown'
})
export class DropdownDirective {

  @HostBinding('class.show') dropdownOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.dropdownOpen = this.elRef.nativeElement.contains(event.target) ? !this.dropdownOpen : false;
  }
  constructor(private elRef: ElementRef) {}

}
