import { ButtonComponentModel } from "projects/library/src/lib/components/fx-button/fx-button.model";
import { ImageComponentModel, ImageType } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { InputComponentModel } from "projects/library/src/lib/components/fx-input/fx-input.model";
import { LinkComponentModel } from "projects/library/src/lib/components/fx-link/fx-link.model";
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
