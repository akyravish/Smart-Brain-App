(this["webpackJsonpface-detection-app"]=this["webpackJsonpface-detection-app"]||[]).push([[0],{298:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),i=a(39),r=a.n(i),o=(a(80),a(17)),l=a(18),c=a(19),m=a(20),u=(a(81),function(e){var t=e.onRouteChange;return e.isSignIn?s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signin")},className:"pa4 black underline f3 dim link"},"Sign Out")):s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signin")},className:"pa4 black underline f3 dim link"},"Sign In"),s.a.createElement("p",{onClick:function(){return t("register")},className:"pa4 black underline f3 dim link"},"Register"))}),p=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("https://salty-woodland-60425.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("div",null,s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-2 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{onClick:function(){return e("rigister")},className:"f6 link dim black db"},"Register"))))))}}]),a}(s.a.Component),h=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitRegister=function(){fetch("https://salty-woodland-60425.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.name,email:n.state.email,password:n.state.password})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={name:"",email:"",password:""},n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-2 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"}))))))}}]),a}(s.a.Component),d=a(72),g=a.n(d),b=a(73),f=a.n(b),w=(a(82),function(){return s.a.createElement("div",{className:"ph4 ma"},s.a.createElement(g.a,{className:"Tilt shadow-2 ma10 br4",options:{max:40},style:{height:150,width:150}},s.a.createElement("div",{className:"Tilt-inner pa3"},s.a.createElement("img",{src:f.a,alt:"logo"}))))}),v=(a(83),function(e){var t=e.onInputChange,a=e.onButtonClick;return s.a.createElement("div",null,s.a.createElement("p",{className:"f3"},"This Magic Mind will detect faces in your pictures. Give it a try..."),s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"center form pa4 br3 shadow-5"},s.a.createElement("input",{className:"bw0 f4 pa2 w-70 center",type:"text",onChange:t}),s.a.createElement("button",{className:"bw0 w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),E=(a(84),function(e){var t=e.box;return s.a.createElement("div",{className:"bounding-box",style:{top:t.topRow,bottom:t.bottomRow,left:t.leftCol,right:t.rightCol}})}),N=function(e){var t=e.showImage,a=e.blueBox;return s.a.createElement("div",{className:"center ma"},s.a.createElement("div",{className:"absolute mt2"},s.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),a.map((function(e,t){return s.a.createElement(E,{box:e,key:t})}))))},C=function(e){var t=e.name,a=e.entries;return s.a.createElement("div",{className:"f3 white"},"".concat(t," Your Current Entries are..."),s.a.createElement("div",{className:"f1"},"".concat(a)))},y=a(74),k=a.n(y),S={particles:{number:{value:80,density:{enable:!0,value_area:1e3}},color:{value:"#ffffff"},shape:{type:"circle"},size:{value:3},move:{enable:!0,speed:2},retina_detect:{enable:!0}}},j={input:"",imageLink:"",box:[],route:"signin",isSignIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},I=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.calculateFaceLocation=function(e){var t=document.getElementById("inputimage"),a=Number(t.width),n=Number(t.height);return e.outputs[0].data.regions.map((function(e){var t=e.region_info.bounding_box;return{leftCol:t.left_col*a,topRow:t.top_row*n,rightCol:a-t.right_col*a,bottomRow:n-t.bottom_row*n}}))},e.displayBox=function(t){e.setState({box:t})},e.onPicSubmit=function(){e.setState({imageLink:e.state.input}),fetch("https://salty-woodland-60425.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://salty-woodland-60425.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(j):"home"===t?e.setState({isSignIn:!0}):"signin"===t&&e.setState(j),e.setState({route:t})},e.state=j,e}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(k.a,{className:"particles",params:S}),s.a.createElement(u,{isSignIn:this.state.isSignIn,onRouteChange:this.onRouteChange}),"home"===this.state.route?s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement(C,{name:this.state.user.name,entries:this.state.user.entries}),s.a.createElement(v,{onInputChange:this.onInputChange,onButtonClick:this.onPicSubmit}),s.a.createElement(N,{blueBox:this.state.box,showImage:this.state.imageLink})):"signin"===this.state.route?s.a.createElement(p,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):s.a.createElement(h,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(297);r.a.render(s.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){e.exports=a.p+"static/media/Icon.4100098c.png"},75:function(e,t,a){e.exports=a(298)},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.6fd6d465.chunk.js.map