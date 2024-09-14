import { ButtonComponentModel } from "projects/library/src/lib/components/fx-button/fx-button.model";
import { ImageComponentModel, ImageType } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { InputComponentModel } from "projects/library/src/lib/components/fx-input/fx-input.model";
import { TextColor, TextComponentModel, TextSize } from "projects/library/src/lib/components/fx-text/fx-text.model";
import { FxContactUsComponentModel } from "./fx-contact-us.model";

const titleConfig: TextComponentModel = {
  text: 'Help us to Improve',
  textSize: TextSize.XXXL,
  textColor: TextColor.PRIMARY,
  className: 'bold'
};

const subTitleConfig: TextComponentModel = {
  text: 'Leave your Feedback',
  textSize: TextSize.LG,
  textColor: TextColor.SECONDARY,
};

const rateUsConfig: TextComponentModel = {
  text: 'Rate Us!',
  textSize: TextSize.LG,
  textColor: TextColor.SECONDARY,
};

const nameInputConfig: InputComponentModel = {
  label: "Enter your Name",
  className: 'input-contact'
};

const mailIDInputConfig: InputComponentModel = {
  label: "Enter your Mail ID",
  className: 'input-contact'
};

const submitButtonConfig: ButtonComponentModel = {
  text: 'Submit'
};

export const starUnRatedImageConfig: ImageComponentModel = {
  path: ImageType.STAR_UNRATED,
  altText: ImageType.STAR_UNRATED,
  className: 'image-rating'
};

export const starRatedImageConfig: ImageComponentModel = {
  path: ImageType.STAR_RATED,
  altText: ImageType.STAR_RATED,
  className: 'image-rating'
};

export const contactUsConfig: FxContactUsComponentModel = {
  title: titleConfig,
  subTitle: subTitleConfig,
  name: nameInputConfig,
  mailId: mailIDInputConfig,
  ratingTitle: rateUsConfig,
  ratingContent: [starUnRatedImageConfig, starUnRatedImageConfig, starUnRatedImageConfig, starUnRatedImageConfig, starUnRatedImageConfig],
  submit: submitButtonConfig
}
