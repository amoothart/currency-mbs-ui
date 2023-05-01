/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CpkIdentifier } from './CpkIdentifier';

export type CpkMetadata = {
    hash: string;
    id: CpkIdentifier;
    libraries: Array<string>;
    mainBundle: string;
    timestamp: string;
    type: string;
};
