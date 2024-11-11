/*! For license information please see 4663.UbQM8fmE9Us.js.LICENSE.txt */
export const id=4663;export const ids=[4663];export const modules={51853:(t,i,e)=>{e.d(i,{A:()=>a});const o=t=>t<10?`0${t}`:t;function a(t){const i=Math.floor(t/3600),e=Math.floor(t%3600/60),a=Math.floor(t%3600%60);return i>0?`${i}:${o(e)}:${o(a)}`:e>0?`${e}:${o(a)}`:a>0?""+a:null}},3276:(t,i,e)=>{e.d(i,{l:()=>h});var o=e(36312),a=e(68689),n=e(54653),s=e(34599),r=e(50289),l=e(29818),d=e(9600);e(4169);const c=["button","ha-list-item"],h=(t,i)=>r.qy` <div class="header_title"> <span>${i}</span> <ha-icon-button .label="${t?.localize("ui.dialogs.generic.close")??"Close"}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}" dialogAction="close" class="header_button"></ha-icon-button> </div> `;(0,o.A)([(0,l.EM)("ha-dialog")],(function(t,i){class e extends i{constructor(...i){super(...i),t(this)}}return{F:e,d:[{kind:"field",key:d.Xr,value:void 0},{kind:"method",key:"scrollToPos",value:function(t,i){this.contentElement?.scrollTo(t,i)}},{kind:"method",key:"renderHeading",value:function(){return r.qy`<slot name="heading"> ${(0,a.A)(e,"renderHeading",this,3)([])} </slot>`}},{kind:"method",key:"firstUpdated",value:function(){(0,a.A)(e,"firstUpdated",this,3)([]),this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,c].join(", "),this._updateScrolledAttribute(),this.contentElement?.addEventListener("scroll",this._onScroll,{passive:!0})}},{kind:"method",key:"disconnectedCallback",value:function(){(0,a.A)(e,"disconnectedCallback",this,3)([]),this.contentElement.removeEventListener("scroll",this._onScroll)}},{kind:"field",key:"_onScroll",value(){return()=>{this._updateScrolledAttribute()}}},{kind:"method",key:"_updateScrolledAttribute",value:function(){this.contentElement&&this.toggleAttribute("scrolled",0!==this.contentElement.scrollTop)}},{kind:"field",static:!0,key:"styles",value:()=>[s.R,r.AH`:host([scrolled]) ::slotted(ha-dialog-header){border-bottom:1px solid var(--mdc-dialog-scroll-divider-color,rgba(0,0,0,.12))}.mdc-dialog{--mdc-dialog-scroll-divider-color:var(
          --dialog-scroll-divider-color,
          var(--divider-color)
        );z-index:var(--dialog-z-index,8);-webkit-backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));backdrop-filter:var(--ha-dialog-scrim-backdrop-filter,var(--dialog-backdrop-filter,none));--mdc-dialog-box-shadow:var(--dialog-box-shadow, none);--mdc-typography-headline6-font-weight:400;--mdc-typography-headline6-font-size:1.574rem}.mdc-dialog__actions{justify-content:var(--justify-action-buttons,flex-end);padding-bottom:max(env(safe-area-inset-bottom),24px)}.mdc-dialog__actions span:first-child{flex:var(--secondary-action-button-flex,unset)}.mdc-dialog__actions span:nth-child(2){flex:var(--primary-action-button-flex,unset)}.mdc-dialog__container{align-items:var(--vertical-align-dialog,center)}.mdc-dialog__title{padding:24px 24px 0 24px}.mdc-dialog__actions{padding:12px 24px 12px 24px}.mdc-dialog__title::before{content:unset}.mdc-dialog .mdc-dialog__content{position:var(--dialog-content-position,relative);padding:var(--dialog-content-padding,24px)}:host([hideactions]) .mdc-dialog .mdc-dialog__content{padding-bottom:max(var(--dialog-content-padding,24px),env(safe-area-inset-bottom))}.mdc-dialog .mdc-dialog__surface{position:var(--dialog-surface-position,relative);top:var(--dialog-surface-top);margin-top:var(--dialog-surface-margin-top);min-height:var(--mdc-dialog-min-height,auto);border-radius:var(--ha-dialog-border-radius,28px);-webkit-backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);backdrop-filter:var(--ha-dialog-surface-backdrop-filter,none);background:var(--ha-dialog-surface-background,var(--mdc-theme-surface,#fff))}:host([flexContent]) .mdc-dialog .mdc-dialog__content{display:flex;flex-direction:column}.header_title{position:relative;padding-right:40px;padding-inline-end:40px;padding-inline-start:initial;direction:var(--direction)}.header_title span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block}.header_button{position:absolute;right:-12px;top:-12px;text-decoration:none;color:inherit;inset-inline-start:initial;inset-inline-end:-12px;direction:var(--direction)}.dialog-actions{inset-inline-start:initial!important;inset-inline-end:0px!important;direction:var(--direction)}`]}]}}),n.u)},98041:(t,i,e)=>{e.d(i,{PN:()=>n,jm:()=>s,sR:()=>r,t1:()=>a,yu:()=>l});e(46092);const o={"HA-Frontend-Base":`${location.protocol}//${location.host}`},a=(t,i,e)=>t.callApi("POST","config/config_entries/flow",{handler:i,show_advanced_options:Boolean(t.userData?.showAdvanced),entry_id:e},o),n=(t,i)=>t.callApi("GET",`config/config_entries/flow/${i}`,void 0,o),s=(t,i,e)=>t.callApi("POST",`config/config_entries/flow/${i}`,e,o),r=(t,i)=>t.callApi("DELETE",`config/config_entries/flow/${i}`),l=(t,i)=>t.callApi("GET","config/config_entries/flow_handlers"+(i?`?type=${i}`:""))},19477:(t,i,e)=>{e.d(i,{mx:()=>o,sF:()=>a});const o=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],a=(t,i)=>t.callWS({type:"schedule/create",...i})},2851:(t,i,e)=>{e.d(i,{PF:()=>s,CR:()=>a,ls:()=>n});e(16891);var o=e(51853);const a=(t,i)=>t.callWS({type:"timer/create",...i}),n=t=>{if(!t.attributes.remaining)return;let i=function(t){const i=t.split(":").map(Number);return 3600*i[0]+60*i[1]+i[2]}(t.attributes.remaining);if("active"===t.state){const e=(new Date).getTime(),o=new Date(t.attributes.finishes_at).getTime();i=Math.max((o-e)/1e3,0)}return i},s=(t,i,e)=>{if(!i)return null;if("idle"===i.state||0===e)return t.formatEntityState(i);let a=(0,o.A)(e||0)||"0";return"paused"===i.state&&(a=`${a} (${t.formatEntityState(i)})`),a}},30581:(t,i,e)=>{e.d(i,{W:()=>r});var o=e(50289),a=e(98041),n=e(46092),s=e(41572);const r=(t,i)=>(0,s.g)(t,i,{flowType:"config_flow",showDevices:!0,createFlow:async(t,e)=>{const[o]=await Promise.all([(0,a.t1)(t,e,i.entryId),t.loadFragmentTranslation("config"),t.loadBackendTranslation("config",e),t.loadBackendTranslation("selector",e),t.loadBackendTranslation("title",e)]);return o},fetchFlow:async(t,i)=>{const e=await(0,a.PN)(t,i);return await t.loadFragmentTranslation("config"),await t.loadBackendTranslation("config",e.handler),await t.loadBackendTranslation("selector",e.handler),e},handleFlowStep:a.jm,deleteFlow:a.sR,renderAbortDescription(t,i){const e=t.localize(`component.${i.translation_domain||i.handler}.config.abort.${i.reason}`,i.description_placeholders);return e?o.qy` <ha-markdown allowsvg breaks .content="${e}"></ha-markdown> `:i.reason},renderShowFormStepHeader:(t,i)=>t.localize(`component.${i.translation_domain||i.handler}.config.step.${i.step_id}.title`,i.description_placeholders)||t.localize(`component.${i.handler}.title`),renderShowFormStepDescription(t,i){const e=t.localize(`component.${i.translation_domain||i.handler}.config.step.${i.step_id}.description`,i.description_placeholders);return e?o.qy` <ha-markdown allowsvg breaks .content="${e}"></ha-markdown> `:""},renderShowFormStepFieldLabel(t,i,e,o){if("expandable"===e.type)return t.localize(`component.${i.handler}.config.step.${i.step_id}.sections.${e.name}.name`);const a=o?.path?.[0]?`sections.${o.path[0]}.`:"";return t.localize(`component.${i.handler}.config.step.${i.step_id}.${a}data.${e.name}`)||e.name},renderShowFormStepFieldHelper(t,i,e,a){if("expandable"===e.type)return t.localize(`component.${i.translation_domain||i.handler}.config.step.${i.step_id}.sections.${e.name}.description`);const n=a?.path?.[0]?`sections.${a.path[0]}.`:"",s=t.localize(`component.${i.translation_domain||i.handler}.config.step.${i.step_id}.${n}data_description.${e.name}`,i.description_placeholders);return s?o.qy`<ha-markdown breaks .content="${s}"></ha-markdown>`:""},renderShowFormStepFieldError:(t,i,e)=>t.localize(`component.${i.translation_domain||i.translation_domain||i.handler}.config.error.${e}`,i.description_placeholders)||e,renderShowFormStepFieldLocalizeValue:(t,i,e)=>t.localize(`component.${i.handler}.selector.${e}`),renderShowFormStepSubmitButton:(t,i)=>t.localize(`component.${i.handler}.config.step.${i.step_id}.submit`)||t.localize("ui.panel.config.integrations.config_flow."+(!1===i.last_step?"next":"submit")),renderExternalStepHeader:(t,i)=>t.localize(`component.${i.handler}.config.step.${i.step_id}.title`)||t.localize("ui.panel.config.integrations.config_flow.external_step.open_site"),renderExternalStepDescription(t,i){const e=t.localize(`component.${i.translation_domain||i.handler}.config.${i.step_id}.description`,i.description_placeholders);return o.qy` <p> ${t.localize("ui.panel.config.integrations.config_flow.external_step.description")} </p> ${e?o.qy` <ha-markdown allowsvg breaks .content="${e}"></ha-markdown> `:""} `},renderCreateEntryDescription(t,i){const e=t.localize(`component.${i.translation_domain||i.handler}.config.create_entry.${i.description||"default"}`,i.description_placeholders);return o.qy` ${e?o.qy` <ha-markdown allowsvg breaks .content="${e}"></ha-markdown> `:""} <p> ${t.localize("ui.panel.config.integrations.config_flow.created_config",{name:i.title})} </p> `},renderShowFormProgressHeader:(t,i)=>t.localize(`component.${i.handler}.config.step.${i.step_id}.title`)||t.localize(`component.${i.handler}.title`),renderShowFormProgressDescription(t,i){const e=t.localize(`component.${i.translation_domain||i.handler}.config.progress.${i.progress_action}`,i.description_placeholders);return e?o.qy` <ha-markdown allowsvg breaks .content="${e}"></ha-markdown> `:""},renderMenuHeader:(t,i)=>t.localize(`component.${i.handler}.config.step.${i.step_id}.title`)||t.localize(`component.${i.handler}.title`),renderMenuDescription(t,i){const e=t.localize(`component.${i.translation_domain||i.handler}.config.step.${i.step_id}.description`,i.description_placeholders);return e?o.qy` <ha-markdown allowsvg breaks .content="${e}"></ha-markdown> `:""},renderMenuOption:(t,i,e)=>t.localize(`component.${i.translation_domain||i.handler}.config.step.${i.step_id}.menu_options.${e}`,i.description_placeholders),renderLoadingDescription(t,i,e,o){if("loading_flow"!==i&&"loading_step"!==i)return"";const a=o?.handler||e;return t.localize(`ui.panel.config.integrations.config_flow.loading.${i}`,{integration:a?(0,n.p$)(t.localize,a):t.localize("ui.panel.config.integrations.config_flow.loading.fallback_title")})}})},41572:(t,i,e)=>{e.d(i,{g:()=>n});var o=e(34897);const a=()=>Promise.all([e.e(9952),e.e(963),e.e(9325),e.e(6955),e.e(8440)]).then(e.bind(e,18440)),n=(t,i,e)=>{(0,o.r)(t,"show-dialog",{dialogTag:"dialog-data-entry-flow",dialogImport:a,dialogParams:{...i,flowConfig:e,dialogParentElement:t}})}},74663:(t,i,e)=>{e.r(i),e.d(i,{DialogHelperDetail:()=>v});var o=e(36312),a=(e(89655),e(72606),e(7986),e(50289)),n=e(29818),s=e(85323),r=e(33922),l=e(85920);e(32885);var d=e(3276),c=(e(13830),e(98041));var h=e(46092),m=e(19477),p=e(2851),u=e(30581),g=e(55321),f=e(51842),y=e(57273);const _={input_boolean:{create:(t,i)=>t.callWS({type:"input_boolean/create",...i}),import:()=>e.e(428).then(e.bind(e,428))},input_button:{create:(t,i)=>t.callWS({type:"input_button/create",...i}),import:()=>e.e(4060).then(e.bind(e,24060))},input_text:{create:(t,i)=>t.callWS({type:"input_text/create",...i}),import:()=>Promise.all([e.e(7449),e.e(8901)]).then(e.bind(e,68901))},input_number:{create:(t,i)=>t.callWS({type:"input_number/create",...i}),import:()=>Promise.all([e.e(7449),e.e(8911)]).then(e.bind(e,8911))},input_datetime:{create:(t,i)=>t.callWS({type:"input_datetime/create",...i}),import:()=>Promise.all([e.e(7449),e.e(2395)]).then(e.bind(e,12395))},input_select:{create:(t,i)=>t.callWS({type:"input_select/create",...i}),import:()=>e.e(4688).then(e.bind(e,74688))},counter:{create:(t,i)=>t.callWS({type:"counter/create",...i}),import:()=>e.e(4973).then(e.bind(e,24973))},timer:{create:p.CR,import:()=>Promise.all([e.e(9196),e.e(8998)]).then(e.bind(e,48998))},schedule:{create:m.sF,import:()=>Promise.all([e.e(1127),e.e(888)]).then(e.bind(e,50888))}};let v=(0,o.A)([(0,n.EM)("dialog-helper-detail")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_item",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_opened",value:()=>!1},{kind:"field",decorators:[(0,n.wk)()],key:"_domain",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_submitting",value:()=>!1},{kind:"field",decorators:[(0,n.P)(".form")],key:"_form",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_helperFlows",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_loading",value:()=>!1},{kind:"field",key:"_params",value:void 0},{kind:"method",key:"showDialog",value:async function(t){this._params=t,this._domain=t.domain,this._item=void 0,this._domain&&this._domain in _&&await _[this._domain].import(),this._opened=!0,await this.updateComplete,this.hass.loadFragmentTranslation("config");const i=await(0,c.yu)(this.hass,["helper"]);await this.hass.loadBackendTranslation("title",i,!0),this._helperFlows=i}},{kind:"method",key:"closeDialog",value:function(){this._opened=!1,this._error=void 0,this._domain=void 0,this._params=void 0}},{kind:"method",key:"render",value:function(){if(!this._opened)return a.s6;let t;if(this._domain)t=a.qy` <div class="form" @value-changed="${this._valueChanged}"> ${this._error?a.qy`<div class="error">${this._error}</div>`:""} ${(0,l._)(`ha-${this._domain}-form`,{hass:this.hass,item:this._item,new:!0})} </div> <mwc-button slot="primaryAction" @click="${this._createItem}" .disabled="${this._submitting}"> ${this.hass.localize("ui.panel.config.helpers.dialog.create")} </mwc-button> ${this._params?.domain?a.s6:a.qy`<mwc-button slot="secondaryAction" @click="${this._goBack}" .disabled="${this._submitting}"> ${this.hass.localize("ui.common.back")} </mwc-button>`} `;else if(this._loading||void 0===this._helperFlows)t=a.qy`<ha-circular-progress indeterminate></ha-circular-progress>`;else{const i=[];for(const t of Object.keys(_))i.push([t,this.hass.localize(`ui.panel.config.helpers.types.${t}`)||t]);for(const t of this._helperFlows)i.push([t,(0,h.p$)(this.hass.localize,t)]);i.sort(((t,i)=>t[1].localeCompare(i[1]))),t=a.qy` <mwc-list innerRole="listbox" itemRoles="option" innerAriaLabel="${this.hass.localize("ui.panel.config.helpers.dialog.create_helper")}" rootTabbable dialogInitialFocus> ${i.map((([t,i])=>{const e=!(t in _)||(0,r.x)(this.hass,t);return a.qy` <ha-list-item .disabled="${!e}" hasmeta .domain="${t}" @request-selected="${this._domainPicked}" graphic="icon"> <img slot="graphic" loading="lazy" alt="" src="${(0,f.MR)({domain:t,type:"icon",useFallback:!0,darkOptimized:this.hass.themes?.darkMode})}" crossorigin="anonymous" referrerpolicy="no-referrer"> <span class="item-text"> ${i} </span> <ha-icon-next slot="meta"></ha-icon-next> </ha-list-item> ${e?"":a.qy` <simple-tooltip animation-delay="0">${this.hass.localize("ui.dialogs.helper_settings.platform_not_loaded",{platform:t})}</simple-tooltip> `} `}))} </mwc-list> `}return a.qy` <ha-dialog open @closed="${this.closeDialog}" class="${(0,s.H)({"button-left":!this._domain})}" scrimClickAction escapeKeyAction .hideActions="${!this._domain}" .heading="${(0,d.l)(this.hass,this._domain?this.hass.localize("ui.panel.config.helpers.dialog.create_platform",{platform:(0,y.z)(this._domain)&&this.hass.localize(`ui.panel.config.helpers.types.${this._domain}`)||this._domain}):this.hass.localize("ui.panel.config.helpers.dialog.create_helper"))}"> ${t} </ha-dialog> `}},{kind:"method",key:"_valueChanged",value:function(t){this._item=t.detail.value}},{kind:"method",key:"_createItem",value:async function(){if(this._domain&&this._item){this._submitting=!0,this._error="";try{const t=await _[this._domain].create(this.hass,this._item);this._params?.dialogClosedCallback&&t.id&&this._params.dialogClosedCallback({flowFinished:!0,entityId:`${this._domain}.${t.id}`}),this.closeDialog()}catch(t){this._error=t.message||"Unknown error"}finally{this._submitting=!1}}}},{kind:"method",key:"_domainPicked",value:async function(t){if(!(t=>!(!t.detail.selected||"property"!==t.detail.source||(t.currentTarget.selected=!1,0)))(t))return;const i=t.currentTarget.domain;if(i in _){this._loading=!0;try{await _[i].import(),this._domain=i}finally{this._loading=!1}this._focusForm()}else(0,u.W)(this,{startFlowHandler:i,manifest:await(0,h.QC)(this.hass,i),dialogClosedCallback:this._params.dialogClosedCallback}),this.closeDialog()}},{kind:"method",key:"_focusForm",value:async function(){await this.updateComplete,(this._form?.lastElementChild).focus()}},{kind:"method",key:"_goBack",value:function(){this._domain=void 0,this._item=void 0,this._error=void 0}},{kind:"get",static:!0,key:"styles",value:function(){return[g.nA,a.AH`ha-dialog.button-left{--justify-action-buttons:flex-start}ha-dialog{--dialog-content-padding:0;--dialog-scroll-divider-color:transparent;--mdc-dialog-max-height:60vh}@media all and (min-width:550px){ha-dialog{--mdc-dialog-min-width:500px}}ha-icon-next{width:24px}.form{padding:24px}`]}}]}}),a.WF)},51842:(t,i,e)=>{e.d(i,{MR:()=>o,a_:()=>a,bg:()=>n});const o=t=>`https://brands.home-assistant.io/${t.brand?"brands/":""}${t.useFallback?"_/":""}${t.domain}/${t.darkOptimized?"dark_":""}${t.type}.png`,a=t=>t.split("/")[4],n=t=>t.startsWith("https://brands.home-assistant.io/")},7986:(t,i,e)=>{e(253),e(54846);var o=e(50289);class a extends o.WF{static get styles(){return[o.AH`:host{display:block;position:absolute;outline:0;z-index:1002;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:default;pointer-events:none}#tooltip{display:block;outline:0;font-size:var(--simple-tooltip-font-size, 10px);line-height:1;background-color:var(--simple-tooltip-background,#616161);color:var(--simple-tooltip-text-color,#fff);padding:8px;border-radius:var(--simple-tooltip-border-radius,2px);width:var(--simple-tooltip-width)}@keyframes keyFrameScaleUp{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes keyFrameScaleDown{0%{transform:scale(1)}100%{transform:scale(0)}}@keyframes keyFrameFadeInOpacity{0%{opacity:0}100%{opacity:var(--simple-tooltip-opacity, .9)}}@keyframes keyFrameFadeOutOpacity{0%{opacity:var(--simple-tooltip-opacity, .9)}100%{opacity:0}}@keyframes keyFrameSlideDownIn{0%{transform:translateY(-2000px);opacity:0}10%{opacity:.2}100%{transform:translateY(0);opacity:var(--simple-tooltip-opacity, .9)}}@keyframes keyFrameSlideDownOut{0%{transform:translateY(0);opacity:var(--simple-tooltip-opacity, .9)}10%{opacity:.2}100%{transform:translateY(-2000px);opacity:0}}.fade-in-animation{opacity:0;animation-delay:var(--simple-tooltip-delay-in, 500ms);animation-name:keyFrameFadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-in, 500ms);animation-fill-mode:forwards}.fade-out-animation{opacity:var(--simple-tooltip-opacity, .9);animation-delay:var(--simple-tooltip-delay-out, 0ms);animation-name:keyFrameFadeOutOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-out, 500ms);animation-fill-mode:forwards}.scale-up-animation{transform:scale(0);opacity:var(--simple-tooltip-opacity, .9);animation-delay:var(--simple-tooltip-delay-in, 500ms);animation-name:keyFrameScaleUp;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-in, 500ms);animation-fill-mode:forwards}.scale-down-animation{transform:scale(1);opacity:var(--simple-tooltip-opacity, .9);animation-delay:var(--simple-tooltip-delay-out, 500ms);animation-name:keyFrameScaleDown;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:var(--simple-tooltip-duration-out, 500ms);animation-fill-mode:forwards}.slide-down-animation{transform:translateY(-2000px);opacity:0;animation-delay:var(--simple-tooltip-delay-out, 500ms);animation-name:keyFrameSlideDownIn;animation-iteration-count:1;animation-timing-function:cubic-bezier(0,0,0.2,1);animation-duration:var(--simple-tooltip-duration-out, 500ms);animation-fill-mode:forwards}.slide-down-animation-out{transform:translateY(0);opacity:var(--simple-tooltip-opacity, .9);animation-delay:var(--simple-tooltip-delay-out, 500ms);animation-name:keyFrameSlideDownOut;animation-iteration-count:1;animation-timing-function:cubic-bezier(0.4,0,1,1);animation-duration:var(--simple-tooltip-duration-out, 500ms);animation-fill-mode:forwards}.cancel-animation{animation-delay:-30s!important}.hidden{position:absolute;left:-10000px;inset-inline-start:-10000px;inset-inline-end:initial;top:auto;width:1px;height:1px;overflow:hidden}`]}render(){return o.qy` <div id="tooltip" class="hidden" @animationend="${this._onAnimationEnd}"> <slot></slot> </div>`}static get properties(){return{...super.properties,for:{type:String},manualMode:{type:Boolean,attribute:"manual-mode"},position:{type:String},fitToVisibleBounds:{type:Boolean,attribute:"fit-to-visible-bounds"},offset:{type:Number},marginTop:{type:Number,attribute:"margin-top"},animationDelay:{type:Number,attribute:"animation-delay"},animationEntry:{type:String,attribute:"animation-entry"},animationExit:{type:String,attribute:"animation-exit"},_showing:{type:Boolean}}}static get tag(){return"simple-tooltip"}constructor(){super(),this.manualMode=!1,this.position="bottom",this.fitToVisibleBounds=!1,this.offset=14,this.marginTop=14,this.animationEntry="",this.animationExit="",this.animationConfig={entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]},setTimeout((()=>{this.addEventListener("webkitAnimationEnd",this._onAnimationEnd.bind(this)),this.addEventListener("mouseenter",this.hide.bind(this))}),0)}get target(){var t=this.parentNode,i=this.getRootNode();return this.for?i.querySelector("#"+this.for):t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?i.host:t}disconnectedCallback(){this.manualMode||this._removeListeners(),super.disconnectedCallback()}playAnimation(t){"entry"===t?this.show():"exit"===t&&this.hide()}cancelAnimation(){this.shadowRoot.querySelector("#tooltip").classList.add("cancel-animation")}show(){if(!this._showing){if(""===this.textContent.trim()){for(var t=!0,i=this.children,e=0;e<i.length;e++)if(""!==i[e].textContent.trim()){t=!1;break}if(t)return}this._showing=!0,this.shadowRoot.querySelector("#tooltip").classList.remove("hidden"),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("entry"))}}hide(){if(this._showing){if(this._animationPlaying)return this._showing=!1,void this._cancelAnimation();this._onAnimationFinish(),this._showing=!1,this._animationPlaying=!0,clearTimeout(this.__debounceCancel),this.__debounceCancel=setTimeout((()=>{this._cancelAnimation()}),5e3)}}updatePosition(){if(this._target&&this.offsetParent){var t=this.offset;14!=this.marginTop&&14==this.offset&&(t=this.marginTop);var i,e,o=this.offsetParent.getBoundingClientRect(),a=this._target.getBoundingClientRect(),n=this.getBoundingClientRect(),s=(a.width-n.width)/2,r=(a.height-n.height)/2,l=a.left-o.left,d=a.top-o.top;switch(this.position){case"top":i=l+s,e=d-n.height-t;break;case"bottom":i=l+s,e=d+a.height+t;break;case"left":i=l-n.width-t,e=d+r;break;case"right":i=l+a.width+t,e=d+r}this.fitToVisibleBounds?(o.left+i+n.width>window.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,i)+"px",this.style.right="auto"),o.top+e+n.height>window.innerHeight?(this.style.bottom=o.height-d+t+"px",this.style.top="auto"):(this.style.top=Math.max(-o.top,e)+"px",this.style.bottom="auto")):(this.style.left=i+"px",this.style.top=e+"px")}}_addListeners(){this._target&&(this._target.addEventListener("mouseenter",this.show.bind(this)),this._target.addEventListener("focus",this.show.bind(this)),this._target.addEventListener("mouseleave",this.hide.bind(this)),this._target.addEventListener("blur",this.hide.bind(this)),this._target.addEventListener("tap",this.hide.bind(this)))}_findTarget(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()}_manualModeChanged(){this.manualMode?this._removeListeners():this._addListeners()}_cancelAnimation(){this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add("hidden")}_onAnimationFinish(){this._showing&&(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("exit")))}_onAnimationEnd(){this._animationPlaying=!1,this._showing||(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.add("hidden"))}_getAnimationType(t){if("entry"===t&&""!==this.animationEntry)return this.animationEntry;if("exit"===t&&""!==this.animationExit)return this.animationExit;if(this.animationConfig[t]&&"string"==typeof this.animationConfig[t][0].name){if(this.animationConfig[t][0].timing&&this.animationConfig[t][0].timing.delay&&0!==this.animationConfig[t][0].timing.delay){var i=this.animationConfig[t][0].timing.delay;"entry"===t?document.documentElement.style.setProperty("--simple-tooltip-delay-in",i+"ms"):"exit"===t&&document.documentElement.style.setProperty("--simple-tooltip-delay-out",i+"ms")}return this.animationConfig[t][0].name}}_removeListeners(){this._target&&(this._target.removeEventListener("mouseover",this.show.bind(this)),this._target.removeEventListener("focusin",this.show.bind(this)),this._target.removeEventListener("mouseout",this.hide.bind(this)),this._target.removeEventListener("focusout",this.hide.bind(this)),this._target.removeEventListener("click",this.hide.bind(this)))}firstUpdated(t){this.setAttribute("role","tooltip"),this.setAttribute("tabindex",-1),this._findTarget()}updated(t){t.forEach(((t,i)=>{"for"==i&&this._findTarget(this[i],t),"manualMode"==i&&this._manualModeChanged(this[i],t),"animationDelay"==i&&this._delayChange(this[i],t)}))}_delayChange(t){500!==t&&document.documentElement.style.setProperty("--simple-tooltip-delay-in",t+"ms")}}customElements.define(a.tag,a)}};
//# sourceMappingURL=4663.UbQM8fmE9Us.js.map