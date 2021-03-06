    export interface Meta {
        publisher: string;
        licence: string;
        documentation: string;
        version: string;
        comment: string;
        hasFormat: string[];
    }

    export interface LatestReading {
        ["@id"]: string;
        date: string;
        dateTime: Date;
        measure: string;
        value: number;
    }

    export interface Measures {
        ["@id"]: string;
        datumType: string;
        label: string;
        latestReading: LatestReading;
        localDatumMeasure: string;
        notation: string;
        parameter: string;
        parameterName: string;
        period: number;
        qualifier: string;
        station: string;
        stationReference: string;
        type: string[];
        unit: string;
        unitName: string;
        valueType: string;
    }

    export interface MaxOnRecord {
        ["@id"]: string;
        dateTime: Date;
        value: number;
    }

    export interface StageScale {
        ["@id"]: string;
        datum: number;
        maxOnRecord: MaxOnRecord;
        scaleMax: number;
    }

    export interface Items {
        ["@id"]: string;
        RLOIid: string;
        catchmentName: string;
        dateOpened: string;
        eaAreaName: string;
        eaRegionName: string;
        easting: number;
        gridReference: string;
        label: string;
        lat: number;
        long: number;
        measures: Measures;
        northing: number;
        notation: string;
        riverName: string;
        stageScale: StageScale;
        stationReference: string;
        status: string;
        statusDate: Date;
        town: string;
        type: string[];
        wiskiID: string;
    }

    export interface Station {
        ["@context"]: string;
        meta: Meta;
        items: Items;
    }



