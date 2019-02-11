import Compiler from './_Compiler';
import InitState from './_initState';

export default class Byy {
  constructor(opt) {
    this.$data = null;
    this.$el = null;
    this.$methods = opt.methods;
    this._el = document.querySelector(opt.el),
    this._data = opt.data;
    this._watcher;
    this._compiler;
    this._setterName = '';
    this._init();
  }

  _proxyObserver(data) {
    let _this = this;

    let h = {
      get(t, k, r) {
        console.log('$data-get', t, k);
        _this._setterName += `.${k}`;
        if (t[k] !== null && t[k] !== undefined) {
          if (typeof t[k] === 'object') {
            return _this._proxyObserver(t[k]);
          } else {
            _this._setterName = '';
            return Reflect.get(t, k, r);
          }
        } else {
          throw new ReferenceError(`Can't get property named <${k}>`);
        }
      },
      set(t, k, v, r) {
        _this._setterName += `.${k}`;

        if (t[k] !== v) {
          t[k] = v;
          _this._watcher._update(_this._setterName.substr(1));
        }

        _this._setterName = '';

        return Reflect.set(t, k, v, r);
      }
    };

    this.$data = new Proxy(data, h);
  }

  _init() {
    this._proxyObserver(this._data);
    new InitState(this);
    console.log(this);
    // this._compiler = new Compiler(this);
    // this._watcher = this._compiler.watcher;
    // this._el.appendChild(this._compiler._mount(this._el));

    // setTimeout(() => {
    //   this.data.dependencies.server.port = 9999;
    // }, 2000);
  }
}