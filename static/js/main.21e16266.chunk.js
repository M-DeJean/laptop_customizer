(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(3),c=a.n(s),o=(a(15),a(4)),m=a(5),u=a(7),l=a(6),i=a(8),d=(a(16),a(1)),f=a.n(d);function p(e){return n.a.createElement("div",{key:e.itemHash,className:"feature__item"},n.a.createElement("input",{type:"radio",id:e.itemHash,className:"feature__option",name:f()(e.feature),checked:e.item.name===e.state.selected[e.feature].name,onChange:function(t){return e.updateFeature(e.feature,e.item)}}),n.a.createElement("label",{htmlFor:e.itemHash,className:"feature__label"},e.item.name," (",e.USCurrencyFormat.format(e.item.cost),")"))}function y(e){return n.a.createElement("fieldset",{className:"feature",key:e.featureHash},n.a.createElement("legend",{className:"feature__name"},n.a.createElement("h3",null,e.feature)),e.features[e.feature].map(function(t){return n.a.createElement(p,{itemHash:f()(JSON.stringify(t)),item:t,state:e.state,updateFeature:e.updateFeature,feature:e.feature,USCurrencyFormat:e.USCurrencyFormat})}))}function h(e){return n.a.createElement("div",{className:"summary__option",key:e.featureHash},n.a.createElement("div",{className:"summary__option__label"},e.feature," "),n.a.createElement("div",{className:"summary__option__value"},e.selectedOption.name),n.a.createElement("div",{className:"summary__option__cost"},e.USCurrencyFormat.format(e.selectedOption.cost)))}function _(e){var t=Object.keys(e.selected).reduce(function(t,a){return t+e.selected[a].cost},0);return n.a.createElement("div",null,n.a.createElement("div",{className:"summary__total__label"},"Total"),n.a.createElement("div",{className:"summary__total__value"}),e.USCurrencyFormat.format(t))}var E=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).state={selected:{Processor:{name:"17th Generation Intel Core HB (7 Core with donut spare)",cost:700},"Operating System":{name:"Ubuntu Linux 16.04",cost:200},"Video Card":{name:"Toyota Corolla 1.5v",cost:1150.98},Display:{name:'15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',cost:1500}}},a.updateFeature=function(e,t){var r=Object.assign({},a.state.selected);r[e]=t,a.setState({selected:r})},a}return Object(i.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.features;return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("h1",null,"ELF Computing | Laptops")),n.a.createElement("main",null,n.a.createElement("form",{className:"main__form"},n.a.createElement("h2",null,"Customize your laptop"),Object.keys(this.state.selected).map(function(a,r){return n.a.createElement(y,{features:t,featureHash:a+"-"+r,feature:a,key:r,state:e.state,updateFeature:e.updateFeature,USCurrencyFormat:E})})),n.a.createElement("section",{className:"main__summary"},n.a.createElement("h2",null,"Your cart"),Object.keys(this.state.selected).map(function(t,a){return n.a.createElement(h,{featureHash:t+"-"+a,selectedOption:e.state.selected[t],key:t+"_"+a,feature:t,USCurrencyFormat:E})}),n.a.createElement("div",{className:"summary__total"},n.a.createElement(_,{USCurrencyFormat:E,selected:this.state.selected})))))}}]),t}(r.Component);c.a.render(n.a.createElement(v,{features:{Processor:[{name:"17th Generation Intel Core HB (7 Core with donut spare)",cost:700},{name:"Professor X AMD Fire Breather with sidewinder technology",cost:1200}],"Operating System":[{name:"Ubuntu Linux 16.04",cost:200},{name:"Bodhi Linux",cost:300}],"Video Card":[{name:"Toyota Corolla 1.5v",cost:1150.98},{name:"Mind mild breeze 2000",cost:1345}],Display:[{name:'15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',cost:1500},{name:'15.3" HGTV (3840 x 2160) Home makeover edition',cost:1400}]}}),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.21e16266.chunk.js.map