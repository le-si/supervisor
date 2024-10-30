"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[3683],{79051:function(e,t,i){i.d(t,{d:function(){return n}});var n=function(e){return e.stopPropagation()}},54480:function(e,t,i){var n=i(22858).A,a=i(33994).A;i.a(e,function(){var e=n(a().mark((function e(n,o){var r,s,l,d,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i.d(t,{T:function(){return d}}),r=i(13265),s=i(94100),!(l=n([r])).then){e.next=12;break}return e.next=8,l;case 8:e.t1=e.sent,e.t0=(0,e.t1)(),e.next=13;break;case 12:e.t0=l;case 13:r=e.t0[0],d=function(e,t){try{var i,n;return null!==(i=null===(n=c(t))||void 0===n?void 0:n.of(e))&&void 0!==i?i:e}catch(a){return e}},c=(0,s.A)((function(e){return new Intl.DisplayNames(e.language,{type:"language",fallback:"code"})})),o(),e.next=22;break;case 19:e.prev=19,e.t2=e.catch(0),o(e.t2);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t,i){return e.apply(this,arguments)}}())},18409:function(e,t,i){i.d(t,{s:function(){return n}});var n=function(e,t){var i,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];var s=n&&!i;clearTimeout(i),i=window.setTimeout((function(){i=void 0,n||e.apply(void 0,o)}),t),s&&e.apply(void 0,o)};return a.cancel=function(){clearTimeout(i)},a}},10900:function(e,t,i){var n,a,o=i(64599),r=i(35806),s=i(71008),l=i(62193),d=i(2816),c=i(27927),u=(i(81027),i(50289)),h=i(29818);(0,c.A)([(0,h.EM)("ha-dialog-header")],(function(e,t){var i=function(t){function i(){var t;(0,s.A)(this,i);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=(0,l.A)(this,i,[].concat(a)),e(t),t}return(0,d.A)(i,t),(0,r.A)(i)}(t);return{F:i,d:[{kind:"method",key:"render",value:function(){return(0,u.qy)(n||(n=(0,o.A)([' <header class="header"> <div class="header-bar"> <section class="header-navigation-icon"> <slot name="navigationIcon"></slot> </section> <section class="header-content"> <div class="header-title"> <slot name="title"></slot> </div> <div class="header-subtitle"> <slot name="subtitle"></slot> </div> </section> <section class="header-action-items"> <slot name="actionItems"></slot> </section> </div> <slot></slot> </header> '])))}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,u.AH)(a||(a=(0,o.A)([":host{display:block}:host([show-border]){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.header-bar{display:flex;flex-direction:row;align-items:flex-start;padding:4px;box-sizing:border-box}.header-content{flex:1;padding:10px 4px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.header-title{font-size:22px;line-height:28px;font-weight:400}.header-subtitle{font-size:14px;line-height:20px;color:var(--secondary-text-color)}@media all and (min-width:450px) and (min-height:500px){.header-bar{padding:12px}}.header-navigation-icon{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}.header-action-items{flex:none;min-width:8px;height:100%;display:flex;flex-direction:row}"])))]}}]}}),u.WF)},77312:function(e,t,i){var n,a,o,r,s=i(33994),l=i(22858),d=i(64599),c=i(35806),u=i(71008),h=i(62193),v=i(2816),f=i(27927),p=i(35890),k=(i(81027),i(24500)),m=i(14691),g=i(50289),y=i(29818),x=i(18409),b=i(61441);i(4169),(0,f.A)([(0,y.EM)("ha-select")],(function(e,t){var i=function(t){function i(){var t;(0,u.A)(this,i);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=(0,h.A)(this,i,[].concat(a)),e(t),t}return(0,v.A)(i,t),(0,c.A)(i)}(t);return{F:i,d:[{kind:"field",decorators:[(0,y.MZ)({type:Boolean})],key:"icon",value:function(){return!1}},{kind:"field",decorators:[(0,y.MZ)({type:Boolean,reflect:!0})],key:"clearable",value:function(){return!1}},{kind:"method",key:"render",value:function(){return(0,g.qy)(n||(n=(0,d.A)([" "," "," "])),(0,p.A)(i,"render",this,3)([]),this.clearable&&!this.required&&!this.disabled&&this.value?(0,g.qy)(a||(a=(0,d.A)(['<ha-icon-button label="clear" @click="','" .path="','"></ha-icon-button>'])),this._clearValue,"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"):g.s6)}},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?(0,g.qy)(o||(o=(0,d.A)(['<span class="mdc-select__icon"><slot name="icon"></slot></span>']))):g.s6}},{kind:"method",key:"connectedCallback",value:function(){(0,p.A)(i,"connectedCallback",this,3)([]),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,p.A)(i,"disconnectedCallback",this,3)([]),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"_clearValue",value:function(){!this.disabled&&this.value&&(this.valueSetDirectly=!0,this.select(-1),this.mdcFoundation.handleChange())}},{kind:"field",key:"_translationsUpdated",value:function(){var e=this;return(0,x.s)((0,l.A)((0,s.A)().mark((function t(){return(0,s.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,b.E)();case 2:e.layoutOptions();case 3:case"end":return t.stop()}}),t)}))),500)}},{kind:"field",static:!0,key:"styles",value:function(){return[m.R,(0,g.AH)(r||(r=(0,d.A)([":host([clearable]){position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}.mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,0px)}:host([clearable]) .mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,12px)}ha-icon-button{position:absolute;top:10px;right:28px;--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--secondary-text-color);inset-inline-start:initial;inset-inline-end:28px;direction:var(--direction)}"])))]}}]}}),k.o)},82083:function(e,t,i){var n,a,o,r,s=i(33994),l=i(22858),d=i(64599),c=i(35806),u=i(71008),h=i(62193),v=i(2816),f=i(27927),p=i(35890),k=(i(81027),i(44124),i(97741),i(50693),i(39790),i(253),i(94438),i(16891),i(50289)),m=i(29818),g=i(34897),y=i(79051),x=i(18409),b=i(12803),_=(i(13830),i(77312),"__NONE_OPTION__");(0,f.A)([(0,m.EM)("ha-tts-voice-picker")],(function(e,t){var i,f=function(t){function i(){var t;(0,u.A)(this,i);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=(0,h.A)(this,i,[].concat(a)),e(t),t}return(0,v.A)(i,t),(0,c.A)(i)}(t);return{F:f,d:[{kind:"field",decorators:[(0,m.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,m.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,m.MZ)()],key:"engineId",value:void 0},{kind:"field",decorators:[(0,m.MZ)()],key:"language",value:void 0},{kind:"field",decorators:[(0,m.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,m.MZ)({type:Boolean,reflect:!0})],key:"disabled",value:function(){return!1}},{kind:"field",decorators:[(0,m.MZ)({type:Boolean})],key:"required",value:function(){return!1}},{kind:"field",decorators:[(0,m.wk)()],key:"_voices",value:void 0},{kind:"field",decorators:[(0,m.P)("ha-select")],key:"_select",value:void 0},{kind:"method",key:"render",value:function(){var e,t;if(!this._voices)return k.s6;var i=null!==(e=this.value)&&void 0!==e?e:this.required?null===(t=this._voices[0])||void 0===t?void 0:t.voice_id:_;return(0,k.qy)(n||(n=(0,d.A)([' <ha-select .label="','" .value="','" .required="','" .disabled="','" @selected="','" @closed="','" fixedMenuPosition naturalMenuWidth> '," "," </ha-select> "])),this.label||this.hass.localize("ui.components.tts-voice-picker.voice"),i,this.required,this.disabled,this._changed,y.d,this.required?k.s6:(0,k.qy)(a||(a=(0,d.A)(['<ha-list-item .value="','"> '," </ha-list-item>"])),_,this.hass.localize("ui.components.tts-voice-picker.none")),this._voices.map((function(e){return(0,k.qy)(o||(o=(0,d.A)(['<ha-list-item .value="','"> '," </ha-list-item>"])),e.voice_id,e.name)})))}},{kind:"method",key:"willUpdate",value:function(e){(0,p.A)(f,"willUpdate",this,3)([e]),this.hasUpdated?(e.has("language")||e.has("engineId"))&&this._debouncedUpdateVoices():this._updateVoices()}},{kind:"field",key:"_debouncedUpdateVoices",value:function(){var e=this;return(0,x.s)((function(){return e._updateVoices()}),500)}},{kind:"method",key:"_updateVoices",value:(i=(0,l.A)((0,s.A)().mark((function e(){var t=this;return(0,s.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.engineId&&this.language){e.next=3;break}return this._voices=void 0,e.abrupt("return");case 3:return e.next=5,(0,b.z3)(this.hass,this.engineId,this.language);case 5:if(this._voices=e.sent.voices,this.value){e.next=8;break}return e.abrupt("return");case 8:this._voices&&this._voices.find((function(e){return e.voice_id===t.value}))||(this.value=void 0,(0,g.r)(this,"value-changed",{value:this.value}));case 9:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{kind:"method",key:"updated",value:function(e){var t,i,n;((0,p.A)(f,"updated",this,3)([e]),e.has("_voices")&&(null===(t=this._select)||void 0===t?void 0:t.value)!==this.value)&&(null===(i=this._select)||void 0===i||i.layoutOptions(),(0,g.r)(this,"value-changed",{value:null===(n=this._select)||void 0===n?void 0:n.value}))}},{kind:"get",static:!0,key:"styles",value:function(){return(0,k.AH)(r||(r=(0,d.A)(["ha-select{width:100%}"])))}},{kind:"method",key:"_changed",value:function(e){var t=e.target;!this.hass||""===t.value||t.value===this.value||void 0===this.value&&t.value===_||(this.value=t.value===_?void 0:t.value,(0,g.r)(this,"value-changed",{value:this.value}))}}]}}),k.WF)},86127:function(e,t,i){i.d(t,{eN:function(){return n}});i(26098);var n=function(e){return e.callWS({type:"cloud/status"})}}}]);
//# sourceMappingURL=3683.JKwpzS0eQ2Q.js.map