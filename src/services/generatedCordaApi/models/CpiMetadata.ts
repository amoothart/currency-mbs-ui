/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CpiIdentifier } from './CpiIdentifier';
import type { CpkMetadata } from './CpkMetadata';

export type CpiMetadata = {
    cpiFileChecksum: string;
    cpiFileFullChecksum: string;
    cpks: Array<CpkMetadata>;
    groupPolicy?: string | null;
    id: CpiIdentifier;
    timestamp: string;
};
