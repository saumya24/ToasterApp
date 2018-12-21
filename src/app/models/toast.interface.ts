export class IToast {
  type: IToastType;
  message: IToastMessage;
  keepAfterRouteChange: boolean;
}

export enum IToastType {
  Success,
  Error,
  Info,
  Warning
}

export enum IToastMessage {
  Success = 'Success!',
  Error = 'Oops, something went wrong.',
  Info = 'Here is some more info...',
  Warning = 'This is a warning.'
}
