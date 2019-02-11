export default class InitState {
  constructor(vm) {
    this.vm = vm;
    this._run();
  }

  _initData() {
    let _this = this;

    let h = {
      get(t, k) {
        // 以 _ 开头的变量不允许访问
        if (/^_(\S+)/.test(k)) {
          throw new Error(`Can't get private key named <${k}>`);
        } else {
          if (t[k] !== null && t[k] !== undefined) {
            return t[k];
          } else if (
            (t[k] === null || t[k] === undefined) &&
            (_this.vm.$data[k] !== null && _this.vm.$data[k] !== undefined)
          ) {
            return _this.vm.$data[k];
          } else {
            throw new ReferenceError(
              `Can't get a key named <${k}> which is not exsist`
            );
          }
        }
      },
      set(t, k, v) {
        if (/^_(\S+)/.test(k)) {
          throw new Error(`Can't set private key named <${k}>`);
        } else {
          if (t[k] !== v) {
            if (typeof v === 'function') {
              t[k] = v;
              return true;
            } else {
              if (
                (t[k] === null || t[k] === undefined) &&
                (_this.vm.$data[k] !== null && _this.vm.$data[k] !== undefined)
              ) {
                _this.vm.$data[k] = v;
                return true;
              } else {
                throw new ReferenceError(
                  `Can't set $data's key named <${k}> which not exsis`
                );
              }
            }
          }
        }
      }
    };

    this.vm = new Proxy(this.vm, h);
  }

  _initMethods() {
    if (typeof this.vm.$methods === 'object') {
      for (let k in this.vm.$methods) {
        this.vm[k] = this.vm.$methods[k].bind(this.vm);
      }
    }
  }

  _run() {
    this._initData();
    this._initMethods();
    console.log(22222, this.vm);
  }
};