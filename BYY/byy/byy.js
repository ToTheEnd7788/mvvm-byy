/* ****************************************************************************************************** */
class _Watcher {
  constructor(vm, node, name, nodeType) {
    _Dep.target = this;
    this.node = node;
    this.name = name;
    this.vm = vm;
    this.nodeType = nodeType;
    this._update();
    _Dep.target = null;
  }

  _update() {
    this._get();

    if (this.nodeType === 'text') {
      this.node.nodeValue = this.value;
    } else  if (this.nodeType === 'input') {
      this.node.value = this.value;
    }
  }

  _get() {
    this.value = this.vm[this.name];
  }
};

class _Dep {
  constructor() {
    this.subs = [];
  }

  _addSub(sub) {
    this.subs.push(sub);
  }

  _notify() {
    this.subs.forEach(sub => {
      sub._update();
    })
  }
};
/* ****************************************************************************************************** */

var Byy = class {
	constructor(opt) {
		this.data = opt.data || null;
    this.el = opt.el || '#app';

    this._init();
	}

  _observer(data) {
    if (data && typeof data === 'object') {
      Object.keys(data).forEach(key => {
        this._defineReactive(key, data[key]);
      });
    }
   }

  _defineReactive(key, val) {
    let dep = new _Dep();
    this._observer(val);


    Object.defineProperty(this, key, {
      enumerable: true,
      configurable: false,
      get() {
        if (_Dep.target) dep._addSub(_Dep.target);
        return val;
      },
      set(newVal) {
        if (newVal !== val) {
          val = newVal;
          dep._notify();
        }
      }
    });
  }

  _compiler(node) {
    // text node
    if (node.nodeType === 3) {
      let reg = /\{\{(.*)\}\}/,
        name;

      if (reg.test(node.nodeValue)) {
        name = RegExp.$1.trim();
        new _Watcher(this, node, name, 'text');
      }

    } else if (node.nodeType === 1) {
      // else: element node
      let attrs = node.attributes;

      for (let i = 0; i < attrs.length; i++) {
        if (attrs[i].nodeName === 'v-model') {
          name = attrs[i].nodeValue;

          node.addEventListener('input', (e) => {
            this[name] = e.target.value;
          });

          new _Watcher(this, node, name, 'input');

          node.removeAttribute('v-model');
        }
      }
    }
  }

  _componetToFragment(baseNode) {
    let fragMent = document.createDocumentFragment(),
      child;

    while (child = baseNode.firstChild) {
      this._compiler(child);
      fragMent.appendChild(child);
    }

    return fragMent;
  }

  _init() {
    this._observer(this.data);

    let dom = this._componetToFragment(document.querySelector(this.el));
    document.querySelector(this.el).appendChild(dom);

  }
};