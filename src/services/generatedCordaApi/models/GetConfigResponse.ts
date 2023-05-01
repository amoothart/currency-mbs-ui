/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConfigSchemaVersion } from './ConfigSchemaVersion';

export type GetConfigResponse = {
    configWithDefaults: string;
    schemaVersion: ConfigSchemaVersion;
    section: string;
    sourceConfig: string;
    version: number;
};
