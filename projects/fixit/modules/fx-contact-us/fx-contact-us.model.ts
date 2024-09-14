import { ButtonComponentModel } from "projects/library/src/lib/components/fx-button/fx-button.model";
import { ImageComponentModel } from "projects/library/src/lib/components/fx-image/fx-image.model";
import { InputComponentModel } from "projects/library/src/lib/components/fx-input/fx-input.model";
import { TextComponentModel } from "projects/library/src/lib/components/fx-text/fx-text.model";

export interface FxContactUsComponentModel {
  title: TextComponentModel,
  subTitle: TextComponentModel,
  name: InputComponentModel,
  mailId: InputComponentModel,
  ratingTitle: TextComponentModel,
  ratingContent: ImageComponentModel[],
  submit: ButtonComponentModel
}
