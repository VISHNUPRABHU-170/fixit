import { ImageComponentModel } from "../fx-image/fx-image.model";

export interface TextComponentModel {
  text: string,
  img?: ImageComponentModel,
  textSize?: TextSize,
  textColor?: TextColor,
  className?: string
}

export enum TextSize {
  SM = 'SM',
  MD = 'SM',
  LG = 'SM',
  XL = 'XL',
  XXL = 'XXL',
  XXXL = 'XXXL'
}

export enum TextColor {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY'
}

export const TEXT_SIZE_MAPPER: { [key: string]: string} = {};

TEXT_SIZE_MAPPER[TextSize.SM] = 'text-small';
TEXT_SIZE_MAPPER[TextSize.MD] = 'text-medium';
TEXT_SIZE_MAPPER[TextSize.LG] = 'text-large';
TEXT_SIZE_MAPPER[TextSize.XL] = 'text-x-large';
TEXT_SIZE_MAPPER[TextSize.XXL] = 'text-xx-large';
TEXT_SIZE_MAPPER[TextSize.XXXL] = 'text-xxx-large';

export const TEXT_COLOR_MAPPER: { [key: string]: string; } = {};

TEXT_COLOR_MAPPER[TextColor.PRIMARY] = 'primary';
TEXT_COLOR_MAPPER[TextColor.SECONDARY] = 'secondary';
TEXT_COLOR_MAPPER[TextColor.TERTIARY] = 'tertiary'
