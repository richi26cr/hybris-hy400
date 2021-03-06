import * as angular from 'angular';
declare module 'smarteditcontainer' {
// ******************************************************* 
// This file is automatically generated 
// Do not modify this file -- YOUR CHANGES WILL BE ERASED! 
// ******************************************************* 
export * from './topToolbars';

export * from './toolbarItemContext/toolbarItemContextModule';

/// <reference types="angular" />
/**
 * Component toolbarItemContext that is responsible for displaying the context for the selected item.
 */
export const toolbarItemContext: angular.IComponentOptions;




export * from './services';
export * from './components';


/**
 * @ngdoc overview
 * @name administration
 *
 * @description
 * # The administration module
 *
 * The administration module provides services to display and manage configurations
 * that point to web service and the value property contains the URI of the web service or data.
 *
 */
export const AdministrationModule: string;





/// <reference types="angular" />
/// <reference types="angular-mocks" />
/// <reference types="lodash" />





/** @ngInject */
export class BootstrapService {
    
    
    
    
    
    
    
    
    
    constructor(configurationExtractorService: ConfigurationExtractorService, sharedDataService: ISharedDataService, injectJS: any, $log: angular.ILogService, $http: angular.IHttpService, $q: angular.IQService, WHITE_LISTED_STOREFRONTS_CONFIGURATION_KEY: string, smartEditBootstrapGateway: any, lodash: lo.LoDashStatic);
    bootstrapSmartEditContainer(): void;
    addDependencyToSmartEditContainer(app: string): void;
    bootstrapContainerModules(configurations: ConfigurationObject): void;
    bootstrapSEApp(configurations: ConfigurationObject): angular.IPromise<void>;
    
    
}

/// <reference types="lodash" />



/** @ngInject */
export class ConfigurationExtractorService {
    
    constructor(lodash: lo.LoDashStatic);
    extractSEContainerModules(configurations: ConfigurationObject): ConfigurationModules;
    extractSEModules(configurations: ConfigurationObject): ConfigurationModules;
    
}

export * from './BootstrapService';
export * from './ConfigurationExtractorService';



/// <reference types="lodash" />


/**
 * Polyfill for HTML5 Drag and Drop in a cross-origin setup.
 * Most browsers (except Firefox) do not allow on-page drag-and-drop from non-same-origin frames.
 * This service is a polyfill to allow it, by listening the 'dragover' event over a sibling <div> of the iframe and sending the mouse position to the inner frame.
 * The inner frame 'DragAndDropCrossOriginInner' will use document.elementFromPoint (or isPointOverElement helper function for IE only) to determine the current hovered element and then dispatch drag events onto elligible droppable elements.
 *
 * More information about security restrictions:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=251718
 * https://bugs.chromium.org/p/chromium/issues/detail?id=59081
 * https://www.infosecurity-magazine.com/news/new-google-chrome-clickjacking-vulnerability/
 * https://bugzilla.mozilla.org/show_bug.cgi?id=605991
 */
/** @ngInject */
export class DragAndDropCrossOrigin {
    
    
    
    
    
    
    
    
    constructor(yjQuery: JQueryStatic, lodash: lo.LoDashStatic, crossFrameEventService: any, iFrameManager: any, SEND_MOUSE_POSITION_THROTTLE: number, SMARTEDIT_DRAG_AND_DROP_EVENTS: IDragAndDropEvents, SMARTEDIT_IFRAME_DRAG_AREA: string);
    initialize(): void;
    
    
    
    
    
    
    
}

export * from './bootstrap';
export * from './notifications';
export * from './DelegateRestService';
export * from './DragAndDropCrossOriginOuter';
export * from './perspectives/FeatureServiceOuter';
export * from './PageInfoServiceOuter';
export * from './PreviewServiceOuter';
export * from './ProductService';
export * from './perspectives/PerspectiveServiceOuter';
export * from './RestServiceFactory';
export * from './SharedDataService';
export * from './SiteService';
export * from './StorageService';

export * from './UrlService';
export * from './WaitDialogService';
export * from './smarteditServicesModule';

export * from './NotificationService';
export * from './NotificationMouseLeaveDetectionService';

/// <reference types="angular" />


/**
 * @ngdoc service
 * @name smarteditServicesModule.service:NotificationMouseLeaveDetectionService
 * @extends {smarteditServicesModule.interface:INotificationMouseLeaveDetectionService}
 * @description
 * This service makes it possible to track the mouse position to detect when it leaves the notification panel.
 * It is solely meant to be used with the notificationService.
 */
export class NotificationMouseLeaveDetectionService extends INotificationMouseLeaveDetectionService {
    
    
    
    
    constructor(gatewayProxy: any, $document: any, $q: angular.IQService);
    startDetection(outerBounds: IBound, innerBounds: IBound, callback: () => any): angular.IPromise<void>;
    stopDetection(): angular.IPromise<void>;
    
    
    
    
}

/// <reference types="lodash" />
/// <reference types="angular" />



/**
 * @ngdoc service
 * @name smarteditServicesModule.service:NotificationService
 *
 * @description
 * The notification service is used to display visual cues to inform the user of the state of the application.
 */
export class NotificationService implements INotificationService {
    
    
    
    
    
