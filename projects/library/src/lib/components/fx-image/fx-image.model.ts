export interface ImageComponentModel {
  path: ImageType,
  altText: string,
  routerLink?: string,
  className?: string
}

export interface ImageComponentOutputEventModel {
  data: ImageComponentModel;
  eventType: IMAGE_COMPONENT_EVENT_TYPE;
}

export enum IMAGE_COMPONENT_EVENT_TYPE {
  ON_CLICK = 'ON_CLICK'
}

export enum ImageType {
  LOGO = 'LOGO',
  FIXIT = 'FIXIT',
  LOGIN = 'LOGIN',
  LOCATION = 'LOCATION',
  PHONE = 'PHONE',
  TIMER = 'TIMER',
  LOGIN_PHONE = 'LOGIN_PHONE',
  ARROW_RIGHT = 'ARROW_RIGHT',
  ARROW_RIGHT_NAV = 'ARROW_RIGHT_NAV',
  ARROW_LEFT_NAV = 'ARROW_LEFT_NAV',
  LAPTOP_SERVICE = 'LAPTOP_SERVICE',
  COMPUTER_SERVICE = 'COMPUTER_SERVICE',
  ELECTRICIAN_SERVICE = 'ELECTRICIAN_SERVICE',
  CCTV_SERVICE = 'CCTV_SERVICE',
  QUICK_REPAIR = 'QUICK_REPAIR',
  AVAILABILITY = 'AVAILABILITY',
  EXPERT_TECHNICIANS = 'EXPERT_TECHNICIANS',
  LAPTOP_SERVICE_BACKGROUND = 'LAPTOP_SERVICE_HOME',
  SEARCH_BUTTON = 'SEARCH_BUTTON',
  COMPUTER_SERVICE_REPAIR_BACKGROUND = 'COMPUTER_SERVICE_REPAIR_BACKGROUND',
  STANDARD_QUALITY = 'STANDARD_QUALITY',
  ELECTRIC_REPAIR = 'ELECTRIC_REPAIR',
  STAR_UNRATED = 'STAR_UNRATED',
  STAR_RATED = 'STAR_RATED',
  SEARCH_ICON = 'SEARCH_ICON',
  LAPTOP_SERVICE_NAVIGATE = 'LAPTOP_SERVICE_NAVIGATE',
  COMPUTER_SERVICE_NAVIGATE = 'COMPUTER_SERVICE_NAVIGATE',
  ELECTRICIAN_SERVICE_NAVIGATE = 'ELECTRICIAN_SERVICE_NAVIGATE',
  CCTV_SERVICE_NAVIGATE = 'CCTV_SERVICE_NAVIGATE'
}

export const IMAGE_TYPE_MAPPER: {[key: string]: string} = {};

IMAGE_TYPE_MAPPER[ImageType.LOGO] = 'assets/images/logo.png';
IMAGE_TYPE_MAPPER[ImageType.FIXIT] = 'assets/images/fixit.png';
IMAGE_TYPE_MAPPER[ImageType.LOGIN] = 'assets/images/login.png';
IMAGE_TYPE_MAPPER[ImageType.LOCATION] = 'assets/images/location.png';
IMAGE_TYPE_MAPPER[ImageType.PHONE] = 'assets/images/phone.png';
IMAGE_TYPE_MAPPER[ImageType.TIMER] = 'assets/images/timer.png';
IMAGE_TYPE_MAPPER[ImageType.LOGIN_PHONE] = 'assets/images/login_phone.png';
IMAGE_TYPE_MAPPER[ImageType.ARROW_RIGHT] = 'assets/images/arrow_right.png';
IMAGE_TYPE_MAPPER[ImageType.ARROW_RIGHT_NAV] = 'assets/images/arrow_right_nav.png';
IMAGE_TYPE_MAPPER[ImageType.ARROW_LEFT_NAV] = 'assets/images/arrow_left_nav.png';
IMAGE_TYPE_MAPPER[ImageType.LAPTOP_SERVICE] = 'assets/images/laptop_service.png';
IMAGE_TYPE_MAPPER[ImageType.COMPUTER_SERVICE] = 'assets/images/computer_service.png';
IMAGE_TYPE_MAPPER[ImageType.ELECTRICIAN_SERVICE] = 'assets/images/electrician_service.png';
IMAGE_TYPE_MAPPER[ImageType.CCTV_SERVICE] = 'assets/images/cctv_service.png';
IMAGE_TYPE_MAPPER[ImageType.QUICK_REPAIR] = 'assets/images/quick_repair.png';
IMAGE_TYPE_MAPPER[ImageType.AVAILABILITY] = 'assets/images/availability.png';
IMAGE_TYPE_MAPPER[ImageType.EXPERT_TECHNICIANS] = 'assets/images/expert_technicians.png';
IMAGE_TYPE_MAPPER[ImageType.LAPTOP_SERVICE_BACKGROUND] = 'assets/images/laptop_service2.png';
IMAGE_TYPE_MAPPER[ImageType.SEARCH_BUTTON] = 'assets/images/search_button.png';
IMAGE_TYPE_MAPPER[ImageType.COMPUTER_SERVICE_REPAIR_BACKGROUND] = 'assets/images/computer_repair.png';
IMAGE_TYPE_MAPPER[ImageType.STANDARD_QUALITY] = 'assets/images/standard_quality.png';
IMAGE_TYPE_MAPPER[ImageType.ELECTRIC_REPAIR] = 'assets/images/electric_repair.png';
IMAGE_TYPE_MAPPER[ImageType.STAR_UNRATED] = 'assets/images/star_unrated.png';
IMAGE_TYPE_MAPPER[ImageType.STAR_RATED] = 'assets/images/star_rated.png';
IMAGE_TYPE_MAPPER[ImageType.SEARCH_ICON] = 'assets/images/search_icon.png';
IMAGE_TYPE_MAPPER[ImageType.LAPTOP_SERVICE_NAVIGATE] = 'assets/images/laptop_service_navigate.png';
IMAGE_TYPE_MAPPER[ImageType.COMPUTER_SERVICE_NAVIGATE] = 'assets/images/computer_service_navigate.png';
IMAGE_TYPE_MAPPER[ImageType.ELECTRICIAN_SERVICE_NAVIGATE] = 'assets/images/electrician_service_navigate.png';
IMAGE_TYPE_MAPPER[ImageType.CCTV_SERVICE_NAVIGATE] = 'assets/images/cctv_service_navigate.png';

