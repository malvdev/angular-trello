import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  OnInit,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DynamicFieldEntity } from '../../entities';
import { InputComponent, TextareaComponent } from '../fields';

const componentsMapper: { [key: string]: Type<any> } = {
  INPUT: InputComponent,
  TEXTAREA: TextareaComponent,
};

@Directive({
  selector: '[appDynamicFormField]',
})
export class DynamicFieldDirective implements OnInit, OnChanges {
  component: ComponentRef<any>;

  @Input()
  field: DynamicFieldEntity;

  @Input()
  group: FormGroup;

  constructor(
    private readonly _resolver: ComponentFactoryResolver,
    private readonly _container: ViewContainerRef
  ) {}

  ngOnChanges(): void {
    if (this.component) {
      this.component.instance.field = this.field;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit(): void {
    const component = this._resolver.resolveComponentFactory<any>(
      componentsMapper[this.field.type]
    );

    this.component = this._container.createComponent(component);
    this.component.instance.field = this.field;
    this.component.instance.group = this.group;
  }
}
