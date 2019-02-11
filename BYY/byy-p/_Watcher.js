import Helper from './_Helper';

export default class Watcher {
  constructor(vm) {
    this.vm = vm;
    this._subs = {};
    this._helper = new Helper();
  }

  _addSub(name, nodeInfo) {
    if (this._subs[name]) {
      
      let idx = this._subs[name].findIndex(sub => {
        return sub.node === nodeInfo.node;
      });

      if (idx > -1) {
        let tmpSubDirs = this._subs[name][idx].dirs
          ? (
            this._subs[name][idx].dirs.concat(nodeInfo.dirs) &&
            this._subs[name][idx].dirs
          ) : nodeInfo.dirs,

          tmpSub = Object.assign(this._subs[name][idx], {
            dirs: tmpSubDirs
          }),

          tmpSubList = this._subs[name];

          tmpSubList.splice(idx, 1, tmpSub);

        this._subs = Object.assign(this._subs, {
          [name]: tmpSubList
        });
      } else {
        this._subs[name].push(nodeInfo);
      }

    } else {
      this._subs[name] = [{
        node: nodeInfo.node,
        dirs: nodeInfo.dirs ? nodeInfo.dirs : []
      }];
    }
  }

  // b-bind:placeholder === :placeholder??????
  // b-on:click === @click
  // b-model
  // b-show
  // b-for
  _update(name) {
    let needUpdateList = this._subs[name];

    needUpdateList.forEach(item => {
      if (item.dirs.length > 0) {
        item.dirs.forEach(dir => {
          if (dir.nodeName === 'b-model') {
            item.node.value = this._getVal(name);
            item.node.removeAttribute(dir.nodeName);
            item.node.addEventListener('input', e => {
              this.vm[name] = e.target.value;
            });
          } else if (dir.nodeName === 'b-show') {
            item.node.style.visibility =
              this._getVal(name)
                ? 'visible'
                : 'hidden';
          } else if (this._helper._bind.test(dir.nodeName)) {
            if (/^[\S]*:(.+)$/.test(dir.nodeName)) {
              item.node[RegExp.$1] = this._getVal(name);
              item.node.removeAttribute(dir.nodeName);
            }
          } else if (this._helper._event.test(dir.nodeName)) {
            // let eventName = dir.nodeName.match(/(?<=(^v-on:)|(^@))(.+)$/g)[0];
            // item.node.addEventListener(eventName, (evt) => {
            //   this._getVal(name)();
            // });
            
          }
        });
      } else {
        item.node.nodeValue = this._getVal(name);
      }
    });
  }

  _getVal(name) {
    console.log(1111, name);
    let value = this.vm;

    name.split('.').forEach(level => {
      value = value[level];
    });

    return value;
  }
};