    constructor(gatewayProxy: any, lodash: lo.LoDashStatic, systemEventService: any, EVENT_NOTIFICATION_CHANGED: string, $q: angular.IQService);
    pushNotification(configuration: IConfiguration): angular.IPromise<void>;
    removeNotification(notificationId: string): angular.IPromise<void>;
    removeAllNotifications(): angular.IPromise<void>;
    isNotificationDisplayed(notificationId: string): boolean;
    getNotification(notificationId: string): IConfiguration;
    getNotifications(): IConfiguration[];
    
}



/// <reference types="lodash" />
/// <reference types="angular" />



export class FeatureService extends IFeatureService {
    
    
    
    constructor(gatewayProxy: any, toolbarServiceFactory: any, lodash: lo.LoDashStatic, cloneableUtils: CloneableUtils, $q: angular.IQService);
    getFeatureProperty(featureKey: string, propertyName: keyof InternalFeature): angular.IPromise<string | string[] | (() => void)>;
    getFeatureKeys(): string[];
    addToolbarItem(configuration: IToolbarItem): angular.IPromise<void>;
    
    
}

/// <reference types="angular" />
/// <reference types="angular-mocks" />



export class PerspectiveService extends IPerspectiveService {
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    constructor($log: angular.ILogService, $q: angular.IQService, isBlank: any, uniqueArray: any, systemEventService: any, featureService: FeatureService, gatewayProxy: any, iFrameManager: any, storageService: StorageService, crossFrameEventService: any, NONE_PERSPECTIVE: string, ALL_PERSPECTIVE: string, EVENTS: any, EVENT_PERSPECTIVE_CHANGED: string, EVENT_PERSPECTIVE_UNLOADING: string, EVENT_PERSPECTIVE_ADDED: string, EVENT_PERSPECTIVE_REFRESHED: string, permissionService: any);
    register(configuration: IPerspective): angular.IPromise<void>;
    getPerspectives(): angular.IPromise<IPerspective[]>;
    hasActivePerspective(): angular.IPromise<boolean>;
    getActivePerspective(): IPerspective;
    isEmptyPerspectiveActive(): angular.IPromise<boolean>;
    switchTo(key: string): angular.IPromise<void>;
    selectDefault(): angular.IPromise<void>;
    refreshPerspective(): angular.IPromise<void>;
    /**
     * Hopefully this will be refactored at some point, this is basicaly a confusing way of change the code
     * execution path in _retrievePerspective() after deep linking in the storefront.
     * It makes it so that the features are re-enabled without being disabled, but the code is not obvious.
     */
    clearActivePerspective(): void;
    
    
    
    
    
    
    /**
     * Takes care of sending EVENT_PERSPECTIVE_UNLOADING when perspectives change.
     *
     * This function tracks the "key" argument in calls to switchTo(..) function in order to detect when a
     * perspective is being switched. Due to the implementation of clearActivePerspective() it is not really
     * clear in switchTo(...) when a perspective is actually being changed, or just reloaded.
     */
    
    
    
    
    
    
}

/// <reference types="angular" />
/// <reference types="angular-mocks" />
/// <reference types="lodash" />



export class PreviewService extends IPreviewService {
    
    
    
    
    
    
    
    
    
    constructor($log: angular.ILogService, $q: angular.IQService, loadConfigManagerService: any, PREVIEW_RESOURCE_URI: string, restServiceFactory: IRestServiceFactory, lodash: lo.LoDashStatic, getAbsoluteURL: (domain: string, url: string) => string, gatewayProxy: any, urlUtils: UrlUtils);
    createPreview(previewData: IPreviewData): angular.IPromise<IPreviewResponse>;
    getResourcePathFromPreviewUrl(previewUrl: string): angular.IPromise<string>;
    
    
}

/// <reference types="angular" />

/**
 * @ngdoc interface
 * @name smarteditServicesModule.interface:IProductSearch
 * @description
 * Interface used by {@link smarteditServicesModule.service:ProductService ProductService} for product search
 */
export interface IProductSearch {
    /**
     * @ngdoc property
     * @name catalogId
     * @propertyOf smarteditServicesModule.interface:IProductSearch
     * @description id of the catalog
     */
    catalogId: string;
    /**
     * @ngdoc property
     * @name catalogVersion
     * @propertyOf smarteditServicesModule.interface:IProductSearch
     * @description version of the catalog
     */
    catalogVersion: string;
}
/**
 * @ngdoc service
 * @name smarteditServicesModule.service:ProductService
 * @description
 * The ProductService provides is used to access products from the product catalog
 */
/** @ngInject */
export class ProductService {
    
    
    
