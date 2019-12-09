import { Directive, ElementRef, HostListener, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const NUMBER_VALUE: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MaskNumberDirective),
  multi: true
};

@Directive({
  selector: '[appMaskNumber]'
})
export class MaskNumberDirective implements OnInit, ControlValueAccessor  {


  private readonly element: HTMLInputElement;
  public allow: number[] = [8, 48, 46, 50, 51, 52, 53, 54, 55, 56, 57];

  public onChange: any = () => { };
  public onTouched: any = () => { };

  constructor(
    public ref: ElementRef
  ) {
    this.element = ref.nativeElement;
  }

  public writeValue(value: any): void {
    this.onChange(value);
    this.onTouched();
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public ngOnInit(): void {
    this.element.autocomplete = 'off';
  }

  @HostListener('focus', ['$event']) focusEvent(e: any) {
    this.clearEndInput();
  }

  @HostListener('blur', ['$event']) blurEvent(e: any) {
    let formateado = '';
    let contador = 1;
    for (let i = e.target.value.length; i > 0; i--) {
      formateado = e.target.value.slice(i - 1, i) + formateado;
      if (contador % 3 === 0 && i !== 1) {
        formateado = '.' + formateado;
      }
      contador++;
   }
    this.setInput('$ ' + formateado);
  }



  @HostListener('keyup', ['$event']) public keyUpEvet(e: any) {

    const noZero: RegExp = /[1-9]{1}[0-9]*/;
    const val = e.target.value;
    const result: string[] = this.splitData(val);

    if (this.allow.includes(e.keyCode) && noZero.test(val)) {

      this.setInput(e.target.value);
      this.writeValue(e.target.value);
    } else {
      if (result !== null) {
        this.writeValue(result.join(''));
        this.setInput(result.join(''));
      } else {
        this.setInput(null);
      }
    }
  }



  public splitData(str: string) {
    const regex: RegExp = /[1-9]{1}[0-9]*/;
    return  str.match(regex);
  }

  public clearEndInput(): void {
    let value = this.element.value.replace('$ ', '');
    if (value.length === 0) {
      this.setInput('');
    } else {
      this.setInput(value);
    }
  }


  public setInput(value: any): void {
    this.element.value = value;
    this.element.dispatchEvent(new Event('input'));
  }

}
