import { ButtonComponentModel } from "projects/library/src/lib/components/fx-button/fx-button.model";
import { LinkComponentModel } from "projects/library/src/lib/components/fx-link/fx-link.model";
import { TextColor, TextComponentModel, TextSize } from "projects/library/src/lib/components/fx-text/fx-text.model";

export const contentThreeConfig: TextComponentModel = {
  text: "Enter your received OTP number",
  textSize: TextSize.XL,
  textColor: TextColor.SECONDARY
};

export const contentFourConfig: TextComponentModel = {
  text: "Didn't received?",
  textSize: TextSize.XL,
  textColor: TextColor.SECONDARY
};

export const verifyButtonConfig: ButtonComponentModel = {
  text: 'Verify'
};

export const linkConfig: LinkComponentModel = {
  text: "Resend OTP",
  className: 'login-link'
};
