const template = require('./oc-content.html');
import {autorun} from 'ng-mobx';

class OcContentController {
// @ngInject
  constructor($scope, MyServiceStore) {
    autorun($scope,
    ()=>{
        this.tweets = MyServiceStore.tweets;
        console.log(this.tweets);            

    })
  }

  $onInit(){
  }
}

export const ocContent = {
  bindings: {},
    controller: OcContentController,
    controllerAs: 'OcContent',
    template
};
