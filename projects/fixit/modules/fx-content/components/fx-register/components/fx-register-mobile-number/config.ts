import { ButtonComponentModel } from "projects/library/src/lib/components/fx-button/fx-button.model";
import { ImageComponentModel, ImageType } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { InputComponentModel } from "projects/library/src/lib/components/fx-input/fx-input.model";
import { TextColor, TextComponentModel, TextSize } from "projects/library/src/lib/components/fx-text/fx-text.model";

export const contentOneConfig: TextComponentModel = {
  text: "We'll send you an OTP verification",
  textSize: TextSize.XL,
  textColor: TextColor.SECONDARY
};

export const contentTwoConfig: TextComponentModel = {
  text: "Code to your mobile number",
  textSize: TextSize.XL,
  textColor: TextColor.SECONDARY
};

const phoneImageConfig: ImageComponentModel = {
  path: ImageType.LOGIN_PHONE,
  altText: ImageType.LOGIN_PHONE
};

export const inputConfig: InputComponentModel = {
  label: 'Enter your Mobile number',
  img: phoneImageConfig,
  className: 'input-login'
};

export const getOTPButtonConfig: ButtonComponentModel = {
  text: 'Get OTP'
};
