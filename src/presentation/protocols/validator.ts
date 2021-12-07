export interface IHttpBodyRequestValidator {
  validate(data: any): Promise<void>;
}
