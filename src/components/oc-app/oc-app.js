const template = require('./oc-app.html');

class AppController {

  constructor() {
    this.name = 'Omer Cohen';
  }
}

export const app = {
  bindings: {},
    controller: AppController,
    controllerAs: 'OCApp',
    template
};
