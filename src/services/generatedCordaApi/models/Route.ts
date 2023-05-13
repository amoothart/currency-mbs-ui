/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Route = {
    active: boolean;
    channelName: string;
    externalReceiveTopicName: string;
    inactiveResponseType: Route.inactiveResponseType;
};

export namespace Route {

    export enum inactiveResponseType {
        ERROR = 'ERROR',
        IGNORE = 'IGNORE',
    }


}
