import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { MemoryStorageService } from '../memory';

@Injectable()
export class LocalStorageService implements Storage {
  [name: string]: unknown;
  length: number;
  private readonly _storage: Storage;

  constructor(
    @Inject(PLATFORM_ID) private readonly _platformId: Record<string, unknown>,
    private readonly _memoryStorage: MemoryStorageService
  ) {
    this._storage = this._getStorage();
  }

  clear(): void {
    this._storage.clear();
  }

  getItem(key: string): string | null {
    return this._storage.getItem(key);
  }

  key(index: number): string | null {
    return this._storage.key(index);
  }

  removeItem(key: string): void {
    return this._storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    return this._storage.setItem(key, value);
  }

  private _getStorage(): Storage {
    return isPlatformServer(this._platformId)
      ? this._memoryStorage
      : window.localStorage;
  }
}
