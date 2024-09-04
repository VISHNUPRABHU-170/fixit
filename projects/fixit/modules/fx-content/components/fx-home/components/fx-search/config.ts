import { ImageComponentModel, ImageType } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { InputComponentModel } from "projects/library/src/lib/components/fx-input/fx-input.model";

export const laptopServiceImageConfig: ImageComponentModel = {
  path: ImageType.LAPTOP_SERVICE_HOME,
  altText: ImageType.LAPTOP_SERVICE_HOME
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
