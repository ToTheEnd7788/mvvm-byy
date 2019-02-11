import Watcher from './_Watcher';
import Helper from './_Helper'

export default class Compiler {
  constructor(vm) {
    this._watcher = new Watcher(vm);
    this._helper = new Helper();
  }

  _compiler(node) {
    if (node.nodeType === 3) {
      let regExp = /\{\{(.*)\}\}/;

      if (regExp.test(node.nodeValue)) {
        this._watcher._addSub(RegExp.$1.trim(), {
          node,
          dirs: []
        });

        this._watcher._update(RegExp.$1.trim())
      }
    } else if (node.nodeType === 1) {
      let attrs = node.attributes;
      for (let k in attrs) {
        if (/[\d]+/.test(k)) {
          if (this._helper._isDir(attrs[k].nodeName)) {
            this._watcher._addSub(attrs[k].nodeValue, {
              node,
              dirs: [attrs[k]]
            });

            this._watcher._update(attrs[k].nodeValue);
          }
        }
      }

      if (node.childNodes.length > 0) {
        node.appendChild(this._mount(node))
      };
    }
  }

  _mount(node) {
    let flag = document.createDocumentFragment(),
      child;
    
    while (child = node.firstChild) {
      this._compiler(child);
      flag.appendChild(child);
    }

    return flag;
  }
};