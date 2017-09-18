export class ServerApi {
// @ngInject
constructor($http) {
  this.http = $http;
}

get(url){
  return this.http.get(url);
}
post(url, data) {
  return this.http.post(url, data);
}
put() {

}




}