    constructor(restServiceFactory: IRestServiceFactory, PRODUCT_RESOURCE_API: string, PRODUCT_LIST_RESOURCE_API: string);
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:ProductService#getProductById
     * @methodOf smarteditServicesModule.service:ProductService
     * @description
     * Returns a Product that matches the given siteUID and productUID
     * @param {String} siteUID unique site ID
     * @param {String} productUID unique product ID
     * @returns {Object} A {@link https://docs.angularjs.org/api/ng/service/$q promise} of IProduct
     */
    getProductById(siteUID: string, productUID: string): angular.IPromise<IProduct>;
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:ProductService#findProducts
     * @methodOf smarteditServicesModule.service:ProductService
     * @description
     * Returns a list of Products from the catalog that match the given mask
     * @param {Object} productSearch {@link smarteditServicesModule.interface:IProductSearch productSearch} catalog search criteria
     * @param {Object} pageable  object
     * @returns {Object} A {@link https://docs.angularjs.org/api/ng/service/$q promise} of Page<IProduct>
     *
     */
    findProducts(productSearch: IProductSearch, pageable: Pageable): angular.IPromise<Page<IProduct>> | Error;
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:ProductService#getProducts
     * @methodOf smarteditServicesModule.service:ProductService
     * @description
     * Returns a list of Products from the catalog that match the given mask
     * deprecated since 6.7
     * @param {Object} producrtSearch {@link smarteditServicesModule.interface:IProductSearch productSearch} catalog search criteria
     * @param {String} mask text to match
     * @param {Number} pageSize how many products per page. This parameter is optional
     * @param {Number} currentPage which page to return. This parameter is optional
     * @returns {Object} A {@link https://docs.angularjs.org/api/ng/service/$q promise} of Page<IProduct>
     * @deprecated since 6.7
     */
    getProducts(productSearch: IProductSearch, _mask: string, _pageSize: number, _currentPage: number): angular.IPromise<Page<IProduct>> | Error;
    
}



/// <reference types="angular" />

/**
 * @ngdoc service
 * @name smarteditServicesModule.service:SiteService
 *
 * @description
 * The Site Service fetches all sites configured on the hybris platform using REST calls to the cmswebservices sites API.
 */
/** @ngInject */
export class SiteService {
    
    
    
    constructor(restServiceFactory: IRestServiceFactory, systemEventService: any, operationContextService: any, OPERATION_CONTEXT: any, SITES_RESOURCE_URI: string, EVENTS: any, $q: angular.IQService);
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:SiteService#getSites
     * @methodOf smarteditServicesModule.service:SiteService
     *
     * @description
     * Fetches a list of sites configured on the hybris platform. The list of sites fetched using REST calls through
     * the cmswebservices sites API.
     *
     * @returns {Object} A {@link https://docs.angularjs.org/api/ng/service/$q promise} of {@link smarteditServicesModule.interface:ISite ISite} array.
     */
    getSites(): angular.IPromise<ISite[]>;
    /**
     * @ngdoc method
     * @name smarteditServicesModule.service:SiteService#getSiteById
     * @methodOf smarteditServicesModule.service:SiteService
     *
     * @description
     * Fetches a site, configured on the hybris platform, by its uid. The sites fetched using REST calls through
     * cmswebservices sites API.
     * @param {String} uid unique site ID
     * @returns {object} A {@link https://docs.angularjs.org/api/ng/service/$q promise} of {@link smarteditServicesModule.interface:ISite ISite}.
     */
    getSiteById(uid: string): angular.IPromise<ISite>;
    
}

/// <reference types="angular" />
/// <reference types="angular-resource" />

/**
 * @ngdoc overview
 * @name smarteditServicesModule
 *
 * @description
 * Module containing all the services shared within the smartedit container application
 */
export const smarteditServicesModule: angular.IModule;

/// <reference types="lodash" />
/// <reference types="angular" />
/// <reference types="angular-resource" />
/// <reference types="angular-cookies" />
/// <reference types="angular-mocks" />



export interface ISessionAuth {
    [index: string]: IAuthToken | any;
}
export class StorageService extends IStorageService {
    
    
    
    
    
    
    
    
    constructor(gatewayProxy: any, lodash: lo.LoDashStatic, $q: angular.IQService, $injector: angular.auto.IInjectorService, $cookies: angular.cookies.ICookiesService, $window: ng.IWindowService, $log: angular.ILogService);
    getSessionService(): any;
    isInitialized(): angular.IPromise<boolean>;
    storePrincipalIdentifier(principalUID: string): angular.IPromise<void>;
    removePrincipalIdentifier(): angular.IPromise<void>;
    getPrincipalIdentifier(): angular.IPromise<string>;
    storeAuthToken(authURI: string, auth: IAuthToken): angular.IPromise<void>;
    getAuthToken(authURI: string): angular.IPromise<IAuthToken>;
    removeAuthToken(authURI: string): angular.IPromise<void>;
    removeAllAuthTokens(): angular.IPromise<void>;
    getValueFromCookie(cookieName: string, isEncoded: boolean): angular.IPromise<any>;
    getAuthTokens(): ISessionAuth;
    putValueInCookie(cookieName: string, value: any, encode: boolean): void;
    setItem(key: string, value: any): angular.IPromise<void>;
    getItem(key: string): angular.IPromise<any>;
    
    
    
    
}




export const smarteditContainerModule: string;

}