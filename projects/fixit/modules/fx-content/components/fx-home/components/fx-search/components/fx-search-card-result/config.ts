import { ButtonComponentModel } from "projects/library/src/lib/components/fx-button/fx-button.model";
import { ImageComponentModel, ImageType } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { TextColor, TextComponentModel, TextSize } from "projects/library/src/lib/components/fx-text/fx-text.model";

const searchImageConfig: ImageComponentModel = {
  path: ImageType.SEARCH_ICON,
  altText: ImageType.SEARCH_ICON
}
export const recentSearchTextConfig: TextComponentModel = {
  text: 'Recent Searches',
  img: searchImageConfig,
  textSize: TextSize.LG,
  className: 'text-search'
};

export const laptopServiceButtonConfig: ButtonComponentModel = {
  text: 'Laptop Service',
  routerLink: '/services',
  className: 'recent-search-button'
};

export const computerServiceButtonConfig: ButtonComponentModel = {
  text: 'Computer Service',
  routerLink: '/services',
  className: 'recent-search-button'
};

export const electricianServiceButtonConfig: ButtonComponentModel = {
  text: 'Electrician Service',
  routerLink: '/services',
  className: 'recent-search-button'
};

export const cctvServiceButtonConfig: ButtonComponentModel = {
  text: 'CCTV Service',
  routerLink: '/services',
  className: 'recent-search-button'
};
