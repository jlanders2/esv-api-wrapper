import { BaseParameters, IRequiredParameters } from "./BaseParameters";

export interface ITextOptionalParameters {
  includePassageReferences: boolean;
  includeVerseNumbers: boolean;
  includeFirstVerseNumbers: boolean;
  includeFootnotes: boolean;
  includeFootnoteBody: boolean;
  includeHeadings: boolean;
  includeShortCopyright: boolean;
  includeCopyright: boolean;
  includePassageHorizontalLines: boolean;
  includeHeadingHorizontalLines: boolean;
  horizontalLineLength: number;
  includeSelah: boolean;
  indentUsing: string;
  indentParagraphs: number;
  indentPoetry: boolean;
  indentPoetryLines: number;
  indentDeclares: number;
  indentPsalmDoxology: number;
  lineLength: number;
}

export class TextParameters extends BaseParameters {
  constructor(
    requestedPassage: string,
    optionalParameters?: ITextOptionalParameters | undefined
  ) {
    const requiredParameters: IRequiredParameters = {
      q: requestedPassage,
    };
    super(requiredParameters, optionalParameters);
  }
}
