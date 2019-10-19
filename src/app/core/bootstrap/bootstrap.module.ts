import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { EnsureModuleLoadedOnceGuard } from '../ensure-module-loaded-once.guard';



@NgModule({
  declarations: [],
  imports: [
    NgbModule,
    CommonModule,
  ],
  exports: [NgbModule]
})
export class BootstrapModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: BootstrapModule) {
    super(parentModule);
  }

}

