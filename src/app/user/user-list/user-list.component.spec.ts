import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let _UserService: UserService;
  let UserServiceSpy: jasmine.Spy;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService]
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;

    _UserService = TestBed.inject(UserService);
    UserServiceSpy = spyOn(_UserService, 'getUsers').and.returnValue(of([
      {id:1, name: 'John Doe'},
      {id:2, name: 'Moe Doe'},
    ]))

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve users from user service', () => {
    fixture.detectChanges();
    expect(UserServiceSpy).toHaveBeenCalled();
  })

  it('should retrieve users from service when refresh is clicked', () => {
    fixture.detectChanges();
    UserServiceSpy.calls.reset();

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(UserServiceSpy).toHaveBeenCalled();
  })
});
