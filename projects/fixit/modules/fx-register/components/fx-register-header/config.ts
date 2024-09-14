import { ImageComponentModel, ImageType } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { TextColor, TextComponentModel, TextSize } from "projects/library/src/lib/components/fx-text/fx-text.model";

export const titleConfig: TextComponentModel = {
  text: 'Join us & get started',
  textSize: TextSize.XXXL,
  textColor: TextColor.PRIMARY,
  className: 'bold'
};

export const loginImageConfig: ImageComponentModel = {
  path: ImageType.LOGIN,
  altText: ImageType.LOGIN
};
