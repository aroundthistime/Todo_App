import '@emotion/react';
import {BorderTheme} from './border';
import {ColorTheme} from './color';
import {FontTheme} from './font';
import {IconTheme} from './icon';
import {LayoutTheme} from './layout';

declare module '@emotion/react' {
  export interface Theme {
    layout: LayoutTheme;
    font: FontTheme;
    icon: IconTheme;
    color: ColorTheme;
    border: BorderTheme;
  }
}
