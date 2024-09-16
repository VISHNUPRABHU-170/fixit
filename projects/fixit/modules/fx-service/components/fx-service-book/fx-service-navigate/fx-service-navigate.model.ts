import { ImageComponentModel } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { TextComponentModel } from "projects/library/src/lib/components/fx-text/fx-text.model";

export interface FxServiceNavigateComponentModel {
  title: TextComponentModel;
  navList: FxServiceNavigationModel[]
}

export interface FxServiceNavigationModel {
  title: TextComponentModel,
  img: ImageComponentModel
}
