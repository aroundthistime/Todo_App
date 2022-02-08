import '@emotion/react';
import {BorderTheme} from './border';
import {ButtonTheme} from './button';
import {ColorTheme} from './color';
import {FontTheme} from './font';
import {FooterTheme} from './footer';
import {IconTheme} from './icon';
import {LayoutTheme} from './layout';
import {ShadowTheme} from './shadow';
import {TextInputTheme} from './textInput';

declare module '@emotion/react' {
  export interface Theme {
    layout: LayoutTheme;
    font: FontTheme;
    icon: IconTheme;
    color: ColorTheme;
    border: BorderTheme;
    shadow: ShadowTheme;
    button: ButtonTheme;
    footer: FooterTheme;
    textInput: TextInputTheme;
  }
}
