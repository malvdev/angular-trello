import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthLogoComponent } from './auth-logo/auth-logo.component';
import { AuthTemplateComponent } from './auth-template.component';

describe('AuthTemplateComponent', () => {
  let component: AuthTemplateComponent;
  let fixture: ComponentFixture<AuthTemplateComponent>;
  const inputTitle = 'Title';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AuthTemplateComponent, AuthLogoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthTemplateComponent);
    component = fixture.componentInstance;
    component.titleTemplate = inputTitle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
