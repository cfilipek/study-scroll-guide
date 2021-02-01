(this["webpackJsonpstudy-scroll-guide"]=this["webpackJsonpstudy-scroll-guide"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/big-o-graph.9c24f10d.png"},18:function(e,t,a){e.exports=a(34)},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(14),o=a.n(i),s=a(3),l=a(4),c=a(6),h=a(8),u=a(2),p=a(12),m=function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).onClick=function(){r.setState((function(e){return{isOpen:!e.isOpen}}))},r.onClickOption=function(e){var t=r.props.object,a=e.currentTarget.dataset.value;r.setState((function(e){return{values:[a],isOpen:!1}}));var n=t.indexOf(a);r.props.onSelect(a),document.location="/study-scroll-guide/#scrollama-".concat(n)},r.stopPropagation=function(e){e.stopPropagation()},r.renderValues=function(){var e=r.props.placeholder,t=r.state.values;return 0===t.length||!1===r.state.isOpen?n.a.createElement("div",{className:"placeholder"},e):n.a.createElement("div",{className:"value"},t[0])},r.renderOptions=function(){var e=r.props.options;return r.state.isOpen?n.a.createElement("div",{className:"options"},e.map(r.renderOption)):null},r.renderOption=function(e,t){var a="option";return r.props.options.includes(e)&&(a+=" selected"),n.a.createElement("div",{key:e,"data-value":e,className:a,onMouseOver:r.onHoverOption,onClick:r.onClickOption},e)},r.state={isOpen:!1,typed:"",values:[]},r}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.label,t=this.state.isOpen;return n.a.createElement("div",{className:"select",tabIndex:"0"},n.a.createElement("label",{className:"label"},e),n.a.createElement("div",{className:"selection",onClick:this.onClick},this.renderValues(),n.a.createElement("span",{className:"arrow"},t?n.a.createElement(f,null):n.a.createElement(d,null))),this.renderOptions())}}]),a}(r.Component),d=function(){return n.a.createElement("svg",{viewBox:"0 0 10 7"},n.a.createElement("path",{d:"M2.08578644,6.5 C1.69526215,6.89052429 1.69526215,7.52368927 2.08578644,7.91421356 C2.47631073,8.30473785 3.10947571,8.30473785 3.5,7.91421356 L8.20710678,3.20710678 L3.5,-1.5 C3.10947571,-1.89052429 2.47631073,-1.89052429 2.08578644,-1.5 C1.69526215,-1.10947571 1.69526215,-0.476310729 2.08578644,-0.0857864376 L5.37867966,3.20710678 L2.08578644,6.5 Z",transform:"translate(5.000000, 3.207107) rotate(90.000000) translate(-5.000000, -3.207107) "}))},f=function(){return n.a.createElement("svg",{viewBox:"0 0 10 8"},n.a.createElement("path",{d:"M2.08578644,7.29289322 C1.69526215,7.68341751 1.69526215,8.31658249 2.08578644,8.70710678 C2.47631073,9.09763107 3.10947571,9.09763107 3.5,8.70710678 L8.20710678,4 L3.5,-0.707106781 C3.10947571,-1.09763107 2.47631073,-1.09763107 2.08578644,-0.707106781 C1.69526215,-0.316582489 1.69526215,0.316582489 2.08578644,0.707106781 L5.37867966,4 L2.08578644,7.29289322 Z",transform:"translate(5.000000, 4.000000) rotate(-90.000000) translate(-5.000000, -4.000000) "}))},g=m,y=a(36),b=a(37),v=a(7),k=Object(u.a)({header:{display:"flex",justifyContent:"space-between"},scroller:{backgroundColor:"#000000",color:"#ffffff",padding:"6.5rem 0rem",display:"flex",flexBasis:"unset",width:"20rem",justifyContent:"space-around",fontWeight:"400","& p":{fontSize:"1rem",marginLeft:"-4.5rem"}},graphic:{flexBasis:"100%",position:"sticky",width:"inherit",height:"100vh",alignSelf:"flex-start",backgroundColor:"#ffffff",padding:"5rem 0","& h2":{fontSize:"2rem",color:"#000000",textTransform:"uppercase",fontWeight:"700"},"& h6":{fontWeight:"400"},"& h4":{fontWeight:"400"}},contentContainer:{padding:"0 10%"},headerInfo:{margin:"4rem 0"},"@media screen and (max-width: 768px)":{scroller:{flexBasis:"unset",marginLeft:"0",width:"1rem","& p":{display:"none"}},graphic:{flexBasis:"100%"}},socialIcon:{padding:"10px !important",marginTop:"8px",marginLeft:"8px"},titleContainer:{display:"inline-flex"}})((function(e){var t=e.classes,a=(e.children,e.steps),r=e.object,i=e.onSelect,o=e.handleClick;return n.a.createElement("div",{className:t.header},n.a.createElement("div",{className:t.scroller},n.a.createElement("p",null,"Introduction")),n.a.createElement("div",{className:t.graphic},n.a.createElement("div",{className:t.contentContainer},n.a.createElement("div",{className:t.titleContainer},n.a.createElement("h2",null,"Mastering the coding interview"),n.a.createElement(y.a,{url:"http://clairefilipek.com/#/",title:"Mastering The Coding Interview Parallax Guide",via:"iloveclair",hashtags:[],className:t.socialIcon},n.a.createElement(b.a,{size:32,round:!0}))),n.a.createElement("h6",null,"compiled, created, and built by"," ",n.a.createElement("a",{href:"http://clairefilipek.com/",target:"_blank",rel:"noopener noreferrer"},"Claire Filipek")),n.a.createElement("h4",{className:t.headerInfo},"This is primarily a JavaScript/CS resource.",n.a.createElement("br",null),n.a.createElement("br",null),"I created this project to help myself study and become the best programmer that I can be. If this is helpful to you, great, and if not or you see an area of improvement feel free to reach out. It, as we all are, is a work in progress."),n.a.createElement(g,{label:"Prioritize a section",placeholder:"Pick one or simply scroll:",options:a,object:r,onSelect:i,handleClick:o}))))})),w=a(17),O={"What you need to know":{title:"What you need to know",information:"A brief overview of necessary knowledge provided my Gayle Laakmann McDowell [Cracking the Coding Skills]. See source section for link. Hopefully this guide will provide resources and aid in your endeavor to master these concepts.",steps:[{title:"Data Structures",info:"Hash Tables, Linked Lists, Stacks, Queues, Trees, Tries, Graphs, Vectors, Heaps"},{title:"Algorithms",info:"Quick Sort, Merge Sort, Binary Search, Breadth-First Search, Depth-First Search"},{title:"Concepts",info:"Big-O Time, Big-O Space, Recursion and Memoization, Probability, Bit Manipulation"}]},"Answering a Question":{title:"Answering a Question",information:"On an interview where you are asked to demonstrate your coding abilities it can be helpful to break this process into steps (knowledge provided my Gayle Laakmann McDowell [Cracking the Coding Skills]. See source section for link):",steps:[{title:"Listen",info:"Pay very close attention to any info in the problem description. And ask questions if you require clarity."},{title:"Example",info:"Most examples are too small or are special cases. Debug your example! Is this a special case/is it broad enough?"},{title:"Brute Force",info:"Get a brute-force solution as soon as possible. State a naive algorithm and its run time, then optimize from there. Remember you are not coding yet, just talking out possibilities."},{title:"Optimize",info:'Look for any unused info. You usually need all information in a problem. Solve it "incorrectly" and then think about why it fails. Make a time vs. space tradeoff. Continue to talk this all out and make sure you understand each detail before you start coding.'},{title:"Implement",info:"Your goal is to write BEAUTIFUL CODE. Modulariaze your code from the beginning and refactor anything that is not beautiful."},{title:"Test",info:"Walk through your code like you would for a detailed code review. All cases including special cases and edge cases. And when you find bugs, carefully fix them!"},{title:"Do not",info:'Do not ignore information given (it is there for a reason). Do not try to solve problems in your head. Use an example! Do not push through code when confused. Stop and think. Get the interviewer "sign off" before diving into code.'}]},"First Quiz":{title:"First Quiz",information:"This is an intruductory quiz. Let's gage where you are in your coding journey. Questions and then answer sections will be back to back.",sections:["First Quiz: String Reversal"]},"First Quiz: String Reversal":{title:"First Quiz: String Reversal",information:"Return a string in reverse. Example: reverseString('hello') === 'olleh'",problem:1,name:"String Reversal",repl:"https://repl.it/@cfilipek/ProbOneReverseString"},"First Quiz: String Reversal- Answer":{title:"First Quiz: String Reversal- Answer",information:"Here are five different answers to the string reversal problem. If you solved the problem a different way that is fine too.",problem:1,name:"String Reversal Answers",repl:"https://repl.it/@cfilipek/ProbOneReverseStringAnswer"},"Big 0":{title:"Big O Notation",information:"This is information about big 0. I'm baby gluten-free bespoke before they sold out aesthetic. Ramps skateboard cred, freegan sriracha typewriter tbh pug tacos portland 90's flannel leggings try-hard gentrify. Hexagon distillery shoreditch, freegan shabby chic locavore photo booth meh poutine. Cray DIY celiac salvia letterpress paleo helvetica kombucha YOLO health goth yuccie etsy echo park swag fashion axe. YOLO iPhone tofu kale chips ugh XOXO enamel pin hella freegan DIY. Fanny pack hella etsy sustainable PBR&B taxidermy everyday carry shabby chic lumbersexual. Wayfarers pop-up plaid snackwave, slow-carb put a bird on it whatever synth gentrify wolf kale chips adaptogen pinterest sriracha vinyl.",sections:["Big 0 Introduction","Big 0 Part 1","Big 0 Quiz"]},"Big 0 Introduction":{title:"Big O Introduction",image:a.n(w).a,imageSource:"https://www.bigocheatsheet.com/",information:"This is information about big 0. I'm baby gluten-free bespoke before they sold out aesthetic. Ramps skateboard cred, freegan sriracha typewriter tbh pug tacos portland 90's flannel leggings try-hard gentrify. Hexagon distillery shoreditch, freegan shabby chic locavore photo booth meh poutine. Cray DIY celiac salvia letterpress paleo helvetica kombucha YOLO health goth yuccie etsy echo park swag fashion axe. YOLO iPhone tofu kale chips ugh XOXO enamel pin hella freegan DIY. Fanny pack hella etsy sustainable PBR&B taxidermy everyday carry shabby chic lumbersexual. Wayfarers pop-up plaid snackwave, slow-carb put a bird on it whatever synth gentrify wolf kale chips adaptogen pinterest sriracha vinyl."},"Big 0 Part 1":{title:"Big O Part 1",information:"This is information about big 0. I'm baby gluten-free bespoke before they sold out aesthetic. Ramps skateboard cred, freegan sriracha typewriter tbh pug tacos portland 90's flannel leggings try-hard gentrify. Hexagon distillery shoreditch, freegan shabby chic locavore photo booth meh poutine. Cray DIY celiac salvia letterpress paleo helvetica kombucha YOLO health goth yuccie etsy echo park swag fashion axe. YOLO iPhone tofu kale chips ugh XOXO enamel pin hella freegan DIY. Fanny pack hella etsy sustainable PBR&B taxidermy everyday carry shabby chic lumbersexual. Wayfarers pop-up plaid snackwave, slow-carb put a bird on it whatever synth gentrify wolf kale chips adaptogen pinterest sriracha vinyl."},"Big 0 Quiz":{title:"Big O Quiz",information:"This is information about big 0. I'm baby gluten-free bespoke before they sold out aesthetic. Ramps skateboard cred, freegan sriracha typewriter tbh pug tacos portland 90's flannel leggings try-hard gentrify. Hexagon distillery shoreditch, freegan shabby chic locavore photo booth meh poutine. Cray DIY celiac salvia letterpress paleo helvetica kombucha YOLO health goth yuccie etsy echo park swag fashion axe. YOLO iPhone tofu kale chips ugh XOXO enamel pin hella freegan DIY. Fanny pack hella etsy sustainable PBR&B taxidermy everyday carry shabby chic lumbersexual. Wayfarers pop-up plaid snackwave, slow-carb put a bird on it whatever synth gentrify wolf kale chips adaptogen pinterest sriracha vinyl."},"Data Structures":{title:"Data Structures",information:"This is information about data structures. I'm baby gluten-free bespoke before they sold out aesthetic. Ramps skateboard cred, freegan sriracha typewriter tbh pug tacos portland 90's flannel leggings try-hard gentrify. Hexagon distillery shoreditch, freegan shabby chic locavore photo booth meh poutine. Cray DIY celiac salvia letterpress paleo helvetica kombucha YOLO health goth yuccie etsy echo park swag fashion axe. YOLO iPhone tofu kale chips ugh XOXO enamel pin hella freegan DIY. Fanny pack hella etsy sustainable PBR&B taxidermy everyday carry shabby chic lumbersexual. Wayfarers pop-up plaid snackwave, slow-carb put a bird on it whatever synth gentrify wolf kale chips adaptogen pinterest sriracha vinyl."},"Data Structures 2":{title:"Data Structures 2",information:"This is information about data structures. I'm baby gluten-free bespoke before they sold out aesthetic. Ramps skateboard cred, freegan sriracha typewriter tbh pug tacos portland 90's flannel leggings try-hard gentrify. Hexagon distillery shoreditch, freegan shabby chic locavore photo booth meh poutine. Cray DIY celiac salvia letterpress paleo helvetica kombucha YOLO health goth yuccie etsy echo park swag fashion axe. YOLO iPhone tofu kale chips ugh XOXO enamel pin hella freegan DIY. Fanny pack hella etsy sustainable PBR&B taxidermy everyday carry shabby chic lumbersexual. Wayfarers pop-up plaid snackwave, slow-carb put a bird on it whatever synth gentrify wolf kale chips adaptogen pinterest sriracha vinyl."},Sources:{title:"Sources",information:"Here are the sources used to create this guide (in no particular order):",sources:[{source:"Trekhleb. \u201cTrekhleb/Javascript-Algorithms.\u201d GitHub, December 7, 2019.",link:"https://github.com/trekhleb/javascript-algorithms"},{source:"Steele, Colt. \u201cJavaScript (JS) Algorithms and Data Structures Masterclass.\u201d Udemy. Udemy, November 2018.",link:"https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass."},{source:'McDowell, Gayle Laakmann. "Cracking the Coding Interview: 189 Programming Questions and Solutions". Palo Alto, CA: CareerCup, LLC, 2019.',link:"http://www.crackingthecodinginterview.com/"}]},Fin:{title:"Fin",information:"You made it to the end!"}},E=(a(33),Object(u.a)({})((function(e){var t=e.problem,a=e.link,i=e.name,o='<iframe height="500px" style="width: 100%;" scrolling="no" title='.concat(i," src=").concat(a,'?lite=true frameborder="0" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"/>'),s=Object(r.useState)(!0),l=Object(v.a)(s,2),c=l[0],h=l[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){return h(!1)}),1500);return function(){clearTimeout(e)}}),[]),n.a.createElement("div",null,n.a.createElement("h4",null,"Challenge ",t,": ",i),c?n.a.createElement("div",{class:"lds-facebook"},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null)):n.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}}))}))),S=Object(u.a)({card:{},infoContainer:{padding:"1rem 10%",height:"30rem","& h4":{fontFamily:"'Roboto', sans- serif",fontWeight:"400",lineHeight:"1.5rem"}},image:{maxWidth:"80%"},section:{cursor:"pointer",textDecoration:"underline"},steps:{fontFamily:"'Roboto Mono', monospace",fontWeight:"700"}})((function(e){var t=e.classes,a=(e.children,e.data),r=e.steps,i=e.onSelect;return a?n.a.createElement("div",{className:t.card},n.a.createElement("div",{className:t.infoContainer},n.a.createElement("h2",null,a.title),a.image&&n.a.createElement("div",null,n.a.createElement("img",{className:t.image,src:a.image,alt:a.title}),n.a.createElement("h6",null,n.a.createElement("a",{href:a.imageSource,target:"_blank",rel:"noopener noreferrer"},"Image Source"))),n.a.createElement("h4",null,a.information),a.steps&&a.steps.map((function(e,a){return n.a.createElement("h4",{key:"steps-".concat(a)},n.a.createElement("span",{className:t.steps},a+1,". ",e.title,":"," ")," ",e.info)})),a.repl&&n.a.createElement(E,{problem:a.problem,name:a.name,link:a.repl}),a.sections&&n.a.createElement("div",null,n.a.createElement("h3",null,"Sections:"),a.sections.map((function(e,a){return n.a.createElement("div",{className:t.section,key:e,onClick:function(){return function(e,t){i(e),document.location="/#scrollama-".concat(t)}(e,r.indexOf(e))}},n.a.createElement("h4",{key:"section-".concat(a)},e))}))),a.sources&&a.sources.map((function(e,t){return n.a.createElement("h5",{key:"source-".concat(t)},e.source," ",n.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.link))})))):n.a.createElement("div",{className:t.card},n.a.createElement("div",{className:t.infoContainer},n.a.createElement("h2",null,"Keep Scrolling...")))})),x=function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={data:0,keys:["Big 0","Data Structures","Sources","Fin"],steps:Object.keys(O),progress:0,value:null},e.onSelect=function(t){e.setState({data:t})},e.onStepEnter=function(t){var a=t.data;e.setState({data:a})},e.onStepProgress=function(t){t.element;var a=t.progress;console.log(a,"progress"),e.setState({progress:a})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.steps,r=(e.progress,e.keys),i=this.props.classes;return n.a.createElement("div",{className:i.app},n.a.createElement(k,{steps:r,object:a,onSelect:this.onSelect}),n.a.createElement("div",{className:i.graphicContainer},n.a.createElement("div",{className:i.scroller},n.a.createElement(p.a,{onStepEnter:this.onStepEnter,onStepExit:this.onStepExit,progress:!0,onStepProgress:this.onStepProgress,offset:-.2},a.map((function(e){return n.a.createElement(p.b,{data:e,key:e},n.a.createElement("div",{className:i.step},n.a.createElement("p",null,e)))})))),n.a.createElement("div",{className:i.graphic},n.a.createElement(S,{steps:a,data:O[t],onSelect:this.onSelect}))))}}]),a}(r.PureComponent),C=Object(u.a)({app:{display:"grid",backgroundColor:"#000000",fontFamily:"'Roboto Mono', monospace"},graphicContainer:{display:"flex",justifyContent:"space-between"},graphic:{overflowY:"scroll",height:"100vh",flexBasis:"100%",position:"sticky",width:"100%",top:"0",alignSelf:"flex-start",backgroundColor:"#ffffff","& p":{fontSize:"5rem",textAlign:"center",color:"#000000"}},scroller:{flexBasis:"unset",width:"20rem",backgroundColor:"#000000",color:"#ffffff"},step:{margin:"0 auto 2rem auto",paddingTop:200,paddingBottom:200,"& p":{padding:"1rem 2rem",fontSize:"1rem"},"&:last-child":{marginBottom:0}},"@media screen and (max-width: 768px)":{scroller:{flexBasis:"unset",width:"1rem"},graphic:{flexBasis:"100%"}}})(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.31e589c2.chunk.js.map