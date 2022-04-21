interface ISystemConfig {
    applicationName: string;
    applicationUrl: string;
}

interface IRestConfig {
    apiUrl: string;
    apiUrlV2: string;
    mediaUrl: string;
    mediaUrlV2: string;
}

interface IFirebaseConfig {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
}

interface IExtraPagesConfig {
    name: string;
    url: string;
    type: string;
    state: boolean;
}

export interface IConfig {
    system: ISystemConfig;
    rest: IRestConfig;
    firebase: IFirebaseConfig;
    extraPages: IExtraPagesConfig;
    eAgmProcessingTimeout: number;
    cmSubDomain: string;
    securitySubDomain: string;
}