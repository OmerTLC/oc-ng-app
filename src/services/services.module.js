/**
 * Created by idannaim on 8/12/15.
 */
 import {myServiceStoreFactory} from './my-service.store';
import {ServiceStorage} from './serviceStorage';
import {ServerApi} from './Server-api';
export default angular.module('services.module', [])
.service('ServiceStorage',ServiceStorage)
.service('MyServiceStore',myServiceStoreFactory)
.service('ServerApi',ServerApi)
