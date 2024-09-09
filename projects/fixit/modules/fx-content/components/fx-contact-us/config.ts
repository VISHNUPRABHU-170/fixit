import { ButtonComponentModel } from "projects/library/src/lib/components/fx-button/fx-button.model";
import { ImageComponentModel, ImageType } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { InputComponentModel } from "projects/library/src/lib/components/fx-input/fx-input.model";
import { TextColor, TextComponentModel, TextSize } from "projects/library/src/lib/components/fx-text/fx-text.model";

export const titleConfig: TextComponentModel = {
  text: 'Help us to Improve',
  textSize: TextSize.XXXL,
  textColor: TextColor.PRIMARY,
  className: 'bold'
};

export const subTitleConfig: TextComponentModel = {
  text: 'Leave your Feedback',
  textSize: TextSize.LG,
  textColor: TextColor.SECONDARY,
};

export const rateUsConfig: TextComponentModel = {
  text: 'Rate Us!',
  textSize: TextSize.LG,
  textColor: TextColor.SECONDARY,
};

export const nameInputConfig: InputComponentModel = {
  label: "Enter your Name",
  className: 'input-contact'
};

export const mailIDInputConfig: InputComponentModel = {
  label: "Enter your Mail ID",
  className: 'input-contact'
};

export const submitButtonConfig: ButtonComponentModel = {
  text: 'Submit'
};

export const starRatedImageConfig: ImageComponentModel = {
  path: ImageType.STAR_RATED,
  altText: ImageType.STAR_RATED,
  className: 'image-rating'
};

export const starUnRatedImageConfig: ImageComponentModel = {
  path: ImageType.STAR_UNRATED,
  altText: ImageType.STAR_UNRATED,
  className: 'image-rating'
};
