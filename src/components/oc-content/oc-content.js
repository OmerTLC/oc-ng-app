const template = require('./oc-content.html');
const OCstyle = require('./oc-content.css');
import {autorun} from 'ng-mobx';


class OcContentController {
// @ngInject
  constructor($scope, MyServiceStore) {
    autorun($scope,
    ()=>{
        this.tweets = MyServiceStore.tweets;
        this.tweetQuery = MyServiceStore.tweetQuery;
        this.title = MyServiceStore.title;
        console.log(this.tweetQuery);

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
