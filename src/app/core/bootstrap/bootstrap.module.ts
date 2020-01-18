import { NgModule, Optional, SkipSelf} from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { EnsureModuleLoadedOnceGuard } from '../ensure-module-loaded-once.guard';


@NgModule({
  declarations: [ ],
  imports: [CommonModule, NgbModule],
  exports: [NgbModule]
})
export class BootstrapModule  extends EnsureModuleLoadedOnceGuard{

  constructor(@Optional() @SkipSelf() parentModule: BootstrapModule) {
    super(parentModule);
  }
}
