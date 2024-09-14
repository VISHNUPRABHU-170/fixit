import { ImageComponentModel, ImageType } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { TextColor, TextComponentModel, TextSize } from "projects/library/src/lib/components/fx-text/fx-text.model";
import { FxServiceListComponentModel } from "./fx-service-list.model";

const laptopServiceImageConfig: ImageComponentModel = {
  path: ImageType.LAPTOP_SERVICE,
  altText: ImageType.LAPTOP_SERVICE,
  className: 'service-list'
};

const computerServiceImageConfig: ImageComponentModel = {
  path: ImageType.COMPUTER_SERVICE,
  altText: ImageType.COMPUTER_SERVICE,
  className: 'service-list'
};

const electricianServiceImageConfig: ImageComponentModel = {
  path: ImageType.ELECTRICIAN_SERVICE,
  altText: ImageType.ELECTRICIAN_SERVICE,
  className: 'service-list'
};

const cctvServiceImageConfig: ImageComponentModel = {
  path: ImageType.CCTV_SERVICE,
  altText: ImageType.CCTV_SERVICE,
  className: 'service-list'
};

const bookServiceTextConfig: TextComponentModel = {
  text: "Click to book your service",
  textSize: TextSize.MD,
  textColor: TextColor.SECONDARY
};

const laptopServiceTextConfig: TextComponentModel = {
  text: "Laptop Service",
  textSize: TextSize.XL
};

const computerServiceTextConfig: TextComponentModel = {
  text: "Computer Service",
  textSize: TextSize.XL
};

const electricianServiceTextConfig: TextComponentModel = {
  text: "Electrician Service",
  textSize: TextSize.XL
};

const cctvServiceTextConfig: TextComponentModel = {
  text: "CCTV Service",
  textSize: TextSize.XL
};

const laptopServiceListConfig: FxServiceListComponentModel = {
  title: laptopServiceTextConfig,
  content: bookServiceTextConfig,
  icon: laptopServiceImageConfig
};

const computerServiceListConfig: FxServiceListComponentModel = {
  title: computerServiceTextConfig,
  content: bookServiceTextConfig,
  icon: computerServiceImageConfig
};

const electricianServiceListConfig: FxServiceListComponentModel = {
  title: electricianServiceTextConfig,
  content: bookServiceTextConfig,
  icon: electricianServiceImageConfig
};

const cctvServiceListConfig: FxServiceListComponentModel = {
  title: cctvServiceTextConfig,
  content: bookServiceTextConfig,
  icon: cctvServiceImageConfig
};

export const serviceListConfigs: FxServiceListComponentModel[] = [laptopServiceListConfig, computerServiceListConfig, electricianServiceListConfig, cctvServiceListConfig];
