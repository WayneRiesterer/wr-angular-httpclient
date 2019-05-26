import { NgModule } from '@angular/core';

import { ApiModule } from './api/api.module';

@NgModule({
  exports: [ApiModule]
})
export class CoreModule {}