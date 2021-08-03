import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { ProfileEntity, ProfileFacade } from '@trello/libs/profile/domain';

@Injectable()
export class ProfileResolverService implements Resolve<ProfileEntity> {
  constructor(private readonly _profileFacade: ProfileFacade) {}

  resolve(): Observable<any> | Promise<any> | any {
    this._profileFacade.getProfile();
  }
}
