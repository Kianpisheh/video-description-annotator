(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{43:function(e,t,n){},44:function(e,t){},57:function(e,t,n){},58:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),s=n(16),c=n.n(s),a=(n(43),n(15)),o=n(11),l=n(12),d=n(14),u=n(13),h=(n(30),n(37)),p=n(6),g=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.player=Object(h.a)(this.videoNode,this.props,(function(){console.log("onPlayerReady",this)}))}},{key:"componentWillUnmount",value:function(){this.player&&this.player.dispose()}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{"data-vjs-player":!0,children:Object(p.jsx)("video",{id:"video-player",ref:function(t){return e.videoNode=t},className:"video-js"})})}}]),n}(r.a.Component),b=n(38),f=n(9),v=n(7),j=n(8),m=(n(57),n.p+"static/media/close_btn.0eb860d3.svg"),O=n.p+"static/media/indent_btn.52b1b034.svg",y=n.p+"static/media/outdent_btn.a8591ca3.svg",x=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).textInputRef=r.a.createRef(),i}return Object(l.a)(n,[{key:"render",value:function(){var e,t=this,n=this.getConfig(this.props.item);return Object(p.jsxs)("div",{className:"description-item-div",id:"description-item_"+this.props.id.toString(),style:n.itemDivStyle,children:[Object(p.jsx)("input",(e={className:"input-text",id:"description-text_"+this.props.id.toString()},Object(j.a)(e,"className","description-text"),Object(j.a)(e,"ref",this.textInputRef),Object(j.a)(e,"type","text"),Object(j.a)(e,"placeholder","type here..."),Object(j.a)(e,"maxLength","30"),Object(j.a)(e,"size","30"),Object(j.a)(e,"autoComplete","off"),Object(j.a)(e,"draggable",!0),Object(j.a)(e,"blur",n.blur),Object(j.a)(e,"focus",n.focus),Object(j.a)(e,"autoFocus",n.autofocus),Object(j.a)(e,"readOnly",n.readOnly),Object(j.a)(e,"style",n.style),Object(j.a)(e,"onClick",(function(e){return t.props.onSingleClick(t.props.id,t.textInputRef.current.value,e)})),Object(j.a)(e,"onKeyDown",(function(e){return t.props.onKeyPress(t.props.id,t.textInputRef.current.value,e)})),Object(j.a)(e,"onBlur",(function(){return t.props.onBlur(t.props.id,t.textInputRef.current.value)})),e),this.props.id),Object(p.jsxs)("div",{className:"step-btns-div",children:[Object(p.jsx)("button",{className:"outdent-btn",id:"outdent_btn_"+this.props.id.toString(),children:Object(p.jsx)("img",{className:"indentation-btn-img",src:y})}),Object(p.jsx)("button",{className:"indent-btn",id:"indent_btn_"+this.props.id.toString(),children:Object(p.jsx)("img",{className:"indentation-btn-img",src:O})}),Object(p.jsx)("button",{className:"close-btn",id:"indent_btn_"+this.props.id.toString(),children:Object(p.jsx)("img",{className:"close-btn-img",src:m})})]})]})}},{key:"componentDidUpdate",value:function(){this.textInputRef.current.value=this.props.item.text,"writing"===this.props.item.mode?this.textInputRef.current.focus():this.textInputRef.current.blur()}},{key:"componentDidMount",value:function(){this.textInputRef.current.value=this.props.item.text,"writing"===this.props.item.mode?this.textInputRef.current.focus():this.textInputRef.current.blur()}},{key:"getConfig",value:function(e){var t=e.mode,n=e.level,i={},r={},s="false",c="true",a=!0,o=!1;return"writing"===t?i={cursor:"text"}:"not_writing"===t&&(i={cursor:"pointer"},s="true",c="false",o=!0,a=!1),i.fontSize=17,r.marginLeft=0,r.width=470,r.height=45,2===n?(i.fontSize=16,r.marginLeft=60,r.width=420,r.height=40):3===n&&(i.fontSize=15,r.marginLeft=110,r.width=395,r.height=35),{readOnly:o,style:i,focus:c,blur:s,autofocus:a,itemDivStyle:r}}}]),n}(r.a.Component),S=(n(58),n(21)),k=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).counter=0,i.state={descriptions:[{key:0,mode:"writing",level:1,selected:!0,text:""}]},i.counter+=1,i.setModeByKey=i.setModeByKey.bind(Object(v.a)(i)),i.getMode=i.getMode.bind(Object(v.a)(i)),i.addStepAfter=i.addStepAfter.bind(Object(v.a)(i)),i.removeWritingStep=i.removeWritingStep.bind(Object(v.a)(i)),i.getSelected=i.getSelected.bind(Object(v.a)(i)),i.getWritingStep=i.getWritingStep.bind(Object(v.a)(i)),i.deselectAll=i.deselectAll.bind(Object(v.a)(i)),i.getIndex=i.getIndex.bind(Object(v.a)(i)),i.getWritingIndex=i.getWritingIndex.bind(Object(v.a)(i)),i.removeItem=i.removeItem.bind(Object(v.a)(i)),i.updateDescendents=i.updateDescendents.bind(Object(v.a)(i)),i.getDescendents=i.getDescendents.bind(Object(v.a)(i)),i.deleteItems=i.deleteItems.bind(Object(v.a)(i)),i.getPrevSibling=i.getPrevSibling.bind(Object(v.a)(i)),i.groupDescriptions=i.groupDescriptions.bind(Object(v.a)(i)),i.handleSingleClick=i.handleSingleClick.bind(Object(v.a)(i)),i.handleBlur=i.handleBlur.bind(Object(v.a)(i)),i.handleKeyAction=i.handleKeyAction.bind(Object(v.a)(i)),i.handleDragEnd=i.handleDragEnd.bind(Object(v.a)(i)),i}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.groupDescriptions(Object(f.a)(this.state.descriptions)).map((function(t,n){return Object(p.jsx)(S.b,{draggableId:n.toString(),index:n,children:function(i){return Object(p.jsx)("div",Object(a.a)(Object(a.a)(Object(a.a)({id:n.toString(),className:"step-div"},i.draggableProps),i.dragHandleProps),{},{ref:i.innerRef,children:t.map((function(t,n){return Object(p.jsx)(x,{id:t.key.toString(),onSingleClick:e.handleSingleClick,onDoubleClick:e.handleDoubleClick,onBlur:e.handleBlur,onKeyPress:e.handleKeyAction,item:t},t.key.toString())}))}),n.toString())}},n.toString())}));return Object(p.jsx)(S.a,{onDragEnd:this.handleDragEnd,children:Object(p.jsx)(S.c,{droppableId:"description-pane-droppable",children:function(e){return Object(p.jsxs)("div",Object(a.a)(Object(a.a)({id:"description-pane-container",ref:e.innerRef},e.droppableProps),{},{children:[t,e.placeholder]}))}})})}},{key:"groupDescriptions",value:function(e){for(var t=[],n=[],i=0;i<e.length;i++)1===e[i].level?(n.length&&t.push(n),n=[e[i]]):n.push(e[i]),i===e.length-1&&n.length&&t.push(n);return t}},{key:"handleDragEnd",value:function(e){if(null!=e.destination&&e.destination.index!==e.source.index){var t=Object(f.a)(this.state.descriptions),n=e.source.index,i=e.destination.index,r=this.groupDescriptions(t),s=i>n?1:0,c=i>n?0:1;r.splice(i+s,0,r[n]),r.splice(n+c,1),this.setState({descriptions:r.flat()})}}},{key:"handleSingleClick",value:function(e,t){var n=Object(f.a)(this.state.descriptions);if(""!==t){var i=this.getIndex(n,e,0),r=this.getWritingIndex(n);r>=0&&(n[r].mode="not_writing"),n[i].mode="writing",(n=this.deselectAll(n))[i].selected=!0,this.setState({descriptions:n})}}},{key:"handleBlur",value:function(e,t){var n=Object(f.a)(this.state.descriptions);if(""!==t){var i=this.getIndex(n,e,0);n[i].mode="not_writing",n[i].text=t}else""===t&&n.length>1&&(n=this.removeWritingStep(n));this.setState({descriptions:n})}},{key:"handleKeyAction",value:function(e,t,n){var i=Object(f.a)(this.state.descriptions);if(46===n.which){var r=null;if(i[r=null===e?this.getSelected(i):this.getIndex(i,e,0)].selected&&i.length>=2){i=this.deselectAll(i);var s=this.getDescendents(i,r);if(0===r)i[r+s.length].selected=!0;else{var c=this.getPrevSibling(i,r),a=1;if(null!=c)a=this.getDescendents(i,c).length;i[r-a].selected=!0}s.length<i.length&&(i=this.deleteItems(i,s),this.setState({descriptions:i}))}}else if(13===n.which&&""!==t){var o=this.getMode(i,e,0),l=this.getIndex(i,e,0),d=l;if("writing"===o||"not_writing"===o&&i[l].selected){i[l].mode="not_writing",i[l].text=t,i=this.deselectAll(i);var u=this.addStepAfter(i,e,"writing",null),h=Object(b.a)(u,2);(i=h[0])[d=h[1]].selected=!0,i[d].mode="writing",this.setState({descriptions:i})}}else if(9===n.which){n.preventDefault();var p=this.getIndex(i,e,0);if(p>0){var g=this.getDescendents(i,p);n.shiftKey?i[p].level>=2&&(i[p].level-=1,i=this.updateDescendents(i,g,"level_decrease"),this.setState({descriptions:i})):"writing"===i[p].mode&&i.length>1&&i[p-1].level>=i[p].level&&i[p].level<=2&&(i[p].level+=1,i=this.updateDescendents(i,g,"level_increase"),this.setState({descriptions:i}))}}else if(40===n.which){i=Object(f.a)(this.state.descriptions);var v=this.getIndex(i,e,0);if(v===i.length-1)return void this.setState({descriptions:i});""!==t?(i[v].text=t,i[v].selected=!1,i[v].mode="not_writing",i[v+1].selected=!0,i[v+1].mode="writing"):((i=this.removeItem(i,v))[v].selected=!0,i[v].mode="writing"),this.setState({descriptions:i})}else if(38===n.which){i=Object(f.a)(this.state.descriptions);var j=this.getIndex(i,e,0);if(0===j)return void this.setState({descriptions:i});""!==t?(i[j].text=t,i[j].selected=!1,i[j].mode="not_writing",i[j-1].selected=!0,i[j-1].mode="writing"):((i=this.removeItem(i,j))[j-1].selected=!0,i[j-1].mode="writing"),this.setState({descriptions:i})}else if(40===n.which||38===n.which){i=Object(f.a)(this.state.descriptions);var m=this.getIndex(i,e,0);if(m===i.length-1&&40===n.which)return;if(0===m&&38===n.which)return;var O=!1;if(""===t){if(!(i.length>1))return;i=this.removeItem(i,m),O=!0}else i[m].text=t,i[m].selected=!1,i[m].mode="not_writing";var y=m;40===n.which?!O&&m<i.length-1&&(y=m+1):m>0&&(y=m-1),(i=this.deselectAll(i))[y].selected=!0,i[y].mode="writing",this.setState({descriptions:i})}}},{key:"getIndex",value:function(e,t,n){var i=Object(f.a)(e).map((function(e){return e.key})).indexOf(parseInt(t));return i>=0?i+n:-1}},{key:"getWritingIndex",value:function(e){for(var t=0;t<e.length;t++)if("writing"===e[t].mode)return t;return-1}},{key:"setModeByKey",value:function(e,t,n){var i=Object(f.a)(e),r=i.map((function(e){return e.key})).indexOf(parseInt(t));return r>=0?i[r].mode=n:console.log("step description does not exist"),i}},{key:"getMode",value:function(e,t,n){var i=Object(f.a)(e),r=i.map((function(e){return e.key})).indexOf(parseInt(t));if(void 0!==i[r+n])return i[r+n].mode}},{key:"getSelected",value:function(e){for(var t=0;t<e.length;t++)if(e[t].selected)return t;return-1}},{key:"getWritingStep",value:function(e){for(var t=0;t<e.length;t++)if("writing"===e[t].mode)return t;return-1}},{key:"deselectAll",value:function(e){for(var t=0;t<e.length;t++)e[t].selected&&(e[t].selected=!1);return e}},{key:"addStepAfter",value:function(e,t,n,i){var r=Object(f.a)(e),s=r.map((function(e){return e.key})).indexOf(parseInt(t)),c=i;null===i&&(c=r[s].level);var a=this.getDescendents(r,s),o=a[a.length-1]+1;return r.splice(o,0,{key:this.counter,mode:n,level:c,selected:!0,text:""}),this.counter+=1,[r,o]}},{key:"removeWritingStep",value:function(e){for(var t=Object(f.a)(e),n=Object(f.a)(t),i=1;i<t.length;i++)if("writing"===t[i].mode)return n.splice(i,1),n;return console.log("Didn't find the item, to remove"),n}},{key:"removeItem",value:function(e,t){return e.splice(t,1),e}},{key:"getDescendents",value:function(e,t){for(var n=[t],i=e[t].level,r=t+1;r<e.length&&e[r].level>i;r++)n.push(r);return n}},{key:"updateDescendents",value:function(e,t,n){for(var i=1;i<t.length;i++)"level_increase"===n?e[t[i]].level+=1:"level_decrease"===n&&(e[t[i]].level-=1);return e}},{key:"deleteItems",value:function(e,t){var n=[];return e.forEach((function(e,i){t.includes(i)||n.push(e)})),n}},{key:"getPrevSibling",value:function(e,t){for(var n=t-1;n>0;n--){if(e[n].level<e[t].level)return null;if(e[t].level===e[n].level)return n}return null}},{key:"saveUserData",value:function(e,t){}}]),n}(r.a.Component),I=(n(63),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{id:"main-container",children:[Object(p.jsx)("div",{id:"player-container",children:Object(p.jsx)(g,Object(a.a)({id:"video-player"},{controls:!0,preload:"auto",autoplay:!1,height:400,width:600,controlBar:{fullscreenToggle:!1},sources:[{src:"//vjs.zencdn.net/v/oceans.mp4",type:"video/mp4"}]}))}),Object(p.jsx)(k,{id:"description-pane"})]})}},{key:"componentDidMount",value:function(){}}]),n}(r.a.Component)),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),s(e),c(e)}))};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root")),w()}},[[64,1,2]]]);
//# sourceMappingURL=main.b30e3bdf.chunk.js.map