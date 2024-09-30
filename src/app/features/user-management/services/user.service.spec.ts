import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { USERS } from 'src/mocks/data/users';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // cleanup function to ensure all http request are handled
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve users from API using GET', () => {
    const testUsers: User[] = [...USERS];

    service.getUsers('female').subscribe(users => {
      expect(users.length).toBe(1);
      expect(users).toEqual(testUsers);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/?results=10&exc=login&gender=female`);
    expect(req.request.method).toBe('GET');
    req.flush({ results: testUsers });
  });

  it('should handle error', () => {
    const errorMessage = 'simulated network error';

    service.getUsers('male').subscribe(
      () => {},
      (error) => {
        expect(error).toBeTruthy();
        expect(error.status).toBe(500);
        expect(error.statusText).toBe(errorMessage);
      }
    );
    
    const req = httpMock.expectOne(`${environment.apiUrl}/?results=10&exc=login&gender=male`);
    req.flush(errorMessage, { status: 500, statusText: 'simulated network error' });
    });

});
