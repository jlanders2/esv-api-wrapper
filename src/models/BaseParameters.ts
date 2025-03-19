import { camelCaseToKebabCase } from "../shared/helpers";

export interface IRequiredParameters {
  q: string;
}

export class BaseParameters {
  private requiredParameters: IRequiredParameters;
  private optionalParameters: any;

  /**
   *
   */
  constructor(
    requiredParameters: IRequiredParameters,
    optionalParameters: any
  ) {
    this.requiredParameters = requiredParameters;
    this.optionalParameters = optionalParameters;
  }

  buildParametersObject = () => {
    let requiredParams = {
      q: this.requiredParameters.q,
    };
    let optParams: any = {};

    if (this.optionalParameters) {
      Object.entries(this.optionalParameters).forEach(([key, value]) => {
        const kebabKey = camelCaseToKebabCase(key);
        optParams[kebabKey] = value;
      });
    }
    return {
      ...requiredParams,
      ...optParams,
    };
  };
}
