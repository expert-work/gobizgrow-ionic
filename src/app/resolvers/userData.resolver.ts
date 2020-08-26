import { Injectable }  from '@angular/core';
import { AuthService }  from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})

export class UserDataResolver {

    constructor(private authServices : AuthService){}

    resolve(){
        console.log('calls in home route')
        return this.authServices.getUserData();
    }

}