/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConfigSchemaVersion } from './ConfigSchemaVersion';

/**
 *
 * Details of the updated configuration. Includes:
 * - `section`: the section of the configuration to be updated.
 * - `config`: the updated configuration in JSON or HOCON format.
 * - `schemaVersion`: the schema version of the configuration.
 * - `version`: the version number used for optimistic locking. The request fails if this version does not
 * match the version stored in the database for the corresponding section or -1 if this is a new section
 * for which no configuration has yet been stored.
 */
export type UpdateConfigParameters = {
    /**
     * Can be any value - string, number, boolean, array or object.
     */
    config: (string | number | boolean | any[] | Record<string, any>);
    schemaVersion: ConfigSchemaVersion;
    section: string;
    version: number;
};
