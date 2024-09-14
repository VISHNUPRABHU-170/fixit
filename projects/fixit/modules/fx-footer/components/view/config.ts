import { ImageComponentModel, ImageType } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { LinkComponentModel } from "projects/library/src/lib/components/fx-link/fx-link.model";
import { TextComponentModel, TextSize } from "projects/library/src/lib/components/fx-text/fx-text.model";
import { FxFooterContactModel } from "../fx-footer-contact/fx-footer-contact.model";
import { FxFooterLinksModel } from "../fx-footer-links/fx-footer-links.model";

const imageConfig: ImageComponentModel = {
  path: ImageType.FIXIT,
  altText: ImageType.FIXIT,
  routerLink: 'home',
  className: 'image-link'
};

const locationImageConfig: ImageComponentModel = {
  path: ImageType.LOCATION,
  altText: ImageType.LOCATION,
  routerLink: 'home',
  className: 'image-link'
};

const phoneImageConfig: ImageComponentModel = {
  path: ImageType.PHONE,
  altText: ImageType.PHONE,
  routerLink: 'home',
  className: 'image-link'
};

const timerImageConfig: ImageComponentModel = {
  path: ImageType.TIMER,
  altText: ImageType.TIMER,
  routerLink: 'home',
  className: 'image-link'
};

const locationTextConfig: TextComponentModel = {
  text: '32 Main Street, Miami, Florida 19091, FL',
  img: locationImageConfig,
  textSize: TextSize.MD
};

const phoneTextConfig: TextComponentModel = {
  text: '+91 98765 43210 ',
  img: phoneImageConfig,
  textSize: TextSize.MD
};

const timerTextConfig: TextComponentModel = {
  text: 'Mon - Fri  08:00 AM - 07:00 PM',
  img: timerImageConfig,
  textSize: TextSize.MD
};

export const contactConfig: FxFooterContactModel = {
  img: imageConfig,
  details: [locationTextConfig, phoneTextConfig, timerTextConfig]
};

const laptopServiceLinkConfig: LinkComponentModel = {
  text: 'Laptop Service',
  routerLink: '',
  className: 'footer-link'
};

const computerServiceLinkConfig: LinkComponentModel = {
  text: 'Computer Service',
  routerLink: '',
  className: 'footer-link'
};

const electricianServiceLinkConfig: LinkComponentModel = {
  text: 'Electrician Service',
  routerLink: '',
  className: 'footer-link'
};

const cctvServiceLinkConfig: LinkComponentModel = {
  text: 'CCTV Service',
  routerLink: '',
  className: 'footer-link'
};

const servicesTitleConfig: TextComponentModel = {
  text: 'SERVICES',
  className: 'title'
};

export const servicesLinksConfig: FxFooterLinksModel = {
  title: servicesTitleConfig,
  links: [laptopServiceLinkConfig, computerServiceLinkConfig, electricianServiceLinkConfig, cctvServiceLinkConfig]
};

const servicesLinkConfig: LinkComponentModel = {
  text: 'Services',
  routerLink: 'services',
  className: 'footer-link'
};

const aboutUsLinkConfig: LinkComponentModel = {
  text: 'About Us',
  routerLink: 'about-us',
  className: 'footer-link'
};

const contactUsLinkConfig: LinkComponentModel = {
  text: 'Contact Us',
  routerLink: 'contact-us',
  className: 'footer-link'
};

const quickLinkTitleConfig: TextComponentModel = {
  text: 'QUICK LINK',
  className: 'title'
};

export const quickLinksConfig: FxFooterLinksModel = {
  title: quickLinkTitleConfig,
  links: [servicesLinkConfig, aboutUsLinkConfig, contactUsLinkConfig]
};
