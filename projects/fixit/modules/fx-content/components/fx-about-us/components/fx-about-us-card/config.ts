import { ButtonComponentModel } from "projects/library/src/lib/components/fx-button/fx-button.model";
import { ImageComponentModel, ImageType } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { TextColor, TextComponentModel, TextSize } from "projects/library/src/lib/components/fx-text/fx-text.model";

export const titleConfig: TextComponentModel = {
  text: 'ABOUT US',
  className: 'title'
};

export const subTitleConfig: TextComponentModel = {
  text: 'Few Words About FIXIT',
  className: 'sub-title'
};

export const contentConfig: TextComponentModel = {
  text: `At Fixit, we specialize in delivering fast, reliable, and expert services for all your technology and security needs.
   From repairing laptops, computers, and printers to providing skilled electrical work and CCTV installations,
    our team is dedicated to providing solutions that ensure your devices run smoothly and your spaces stay secure.
   With a commitment to quality and customer satisfaction, we’re here to fix it all — quickly and professionally.`,
  className: 'paragraph'
};

export const buttonConfig: ButtonComponentModel = {
  text: 'Explore Our Services Now',
  routerLink: 'services'
};

export const imageConfig: ImageComponentModel = {
  path: ImageType.ELECTRIC_REPAIR,
  altText: ImageType.ELECTRIC_REPAIR
}
