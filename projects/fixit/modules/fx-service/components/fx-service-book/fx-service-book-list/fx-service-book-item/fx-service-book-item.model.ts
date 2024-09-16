import { ButtonComponentModel } from "projects/library/src/lib/components/fx-button/fx-button.model";
import { TextComponentModel } from "projects/library/src/lib/components/fx-text/fx-text.model";

export interface FxServiceBookItemComponentModel {
  title: TextComponentModel;
  price: TextComponentModel;
  description: TextComponentModel;
  bookService: ButtonComponentModel;
}
