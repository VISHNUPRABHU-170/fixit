export interface ButtonComponentModel {
  text: string;
  routerLink?: string;
  className?: string;
}

export interface ButtonComponentOutputEventModel {
  data: ButtonComponentModel;
  eventType: BUTTON_COMPONENT_EVENT_TYPE;
}

export enum BUTTON_COMPONENT_EVENT_TYPE {
  ON_CLICK = 'ON_CLICK'
}
