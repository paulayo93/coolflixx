import { NgModule, Optional, SkipSelf } from "@angular/core";

import { EnsureModuleLoadedOnceGuard } from "../ensure-module-loaded-once.guard";

import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import { faTimes, faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faMobile } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class FontAwesomeIconModule {
  static forRoot():
    | any[]
    | import("@angular/core").Type<any>
    | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error("Method not implemented.");
  }
  constructor(library: FaIconLibrary) {
    library.addIcons(faSearch, faHeart);
  }
}
