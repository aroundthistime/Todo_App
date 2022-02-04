import '@emotion/react';
import {FontTheme} from './font';
import {IconTheme} from './icon';
import {LayoutTheme} from './layout';

declare module '@emotion/react' {
  export interface Theme {
    layout: LayoutTheme;
    font: FontTheme;
    icon: IconTheme;
  }
}
