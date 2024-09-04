import { ButtonComponentModel } from "projects/library/src/lib/components/fx-button/fx-button.model";
import { ImageComponentModel, ImageType } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { FxNavListComponentModel } from "../fx-nav-list/fx-nav-list.model";
import { LinkComponentModel } from "projects/library/src/lib/components/fx-link/fx-link.model";

export const imageConfig: ImageComponentModel = {
  path: ImageType.FIXIT,
  altText: ImageType.FIXIT
};

export const buttonConfig: ButtonComponentModel = {
  text: 'Register',
  routerLink: 'login'
};

const homeLinkConfig: LinkComponentModel = {
  text: 'Home',
  routerLink: 'home',
  className: 'nav-link'
};

const serviceLinkConfig: LinkComponentModel = {
  text: 'Service',
  routerLink: 'service',
  className: 'nav-link'
};

const aboutUsLinkConfig: LinkComponentModel = {
  text: 'About Us',
  routerLink: 'about-us',
  className: 'nav-link'
};

const contactUsLinkConfig: LinkComponentModel = {
  text: 'Contact Us',
  routerLink: 'contact-us',
  className: 'nav-link'
};

export const navListConfig: FxNavListComponentModel = {
  navList: [homeLinkConfig, serviceLinkConfig, aboutUsLinkConfig, contactUsLinkConfig]
}
