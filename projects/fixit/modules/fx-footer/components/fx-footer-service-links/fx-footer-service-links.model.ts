import { LinkComponentModel } from "projects/library/src/lib/components/fx-link/fx-link.model";
import { TextComponentModel } from "projects/library/src/lib/components/fx-text/fx-text.model";

export interface FxFooterServiceLinksModel {
  title: TextComponentModel
  links: LinkComponentModel[];
}
