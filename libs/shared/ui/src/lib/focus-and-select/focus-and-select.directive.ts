import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appUiFocusAndSelect]',
})
export class FocusAndSelectDirective implements OnInit {
  constructor(private readonly _elementRef: ElementRef) {
    if (!_elementRef.nativeElement['focus']) {
      throw new Error('Element does not accept focus.');
    }
  }

  ngOnInit(): void {
    const input: HTMLInputElement = this._elementRef.nativeElement;
    input.focus();
    input.select();
  }
}
