
import{observable, action} from 'mobx';
export/*@ngInject*/ function myServiceStoreFactory(ServerApi) {
 class MyService {

@observable tweets;


constructor(){
  this.ServerApi = ServerApi;
}

@action
getDataByUrl(query) {

  return this.ServerApi.get(`https://aalibaabaa-twitter-api.herokuapp.com/api/twitter/search/${query}`)
.then((response)=>{
  //console.log(response.statuses);
  this.tweets = response.data.statuses;
  console.log(this.tweets);
//  debugger;
})
}
}
return new MyService();
}
