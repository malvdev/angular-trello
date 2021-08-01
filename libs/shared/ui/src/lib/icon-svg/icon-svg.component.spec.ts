import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSvgComponent } from './icon-svg.component';

describe('IconSvgComponent', () => {
  let component: IconSvgComponent;
  let fixture: ComponentFixture<IconSvgComponent>;
  const icon = 'apple';
  const className = `app-icon-svg-${icon}`;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconSvgComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSvgComponent);
    component = fixture.componentInstance;
    component.icon = icon;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have icon class', () => {
    expect(fixture.nativeElement.classList).toContain(className);
  });
});
