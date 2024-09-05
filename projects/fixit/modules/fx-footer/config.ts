import { ImageComponentModel, ImageType } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { LinkComponentModel } from "projects/library/src/lib/components/fx-link/fx-link.model";
import { TextComponentModel } from "projects/library/src/lib/components/fx-text/fx-text.model";

export const imageConfig: ImageComponentModel = {
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

export const locationTextConfig: TextComponentModel = {
  text: '32 Main Street, Miami, Florida 19091, FL',
  img: locationImageConfig
};

export const phoneTextConfig: TextComponentModel = {
  text: '+91 98765 43210 ',
  img: phoneImageConfig
};

export const timerTextConfig: TextComponentModel = {
  text: 'Mon - Fri  08:00 AM - 07:00 PM',
  img: timerImageConfig
};

export const laptopServiceLinkConfig: LinkComponentModel = {
  text: 'Laptop Service',
  routerLink: '',
  className: 'footer-link'
};

export const computerServiceLinkConfig: LinkComponentModel = {
  text: 'Computer Service',
  routerLink: '',
  className: 'footer-link'
};

export const electricianServiceLinkConfig: LinkComponentModel = {
  text: 'Electrician Service',
  routerLink: '',
  className: 'footer-link'
};

export const cctvServiceLinkConfig: LinkComponentModel = {
  text: 'CCTV Service',
  routerLink: '',
  className: 'footer-link'
};

export const servicesLinkConfig: LinkComponentModel = {
  text: 'Services',
  routerLink: 'services',
  className: 'footer-link'
};

export const aboutUsLinkConfig: LinkComponentModel = {
  text: 'About Us',
  routerLink: 'about-us',
  className: 'footer-link'
};

export const contactUsLinkConfig: LinkComponentModel = {
  text: 'Contact Us',
  routerLink: 'contact-us',
  className: 'footer-link'
};
