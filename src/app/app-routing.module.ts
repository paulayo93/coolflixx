import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { routes } from './routes';
import { enableDebugTools } from '@angular/platform-browser';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
