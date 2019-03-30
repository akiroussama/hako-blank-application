import { NgModule } from '@angular/core';

import { HakoBlankAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [HakoBlankAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [HakoBlankAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HakoBlankAppSharedCommonModule {}
