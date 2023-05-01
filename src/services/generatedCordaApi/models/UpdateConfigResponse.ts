/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConfigSchemaVersion } from './ConfigSchemaVersion';

export type UpdateConfigResponse = {
    config: string;
    schemaVersion: ConfigSchemaVersion;
    section: string;
    version: number;
};
