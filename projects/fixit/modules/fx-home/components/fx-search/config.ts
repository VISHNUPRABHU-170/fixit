import { ImageComponentModel, ImageType } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { InputComponentModel } from "projects/library/src/lib/components/fx-input/fx-input.model";
import { TextColor, TextComponentModel, TextSize } from "projects/library/src/lib/components/fx-text/fx-text.model";

export const laptopServiceImageConfig: ImageComponentModel = {
  path: ImageType.LAPTOP_SERVICE_BACKGROUND,
  altText: ImageType.LAPTOP_SERVICE_BACKGROUND
};

export const searchButtonImageConfig: ImageComponentModel = {
  path: ImageType.SEARCH_BUTTON,
  altText: ImageType.SEARCH_BUTTON,
  className: 'image-link'
};

export const inputConfig: InputComponentModel = {
  label: 'Search for Service',
  className: 'search'
};

export const textConfigOne: TextComponentModel = {
  text: 'From Screens to Security,',
  textSize: TextSize.XXXXL,
  textColor: TextColor.PRIMARY
};

export const textConfigTwo: TextComponentModel = {
  text: "We've Got You Covered.",
  textSize: TextSize.XXXXL
};
