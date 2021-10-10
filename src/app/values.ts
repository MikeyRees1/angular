    export interface Meta {
        publisher: string;
        licence: string;
        documentation: string;
        version: string;
        comment: string;
        hasFormat: string[];
    }

    export interface Measure {
        ["@id"]: string;
        parameter: string;
        parameterName: string;
        period: number;
        qualifier: string;
        unitName: string;
    }

    export interface Item {
        ["@id"]: string;
        RLOIid: string;
        catchmentName: string;
        dateOpened: string;
        easting: number;
        gridReference: string;
        label: string;
        lat: number;
        long: number;
        measures: Measure[];
        northing: number;
        notation: string;
        riverName: string;
        stageScale: string;
        stationReference: string;
        status: string;
        town: string;
        wiskiID: string;
    }

    export interface RootObject {
        ["@context"]: string;
        meta: Meta;
        items: Item[];
    }

