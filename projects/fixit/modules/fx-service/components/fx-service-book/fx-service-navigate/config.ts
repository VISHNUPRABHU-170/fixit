import { TextComponentModel, TextSize } from "projects/library/src/lib/components/fx-text/fx-text.model";
import { FxServiceNavigateComponentModel, FxServiceNavigationModel } from "./fx-service-navigate.model";
import { ImageComponentModel, ImageType } from "projects/library/src/lib/components/fx-image/fx-image.model";

const titleConfig: TextComponentModel = {
  text: "Choose a Service",
  textSize: TextSize.XL
};

const laptopServiceTextConfig: TextComponentModel = {
  text: "Laptop Service",
  textSize: TextSize.MD
};

const computerServiceTextConfig: TextComponentModel = {
  text: "Computer Service",
  textSize: TextSize.MD
};

const electricianServiceTextConfig: TextComponentModel = {
  text: "Electrician Service",
  textSize: TextSize.MD
};

const cctvServiceTextConfig: TextComponentModel = {
  text: "CCTV Service",
  textSize: TextSize.MD
};

const laptopServiceImageConfig: ImageComponentModel = {
  path: ImageType.LAPTOP_SERVICE_NAVIGATE,
  altText: ImageType.LAPTOP_SERVICE_NAVIGATE,
};

const computerServiceImageConfig: ImageComponentModel = {
  path: ImageType.COMPUTER_SERVICE_NAVIGATE,
  altText: ImageType.COMPUTER_SERVICE_NAVIGATE,
};

const electricianServiceImageConfig: ImageComponentModel = {
  path: ImageType.ELECTRICIAN_SERVICE_NAVIGATE,
  altText: ImageType.ELECTRICIAN_SERVICE_NAVIGATE,
};

const cctvServiceImageConfig: ImageComponentModel = {
  path: ImageType.CCTV_SERVICE_NAVIGATE,
  altText: ImageType.CCTV_SERVICE_NAVIGATE,
};

const laptopServiceNavConfig: FxServiceNavigationModel = {
  title: laptopServiceTextConfig,
  img: laptopServiceImageConfig
};

const computerServiceNavConfig: FxServiceNavigationModel = {
  title: computerServiceTextConfig,
  img: computerServiceImageConfig
};

const electricianServiceNavConfig: FxServiceNavigationModel = {
  title: electricianServiceTextConfig,
  img: electricianServiceImageConfig
};

const cctvServiceNavConfig: FxServiceNavigationModel = {
  title: cctvServiceTextConfig,
  img: cctvServiceImageConfig
};

export const serviceNavigateConfig: FxServiceNavigateComponentModel = {
  title: titleConfig,
  navList: [laptopServiceNavConfig, computerServiceNavConfig, electricianServiceNavConfig, cctvServiceNavConfig]
}
