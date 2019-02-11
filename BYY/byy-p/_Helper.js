export default class Helper {
  constructor() {
    this._event = /(^@\S+$)|(^v-on:\S+$)/;
    this._bind = /(^:\S+$)|(^v-bind:\S+$)/;
    this._loop = /^v-for$/;
    this._model = /^b-model$/;
    this._show = /^b-show$/
  }

  _isDir(attrName) {
    return this._bind.test(attrName) ||
      this._event.test(attrName) ||
      this._loop.test(attrName) ||
      this._model.test(attrName) ||
      this._show.test(attrName);
  }
};