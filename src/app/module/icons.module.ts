import { NgModule } from '@angular/core';

import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Search, CloudUploadFill, Info, X, PlusSquare, ChevronUp, CartPlusFill, PersonCircle, Cart4 } from 'ng-bootstrap-icons/icons';

// Select some icons (use an object, not an array)
const icons = {
  Search,
  CloudUploadFill,
  Info,
  X,
  PlusSquare,
  ChevronUp,
  CartPlusFill,
  PersonCircle,
  Cart4
};

@NgModule({
  imports: [
    BootstrapIconsModule.pick(icons)
  ],
  exports: [
    BootstrapIconsModule
  ]
})
export class IconsModule { }

// Refer to https://www.npmjs.com/package/ng-bootstrap-icons

// NOTES:
// 1. We add BootstrapIconsModule to the 'exports', since the <bi> component will be used in templates of parent module
// 2. Don't forget to pick some icons using BootstrapIconsModule.pick({ ... })