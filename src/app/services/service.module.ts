import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { AuthInterceptor } from "../auth/auth.interceptor";
import { ApiService } from "./api.service";
import { AuthService } from "./auth.service";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule
    ],
    declarations: [

    ],
    providers: [
        ApiService,
        AuthService, 
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        }
    ]
})

export class ServiceModule {
    constructor(@Optional() @SkipSelf() parentModule: ServiceModule) {
        if (parentModule) {
            throw new Error(
                'ServiceModule is already loaded. Import it in the AppModule only'
            );
        }
    }

}
