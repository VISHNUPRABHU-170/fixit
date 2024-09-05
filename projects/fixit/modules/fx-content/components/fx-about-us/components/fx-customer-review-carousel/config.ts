import { ImageComponentModel, ImageType } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { TextComponentModel } from "projects/library/src/lib/components/fx-text/fx-text.model";

export const titleConfig: TextComponentModel = {
  text: 'OUR HAPPY CLIENTS',
  className: 'title'
};

export const subTitleConfig: TextComponentModel = {
  text: 'Our Customers Review',
  className: 'sub-title'
};

export const rightNavigationConfig: ImageComponentModel = {
  path: ImageType.ARROW_RIGHT_NAV,
  altText: ImageType.ARROW_RIGHT_NAV,
  className: 'image-nav'
};

export const leftNavigationConfig: ImageComponentModel = {
  path: ImageType.ARROW_LEFT_NAV,
  altText: ImageType.ARROW_LEFT_NAV,
  className: 'image-nav'
};
