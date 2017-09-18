import {app} from './oc-app/oc-app';
import {sidePanel} from './side-panel/side-panel';
import {ocContent} from './oc-content/oc-content';

export default angular.module('components.module', [])
.component('ocApp',app)
.component('ocSidePanel',sidePanel)
.component('ocContent',ocContent)
