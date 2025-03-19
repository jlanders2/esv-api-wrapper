import { BaseParameters, IRequiredParameters } from "./BaseParameters";

export interface ISearchOptionalParameters {
  pageSize: number;
  page: number;
}

export class SearchParameters extends BaseParameters {
  constructor(
    requestedPassage: string,
    optionalParameters?: ISearchOptionalParameters | undefined
  ) {
    const requiredParameters: IRequiredParameters = {
      q: requestedPassage,
    };
    super(requiredParameters, optionalParameters);
  }
}
