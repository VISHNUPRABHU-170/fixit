import { ImageComponentModel } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { TextComponentModel } from "projects/library/src/lib/components/fx-text/fx-text.model";

export interface FxServiceListComponentModel {
  title: TextComponentModel,
  content: TextComponentModel,
  icon: ImageComponentModel
}
