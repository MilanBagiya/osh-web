import { Injectable } from '@angular/core';
import { ILoginResponseModal, LocalStorePath } from '../models/user.model';

@Injectable()

export class AuthService {
    constructor() { }

    setLocalStorage(key: string, value: string): void {
        this.window?.localStorage.setItem(key, value);
    }

    get window() {
        return (typeof window !== "undefined") ? window : null;
    }

    get getUserDetailFromLocalStore(): ILoginResponseModal {
        return localStorage.getItem(LocalStorePath.first_name)
            ? JSON.parse(localStorage.getItem(LocalStorePath.first_name) || '{}')
            : null;
    }

    getlocalStorageItemByKey(key: string): string | undefined | null {
        return this.window?.localStorage.getItem(key);
    }
}

