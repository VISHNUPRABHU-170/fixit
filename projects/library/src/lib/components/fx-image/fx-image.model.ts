export interface ImageComponentModel {
  path: ImageType,
  altText: string,
  routerLink?: string,
  className?: string
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
  LAPTOP_SERVICE = 'LAPTOP_SERVICE',
  COMPUTER_SERVICE = 'COMPUTER_SERVICE',
  ELECTRICIAN_SERVICE = 'ELECTRICIAN_SERVICE',
  CCTV_SERVICE = 'CCTV_SERVICE',
  QUICK_REPAIR = 'QUICK_REPAIR',
  AVAILABILITY = 'AVAILABILITY',
  EXPERT_TECHNICIANS = 'EXPERT_TECHNICIANS'
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
IMAGE_TYPE_MAPPER[ImageType.LAPTOP_SERVICE] = 'assets/images/laptop_service.png';
IMAGE_TYPE_MAPPER[ImageType.COMPUTER_SERVICE] = 'assets/images/computer_service.png';
IMAGE_TYPE_MAPPER[ImageType.ELECTRICIAN_SERVICE] = 'assets/images/electrician_service.png';
IMAGE_TYPE_MAPPER[ImageType.CCTV_SERVICE] = 'assets/images/cctv_service.png';
IMAGE_TYPE_MAPPER[ImageType.QUICK_REPAIR] = 'assets/images/quick_repair.png';
IMAGE_TYPE_MAPPER[ImageType.AVAILABILITY] = 'assets/images/availability.png';
IMAGE_TYPE_MAPPER[ImageType.EXPERT_TECHNICIANS] = 'assets/images/expert_technicians.png';


