import { ImageComponentModel, ImageType } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { TextComponentModel, TextSize } from "projects/library/src/lib/components/fx-text/fx-text.model";

const quickRepairImageConfig: ImageComponentModel = {
  path: ImageType.QUICK_REPAIR,
  altText: ImageType.QUICK_REPAIR
};

const expertTechniciansImageConfig: ImageComponentModel = {
  path: ImageType.EXPERT_TECHNICIANS,
  altText: ImageType.EXPERT_TECHNICIANS
};

const availabilityImageConfig: ImageComponentModel = {
  path: ImageType.AVAILABILITY,
  altText: ImageType.AVAILABILITY
};

export const quickRepairTextConfig: TextComponentModel = {
  text: 'Quick Repair Service',
  textSize: TextSize.LG,
  img: quickRepairImageConfig,
  className: 'advertisement-text',
};

export const expertTechniciansTextConfig: TextComponentModel = {
  text: 'Expert Technicians',
  textSize: TextSize.LG,
  img: expertTechniciansImageConfig,
  className: 'advertisement-text'
};

export const availabilityTextConfig: TextComponentModel = {
  text: '24/7 Availability',
  textSize: TextSize.LG,
  img: availabilityImageConfig,
  className: 'advertisement-text'
};
