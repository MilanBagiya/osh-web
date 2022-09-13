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

    get getUserDetailFromLocalStore() {
        return localStorage.getItem(LocalStorePath.data)
            ? JSON.parse(localStorage.getItem(LocalStorePath.data) || '{}')
            : null;
    }

    getlocalStorageItemByKey(key: string): string | undefined | null {
        return this.window?.localStorage.getItem(key);
    }

    
    getUserDetails(){
        return this.getUserDetailFromLocalStore;
    }
}

