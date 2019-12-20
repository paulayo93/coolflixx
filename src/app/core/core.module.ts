import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EnsureModuleLoadedOnceGuard } from "./ensure-module-loaded-once.guard";
import { MaterialModule } from "./material/material.module";
import { BootstrapModule } from "./bootstrap/bootstrap.module";
import { FontAwesomeIconModule } from "./fontawesomeicon/fontawesomeicon.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    BootstrapModule,
    FontAwesomeIconModule
  ],
  exports: [MaterialModule, BootstrapModule, FontAwesomeIconModule]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
