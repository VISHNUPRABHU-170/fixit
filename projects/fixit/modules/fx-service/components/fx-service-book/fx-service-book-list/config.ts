import { TextColor, TextComponentModel, TextSize } from "projects/library/src/lib/components/fx-text/fx-text.model";
import { FxServiceBookItemComponentModel } from "./fx-service-book-item/fx-service-book-item.model";
import { ButtonComponentModel } from "projects/library/src/lib/components/fx-button/fx-button.model";

export const titleConfig: TextComponentModel = {
  text: "Services for Laptop",
  textSize: TextSize.XL
};

const laptopServiceOneTitleConfig: TextComponentModel = {
  text: 'Os Installation',
  textSize: TextSize.XL,
  textColor: TextColor.SECONDARY
};

const laptopServiceOnePriceConfig: TextComponentModel = {
  text: 'Charge: $499'
};

const laptopServiceOneDescriptionConfig: TextComponentModel = {
  text: 'Out operating system installation service is a quick and easy way to get a new operating system installed on your computer.',
  textColor: TextColor.SECONDARY
};

const laptopServiceOneButtonConfig: ButtonComponentModel = {
  text: 'Book a Service'
}

const laptopServiceOneConfig: FxServiceBookItemComponentModel = {
  title: laptopServiceOneTitleConfig,
  price: laptopServiceOnePriceConfig,
  description: laptopServiceOneDescriptionConfig,
  bookService: laptopServiceOneButtonConfig
};

const laptopServiceTwoTitleConfig: TextComponentModel = {
  text: 'Os Installation',
  textSize: TextSize.XL,
  textColor: TextColor.SECONDARY
};

const laptopServiceTwoPriceConfig: TextComponentModel = {
  text: 'Charge: $499'
};

const laptopServiceTwoDescriptionConfig: TextComponentModel = {
  text: 'Out operating system installation service is a quick and easy way to get a new operating system installed on your computer.',
  textColor: TextColor.SECONDARY
};

const laptopServiceTwoButtonConfig: ButtonComponentModel = {
  text: 'Book a Service'
};

const laptopServiceTwoConfig: FxServiceBookItemComponentModel = {
  title: laptopServiceOneTitleConfig,
  price: laptopServiceOnePriceConfig,
  description: laptopServiceOneDescriptionConfig,
  bookService: laptopServiceOneButtonConfig
};

export const laptopServiceListConfig: FxServiceBookItemComponentModel[] = [laptopServiceOneConfig, laptopServiceTwoConfig, laptopServiceTwoConfig];
