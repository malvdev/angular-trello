import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWrapperGroupComponent } from './profile-wrapper-group.component';

describe('ProfileWrapperGroupComponent', () => {
  let component: ProfileWrapperGroupComponent;
  let fixture: ComponentFixture<ProfileWrapperGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileWrapperGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileWrapperGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
