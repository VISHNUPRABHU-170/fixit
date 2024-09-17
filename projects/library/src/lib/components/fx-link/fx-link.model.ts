export interface LinkComponentModel {
  text: string,
  routerLink?: string,
  className?: string
}

export interface LinkComponentOutputEventModel {
  data: LinkComponentModel;
  eventType: LINK_COMPONENT_EVENT_TYPE;
}

export enum LINK_COMPONENT_EVENT_TYPE {
  ON_CLICK = 'ON_CLICK'
}
