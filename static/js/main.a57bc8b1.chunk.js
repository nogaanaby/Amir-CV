(window["webpackJsonpamir-cv"]=window["webpackJsonpamir-cv"]||[]).push([[0],[,,,,,,function(t,e,n){},,function(t,e,n){},,function(t,e,n){t.exports=n(20)},,,,,function(t,e,n){},function(t,e,n){t.exports=n.p+"static/media/windmill.7a331bd0.png"},function(t,e,n){t.exports=n.p+"static/media/windmill-spiner.b914d7ab.png"},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(9),s=n.n(o),r=(n(15),n(1)),c=n(2),l=n(4),p=n(3),u=n(5),m=(n(16),n(17),n(6),function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(l.a)(this,Object(p.a)(e).call(this,t))).typingText=function(){var t=n.props.speed,e=n.props.text[n.state.sentanceIndex].substring(0,n.state.letterIndex);n.setState({typing:e,letterIndex:n.state.letterIndex+1});var a=setTimeout(n.typingText,t);n.state.letterIndex>n.props.text[n.state.sentanceIndex].length&&(n.setState({letterIndex:0}),clearTimeout(a),n.props.text.length-1>n.state.sentanceIndex?(n.setState({sentanceIndex:n.state.sentanceIndex+1,letterIndex:0}),setTimeout(n.typingText,2500)):(console.log("AnimatedTyping sends done typing"),n.setState({sentanceIndex:0}),n.props.doneTyping()))},n.state={typing:"",letterIndex:0,sentanceIndex:0},n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.props.startTyping&&this.typingText()}},{key:"shouldComponentUpdate",value:function(t,e){return this.props.startTyping!==t.startTyping||(this.state.typing!==e.typing||this.state.letterIndex!==e.letterIndex||this.state.sentanceIndex!==e.sentanceIndex||(this.props.text!==t.text||this.props.clearTyping!==t.clearTyping))}},{key:"componentDidUpdate",value:function(t,e){this.props.startTyping!==t.startTyping&&this.props.startTyping&&this.typingText(),this.props.text,t.text}},{key:"render",value:function(){return i.a.createElement("div",{className:this.props.className},this.state.typing,this.props.startTyping?i.a.createElement("span",{className:"underline"},"_"):"")}}]),e}(a.Component)),d=(a.Component,n(18),function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(l.a)(this,Object(p.a)(e).call(this,t))).onDoneParagraphTyping=function(){n.state.texts.length<=n.state.onTyping?n.setState({onTypingMode:!1}):n.setState({onTyping:n.state.onTyping+1})},n.state={texts:[{text:["Hi"],class:"hi"},{text:["I`m Amir Metsu"],class:"mainTitle"},{text:["3D Artist, Animator"],class:"amir-subtitle"},{text:["I can animate , create assets, model, sculpt and paint characters."],class:"amir-description"},{text:["I can also manage projects and create all kinds of 3D contant according to costumer's need"],class:"amir-description"}],onTyping:0},n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"shouldComponentUpdate",value:function(t,e){return this.state.onTyping!==e.onTyping}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"page1"},i.a.createElement("div",{className:"opening-text"},i.a.createElement("div",{className:"textBlock"},this.state.texts.map((function(e,n){return i.a.createElement(m,{className:e.class,text:e.text,speed:100,startTyping:t.state.onTyping===n,doneTyping:function(){return t.onDoneParagraphTyping()}})})))),window.innerWidth>800?i.a.createElement("iframe",{src:"https://player.vimeo.com/video/235837646?autoplay=1&loop=1&controls=0&muted=1",width:"800",height:"500",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0}):i.a.createElement("iframe",{src:"https://player.vimeo.com/video/235837646?autoplay=1&loop=1&controls=0&muted=1",width:"auto",height:"auto",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0}))}}]),e}(a.Component)),g=(n(8),function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(l.a)(this,Object(p.a)(e).call(this,t))).state={},n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:"paragraph"},i.a.createElement("h3",{className:"paragraph-title"},i.a.createElement("b",null,this.props.company)," | ",this.props.title),i.a.createElement("p",{className:"paragraph-date"},this.props.date),i.a.createElement("p",{className:"paragraph-description"},this.props.description))}}]),e}(a.Component)),h=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(l.a)(this,Object(p.a)(e).call(this,t))).state={},n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:"page2"},i.a.createElement("div",{className:"row"},i.a.createElement("h2",{className:"main-titles"},"Professional Experience"),i.a.createElement(g,{company:"Photuro3D",title:"Technical Animator, 3D Generalist",date:"2018 - Now, Tel Aviv",description:"Wide skills in 3D modeling, sculpting and texturing for 3D printing (ZBrush) Animating 3D human models Creating automation pipelines for Rig and retargeting animation (Maya) Operating Motion Capture Sensor Suit, forming a motion capture animation library Full control and understanding of Photuro3D scanning technology. (Mantis Vision) Working with customers to create animation and design according to customer needs Created Equirectangular Dynamic Backgrounds (Photoshop, Plotaverse) Working with the marketing team to brand wallpaper using Photoshop"}),i.a.createElement("h2",{className:"main-titles"},"Volunteering"),i.a.createElement(g,{company:"Animation Union Israel",title:"Student Representor",date:"2017 - 2019",description:"Mentoring Project - Mentoring Students as part of Israel Animation Industry\u2019s Israel Animation Industry\u2019s \u201cEmployment Fair\u201d at the Anination Festival Producing \u201cThe Real World\u201d lecture "})),i.a.createElement("div",{className:"brake"}),i.a.createElement("div",{className:"row"},i.a.createElement("h2",{className:"main-titles"},"Education"),i.a.createElement(g,{company:"Nexttut Education",title:"Character Creation curse",date:"2019",description:""}),i.a.createElement(g,{company:"Wonder ArtHouse",title:"Texture Extreme Course",date:"2018",description:""}),i.a.createElement(g,{company:"IAC (Israel.Animation.College)",title:"3D Animation",date:"2015 - 2017",description:""})))}}]),e}(a.Component),f=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(l.a)(this,Object(p.a)(e).call(this,t))).state={},n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"shouldComponentUpdate",value:function(t,e){return this.props.page!==t.page||this.props.showErrows!==t.showErrows}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"Pagination"},1!==this.props.page&&this.props.showErrows?i.a.createElement("button",{className:"pagination-arrow-a pagination-arrow-left",onClick:function(){return t.props.flipPage("prev")}},i.a.createElement("i",{className:"fas fa-angle-left pagination-arrow fa-3x"})):"",3!==this.props.page&&this.props.showErrows?i.a.createElement("button",{className:"pagination-arrow-a pagination-arrow-a-right",onClick:function(){return t.props.flipPage("next")}},i.a.createElement("i",{className:"fas fa-angle-right pagination-arrow fa-3x"})):"")}}]),e}(a.Component),y=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(l.a)(this,Object(p.a)(e).call(this,t))).flipPage=function(t){n.setState({onTypingAnimation:!1}),"next"===t&&3!==n.state.onPage&&n.setState({onPage:n.state.onPage+1}),"prev"===t&&1!==n.state.onPage&&n.setState({onPage:n.state.onPage-1})},n.state={onPage:1,onTypingAnimation:!0,showErrows:!0,sunPositionLeft:1,sunPositionTop:1,cloudePositionTop:69,cloudePositionRight:4},n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"shouldComponentUpdate",value:function(t,e){return this.state.onPage!==e.onPage||(this.state.sunPositionLeft!==e.sunPositionLeft||this.state.showErrows!==e.showErrows)}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},1===this.state.onPage?i.a.createElement(d,{onTypingAnimation:this.state.onTypingAnimation}):"",2===this.state.onPage?i.a.createElement(h,null):"",i.a.createElement(f,{page:this.state.onPage,flipPage:this.flipPage,showErrows:this.state.showErrows})))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(19);s.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.a57bc8b1.chunk.js.map