
import{observable, action} from 'mobx';
export/*@ngInject*/ function myServiceStoreFactory(ServerApi) {
 class MyService {

@observable title;
@observable tweets;

constructor(){
  this.ServerApi = ServerApi;
}

@action

setTitle(title){
  this.title=title;
}
getDataByTweet(query) {
this.tweetQuery =query;
  return this.ServerApi.get(`https://aalibaabaa-twitter-api.herokuapp.com/api/twitter/search/${query}`)
.then((response)=>{

      this.tweets = response.data.statuses;

    //  console.log(this.tweets);
//  debugger;
  })
}
}
return new MyService();
}
