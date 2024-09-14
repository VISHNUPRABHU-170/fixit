import { ButtonComponentModel } from "projects/library/src/lib/components/fx-button/fx-button.model";
import { ImageComponentModel, ImageType } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { TextComponentModel, TextSize } from "projects/library/src/lib/components/fx-text/fx-text.model";

export const imageConfig: ImageComponentModel = {
  path: ImageType.STANDARD_QUALITY,
  altText: ImageType.STANDARD_QUALITY
};

export const buttonConfig: ButtonComponentModel = {
  text: 'Explore Our Services Now',
  routerLink: 'services'
};

export const textConfig: TextComponentModel = {
  text: 'Premium Services Customized to Your Needs: Expert Repairs and Installations for Laptops, Computers, Printers, Electrical Work, CCTV, and More.',
  textSize: TextSize.XL
}
