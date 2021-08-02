import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWrapperContentComponent } from './profile-wrapper-content.component';

describe('ProfileWrapperContentComponent', () => {
  let component: ProfileWrapperContentComponent;
  let fixture: ComponentFixture<ProfileWrapperContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileWrapperContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileWrapperContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
