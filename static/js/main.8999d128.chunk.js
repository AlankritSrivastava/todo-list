(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{44:function(e,t,a){e.exports=a(75)},49:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(40),c=a.n(o),s=(a(49),a(1)),l=a(2),i=a(6),u=a(5),d=a(15),m=a(3),h=a(9),p=a.n(h),v="http://localhost:8080",b="http://localhost:8080/jpa",f=new(function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"executeBasicAuthService",value:function(e,t){return p.a.get("".concat(v,"/basicauth"),{headers:{authorization:this.createBasicAuthToken(e,t)}})}},{key:"createBasicAuthToken",value:function(e,t){return"Basic "+window.btoa(e+":"+t)}},{key:"createJWTToken",value:function(e){return"Bearer "+e}},{key:"executeJwtAuthService",value:function(e,t){return p.a.post("".concat(v,"/authenticate"),{username:e,password:t})}},{key:"registerSuccessfullLogin",value:function(e,t){sessionStorage.setItem("AuthenticatedUser",e),this.setupAxiosInterceptors(this.createBasicAuthToken(e,t))}},{key:"registerSuccessfullLoginForJwt",value:function(e,t){sessionStorage.setItem("AuthenticatedUser",e),this.setupAxiosInterceptors(this.createJWTToken(t))}},{key:"logout",value:function(){sessionStorage.removeItem("AuthenticatedUser")}},{key:"isUserLoggedIn",value:function(){return null!==sessionStorage.getItem("AuthenticatedUser")}},{key:"getUsername",value:function(){var e=sessionStorage.getItem("AuthenticatedUser");return null===e?"":e}},{key:"setupAxiosInterceptors",value:function(e){var t=this;p.a.interceptors.request.use((function(a){return t.isUserLoggedIn()&&(a.headers.authorization=e),a}))}}]),e}()),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=f.isUserLoggedIn();return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},r.a.createElement("div",null,r.a.createElement("a",{href:"http://www.in28minutes.com",className:"navbar-brand"},"in28Minutes")),r.a.createElement("ul",{className:"navbar-nav"},e&&r.a.createElement("li",null,r.a.createElement(d.b,{className:"nav-link",to:"/Welcome/alankrit"},"Home")),e&&r.a.createElement("li",null,r.a.createElement(d.b,{className:"nav-link",to:"/todos"},"Todos"))),r.a.createElement("ul",{className:"navbar-nav navbar-collapse justify-content-end"},!e&&r.a.createElement("li",null,r.a.createElement(d.b,{className:"nav-link",to:"/Login"},"Login")),e&&r.a.createElement("li",null,r.a.createElement(d.b,{className:"nav-link",to:"/Logout",onClick:f.logout},"Logout")))))}}]),a}(n.Component),E=Object(m.g)(g),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return f.isUserLoggedIn()?r.a.createElement(m.b,this.props):r.a.createElement(m.a,{to:"/Login"})}}]),a}(n.Component),O=a(41),y=a(8),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={username:"Alankrit",password:"",isInvalid:!1,isSuccess:!1},n.handleChange=n.handleChange.bind(Object(y.a)(n)),n.LoginClicked=n.LoginClicked.bind(Object(y.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"LoginClicked",value:function(){var e=this;f.executeJwtAuthService(this.state.username,this.state.password).then((function(t){f.registerSuccessfullLoginForJwt(e.state.username,t.data.token),e.props.history.push("/Welcome/".concat(e.state.username))})).catch((function(){e.props.history.push("/Login"),e.setState({isInvalid:!0}),e.setState({isSuccess:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("div",{className:"container"},"User Name: ",r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),"Password : ",r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),this.state.isInvalid&&r.a.createElement("div",{className:"alert alert-warning"},"Login Failed"),r.a.createElement("button",{className:"btn btn-success",onClick:this.LoginClicked},"Login")))}}]),a}(n.Component),C=new(function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"retrieveAllTodos",value:function(e){return p.a.get("".concat(b,"/users/").concat(e,"/todos"))}},{key:"deleteTodo",value:function(e,t){return p.a.delete("".concat(b,"/users/").concat(e,"/todos/").concat(t))}},{key:"updateTodo",value:function(e,t,a){return p.a.put("".concat(b,"/users/").concat(e,"/todos/").concat(t),a)}},{key:"addTodo",value:function(e,t){return p.a.post("".concat(b,"/users/").concat(e,"/todos/"),t)}},{key:"retrieveSingleTodo",value:function(e,t){return p.a.get("".concat(b,"/users/").concat(e,"/todos/").concat(t))}}]),e}()),S=a(20),w=a.n(S),T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={todos:[],message:null},e.deleteTodoClicked=e.deleteTodoClicked.bind(Object(y.a)(e)),e.refreshTodos=e.refreshTodos.bind(Object(y.a)(e)),e.updateTodoClicked=e.updateTodoClicked.bind(Object(y.a)(e)),e.addButtonClicked=e.addButtonClicked.bind(Object(y.a)(e)),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.refreshTodos()}},{key:"refreshTodos",value:function(){var e=this,t=f.getUsername();C.retrieveAllTodos(t).then((function(t){e.setState({todos:t.data})}))}},{key:"deleteTodoClicked",value:function(e){var t=this,a=f.getUsername();C.deleteTodo(a,e).then((function(a){t.setState({message:"Delete of ".concat(e," Successfull")}),t.refreshTodos()}))}},{key:"updateTodoClicked",value:function(e){this.props.history.push("/todos/".concat(e))}},{key:"addButtonClicked",value:function(){this.props.history.push("/todos/-1")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"List Todos"),this.state.message&&r.a.createElement("div",{className:"alert alert-success"},this.state.message),r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"IsDone"),r.a.createElement("th",null,"TargetDate"),r.a.createElement("th",null,"Update"),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,this.state.todos.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.done.toString()),r.a.createElement("td",null,w()(t.targetDate).format("DD-MM-YYYY")),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.updateTodoClicked(t.id)}},"Update")),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-warning",onClick:function(){return e.deleteTodoClicked(t.id)}},"Delete")))})))),r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.addButtonClicked()}},"Add"))))}}]),a}(n.Component),N=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",{className:"text-muted"},"All Rights Reserved 2018 @myFirstProject"))}}]),a}(n.Component),D=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"You are Logged Out"),r.a.createElement("div",{className:"container"},"Thank You for using Our Application."))}}]),a}(n.Component),A=new(function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"executeHelloWorldService",value:function(){return p.a.get("".concat(v,"/hello-world"))}},{key:"executeHelloWorldBeanService",value:function(){return p.a.get("".concat(v,"/hello-world-bean"))}},{key:"executeHelloWorldPathService",value:function(e){return p.a.get("".concat(v,"/hello-world-pathvariable/").concat(e))}}]),e}()),L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={welcomeMessage:""},n.retrieveWelcomeMsg=n.retrieveWelcomeMsg.bind(Object(y.a)(n)),n.handleSuccess=n.handleSuccess.bind(Object(y.a)(n)),n.handleError=n.handleError.bind(Object(y.a)(n)),n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome"),r.a.createElement("div",{className:"container"},this.state.errorMessage),r.a.createElement("div",{className:"container"},"HI ",this.props.match.params.name,". You can manage your TO-DOs ",r.a.createElement(d.b,{to:"/todos"},"Here")),r.a.createElement("div",{className:"container"},"Click Here to get Welcome Message",r.a.createElement("button",{onClick:this.retrieveWelcomeMsg,className:"btn btn-success"},"Get Welcome Message")),r.a.createElement("div",{className:"container"},this.state.welcomeMessage))}},{key:"retrieveWelcomeMsg",value:function(){var e=this;A.executeHelloWorldPathService(this.props.match.params.name).then((function(t){return e.handleSuccess(t)})).catch((function(t){return e.handleError(t)}))}},{key:"handleSuccess",value:function(e){this.setState({welcomeMessage:e.data.message})}},{key:"handleError",value:function(e){console.log(e.response);var t="";e.message&&(t+=e.message),e.response&&e.response.data&&(t+=e.response.data.message),this.setState({errorMessage:t})}}]),a}(n.Component),M=a(19),I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={id:n.props.match.params.id,description:"",targetDate:w()(new Date).format("YYYY-MM-DD")},n.onSubmit=n.onSubmit.bind(Object(y.a)(n)),n.validate=n.validate.bind(Object(y.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(-1!==this.state.id){var t=f.getUsername();C.retrieveSingleTodo(t,this.state.id).then((function(t){return e.setState({description:t.data.description,targetDate:w()(t.data.targetDate).format("YYYY-MM-DD")})}))}}},{key:"onSubmit",value:function(e){var t=this,a=f.getUsername();-1===this.state.id?C.addTodo(a,{id:this.state.id,description:e.description,targetDate:e.targetDate}).then((function(){return t.props.history.push("/todos")})):C.updateTodo(a,this.state.id,{id:this.state.id,description:e.description,targetDate:e.targetDate}).then((function(){return t.props.history.push("/todos")}))}},{key:"validate",value:function(e){var t={};return e.description?e.description.length<5&&(t.description="Enter atleast 5 Characters in Description"):t.description="Enter a Description",w()(e.targetDate).isValid()||(t.targetDate="Enter a valid Target Date"),t}},{key:"render",value:function(){var e=this.state,t=e.description,a=e.targetDate;return r.a.createElement("div",null,r.a.createElement("h1",null,"Todo"),r.a.createElement("div",{className:"container"},r.a.createElement(M.d,{initialValues:{description:t,targetDate:a},validateOnBlur:!1,validateOnChange:!1,onSubmit:this.onSubmit,validate:this.validate,enableReinitialize:!0},(function(e){return r.a.createElement(M.c,null,r.a.createElement(M.a,{name:"description",component:"div",className:"alert alert-warning"}),r.a.createElement(M.a,{name:"targetDate",component:"div",className:"alert alert-warning"}),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Description"),r.a.createElement(M.b,{className:"form-control",type:"text",name:"description"})),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("label",null,"Target Date"),r.a.createElement(M.b,{className:"form-control",type:"date",name:"targetDate"})),r.a.createElement("fieldset",null,r.a.createElement("button",{className:"btn btn-success",type:"submit"},"Save")))}))))}}]),a}(n.Component);function W(){return r.a.createElement("div",null,"An Error Occured!Contact Support.")}var U=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"TodoApp"},r.a.createElement(d.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,from:!0,component:j}),r.a.createElement(m.b,{path:"/login",from:!0,component:j}),r.a.createElement(k,{path:"/logout",from:!0,component:D}),r.a.createElement(k,{path:"/todos/:id",from:!0,component:I}),r.a.createElement(k,{path:"/Welcome/:name",from:!0,component:L}),r.a.createElement(k,{path:"/todos",from:!0,component:T}),r.a.createElement(m.b,{component:W})),r.a.createElement(N,null))))}}]),a}(n.Component),x=(a(73),a(74),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(U,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.8999d128.chunk.js.map