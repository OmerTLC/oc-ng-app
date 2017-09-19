
const template = require('./side-panel.html');


class SidePanelController {
// @ngInject
  constructor(MyServiceStore, ServiceStorage) {
    this.MyServiceStore = MyServiceStore;
    this.ServiceStorage = ServiceStorage;
    this.urlList =[];

  }

  $onInit(){
    this.urlList = this.ServiceStorage.getItem("urlList")  || [];
    this.title = this.ServiceStorage.getItem("title");

  }

  getTweetData(tweetSearch){
    //var corsURL = `https://crossorigin.me/${item}`
    //alert(`I am an alert box! - This the item selected: ${tweetSearch}`);
    this.MyServiceStore.getDataByTweet(tweetSearch);
  }

  setTitle(title){
    this.MyServiceStore.setTitle(title);
    this.ServiceStorage.setItem("title", title);
  }

  getByUrl(url) {

    function isContainsIn(list, obj) {
        for (var i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return true;
            }
        }
        return false;
    }


  var isInList = isContainsIn(this.urlList, url);
  if (url) {
    isInList ? console.log('This item already exists'): this.urlList.push(url);
    this.ServiceStorage.setItem("urlList", this.urlList);
    }
    else{
      console.log('input tweets topic require');
    }
  }

  deleteUrl(key) {
    this.urlList = this.urlList.filter(item => item !== key)
    this.ServiceStorage.removeItem("urlList");
    this.ServiceStorage.setItem("urlList", this.urlList);
  }
}



export const sidePanel = {
  bindings: {},
    controller: SidePanelController,
    controllerAs: 'SidePanel',
    template
};
