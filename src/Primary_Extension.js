class oscript extends HTMLElement{
    constructor() {
        super();
        this.style.display = "none";
        this.texty = this.innerHTML;
        this.execute = function() {
            var text = this.texty.split("\n");
            text.forEach(function(val,ind) {
                var quit = false;
                var trueval = val;
                while (quit==false) {
                    if (trueval[0]==" ") {
                        text[ind] = trueval.substr(1);
                        trueval = trueval.substr(1);
                    } else {
                        quit = true;
                    }
                }
            });
            text.forEach(function(val,ind) {
                if (val.substr(0,5)=="alert") {
                    var msg = val.substr(7,val.length-8);
                    alert(msg);
                } else if (val.substr(0,5)=="input") {
                    var msg = val.substr(7,val.length-8);
                    prompt(msg);
                }
            })
            
            console.log(text)
        }
    }
}
customElements.define("o-script",oscript);

var windoriginal8734 = window.setInterval;
window.setInterval = function(func,time) {
    var j = windoriginal8734(func,time);
    _.intervals.push(j);
}
var windclear8734 = window.clearInterval;
window.clearInterval = function(thing) {
    windclear8734(thing);
    var ind = _.intervals.indexOf(thing);
    _.intervals.splice(ind,1);
}
var _ = {
    newTag:function(name,construct) {
        if (construct!="_blank") {
            customElements.define(name,construct);
        } else {
            class blank extends HTMLElement {
                constructor() {
                    super();
                }
            }
            customElements.define(name,blank);
        }
    },
    grab: (id)=> {
        return document.getElementById(id);
    },
    get: (idthing)=>{
        if (idthing[0]=="#") {
            return document.getElementById(idthing.substr(1));
        } else if (idthing[0]=="."){
            return document.getElementsByClassName(idthing.substr(1));
        } else {
            return document.getElementsByTagName(idthing);
        }
    },
    onclick: (id,FUNCTlON)=> {
        document.getElementById(id).onclick = FUNCTlON;
        return true;
    },
    paramR: (Params_In_URL_Form)=> {
        self.location = document.URL + "?" + Params_In_URL_Form;
    },
    show: (id)=>{
        document.getElementById(id).style.display = "none";
    },
    hide: (id)=>{
        document.getElementById(id).style.display = "block";
    },
    page: (New_Location)=>{
        self.location = New_Location;
    },
    getCanvas: (id)=>{
        var CaNvAsObJeCt = document.getElementById(id);
        return CaNvAsObJeCt.getContext("2d");
    },
    VARS: {
        stringer: "",
        numberer:0,
    },
    intervals:[],
    getCamera:function(ID) {
        var video = document.getElementById(ID);
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true },{audio:true}).then(function(stream) {
                document.getElementById(ID).srcObject = stream;
                video.play();
            });
        }
    },
    encrypt:(e) =>{
        e = e.replace(/([A-z0-9])\1/g,function(match) {
            return match[1]+"%2";
        })
        if (e.length%2==0) {
            e = e.replace(/a/gi,"$#");
            e = e.replace(/b/gi,"^6");
            e = e.replace(/c/gi,"l=");
            e = e.replace(/d/gi,"_");
            e = e.replace(/e/gi,"@R");
            e = e.replace(/f/gi,"19*");
            e = e.replace(/g/gi,"#$");
            e = e.replace(/h/gi,"9#$");
            e = e.replace(/i/gi,"#%");
            e = e.replace(/j/gi,"@4");
            e = e.replace(/k/gi,"!1");
            e = e.replace(/l/gi,"*");
            e = e.replace(/m/gi,"1+");
            e = e.replace(/n/gi,"78");
            e = e.replace(/o/gi,"@80");
            e = e.replace(/p/gi,"$#*");
            e = e.replace(/q/gi,"78");
            e = e.replace(/r/gi,"a");
            e = e.replace(/s/gi,"x");
            e = e.replace(/t/gi,"j");
            e = e.replace(/u/gi,"&");
            e = e.replace(/v/gi,"^5");
            e = e.replace(/w/gi,"_");
            e = e.replace(/x/gi,"!@");
            e = e.replace(/y/gi,"!");
            e = e.replace(/z/gi,"_{}");
        } else if (e.length%3==0) {
            e = e.replace(/a/gi,"ui");
            e = e.replace(/b/gi,"#%");
            e = e.replace(/c/gi,"#$");
            e = e.replace(/d/gi,"#@");
            e = e.replace(/e/gi,"23$");
            e = e.replace(/f/gi,"19*");
            e = e.replace(/g/gi,"#$");
            e = e.replace(/h/gi,"^7");
            e = e.replace(/i/gi,"(9)");
            e = e.replace(/j/gi,"_");
            e = e.replace(/k/gi,"!1");
            e = e.replace(/l/gi,"*");
            e = e.replace(/m/gi,"1+");
            e = e.replace(/n/gi,"78");
            e = e.replace(/o/gi,"4%6@");
            e = e.replace(/p/gi,"*8");
            e = e.replace(/q/gi,"a");
            e = e.replace(/r/gi,"a");
            e = e.replace(/s/gi,"_");
            e = e.replace(/t/gi,"j");
            e = e.replace(/u/gi,"&");
            e = e.replace(/v/gi,"^5");
            e = e.replace(/w/gi,"=");
            e = e.replace(/x/gi,"!@");
            e = e.replace(/y/gi,"!d");
            e = e.replace(/z/gi,"!$*@");
        } else {
            e = e.replace(/a/gi,"ui");
            e = e.replace(/b/gi,"#%");
            e = e.replace(/c/gi,"#$");
            e = e.replace(/d/gi,"&&");
            e = e.replace(/e/gi,"g");
            e = e.replace(/f/gi,"h");
            e = e.replace(/g/gi,"i");
            e = e.replace(/h/gi,"^7");
            e = e.replace(/i/gi,"(9)");
            e = e.replace(/j/gi,"_");
            e = e.replace(/k/gi,"_");
            e = e.replace(/l/gi,"_");
            e = e.replace(/m/gi,"1+");
            e = e.replace(/n/gi,"87&");
            e = e.replace(/o/gi,"@");
            e = e.replace(/p/gi,"dd");
            e = e.replace(/q/gi,"()");
            e = e.replace(/r/gi,"a");
            e = e.replace(/s/gi,"x");
            e = e.replace(/t/gi,"j");
            e = e.replace(/u/gi,"&");
            e = e.replace(/v/gi,"^5");
            e = e.replace(/w/gi,"-+");
            e = e.replace(/x/gi,"!@");
            e = e.replace(/y/gi,"!d");
            e = e.replace(/z/gi,"!$*@");
        }
        e = e.replace(/\(/g,"[");
        e = e.replace(/\)/g,"]");
        e = e.replace(/\{/g,"(");
        e = e.replace(/\}/g,")");
        e = e.replace(/\[/g,"{");
        e = e.replace(/\]/g,"}");
        e = e.replace(/0/g,")");
        e = e.replace(/1/g,"!");
        e = e.replace(/2/g,"@");
        e = e.replace(/3/g,"#");
        e = e.replace(/4/g,"$");
        e = e.replace(/5/g,"%");
        e = e.replace(/6/g,"^");
        e = e.replace(/7/g,"&");
        e = e.replace(/8/g,"8");
        e = e.replace(/9/g,"(");
        if (/[a-m]/g.test(e[e.length-1])==true) {
            if (e[3]) {
                e = e.substring(0,2) + e.length + e.substring(3,e.length-1);
            } else {
                e = e.length;
            }
        } else {
            if (e[5]) {
                e = e.substring(0,4) + e.length + e.substring(5,e.length-1);
            } else {
                e = e.length;
            }
        };
        if ((e.length-1)%3==0) {
            e = e.substring((e.length-1)/3,(e.length-1)/3*2)+e.substring(0,(e.length-1)/3)+e.substring((e.length-1)/3*2,e.length-1); 
        } else if ((e.length-1)%2==0) {
            e = e.substring((e.length-1)/2,e.length-1)+e.substring(0,(e.length-1)/2)
        }
        e = e.replace(/ /g,"");
        return e;
    },
    superCrypt:(e) => {
        e = e.toLowerCase();
        if (e.length) {
            e = e.replace(/a/gi,"#&");
            e = e.replace(/b/gi,"(*");
            e = e.replace(/c/gi,"&(*#");
            e = e.replace(/d/gi,"!#");
            e = e.replace(/e/gi,"_");
            e = e.replace(/f/gi,"*$%*");
            e = e.replace(/g/gi,"%!$");
            e = e.replace(/h/gi,"$%!");
            e = e.replace(/i/gi,"#%");
            e = e.replace(/j/gi,"%!");
            e = e.replace(/k/gi,"$#");
            e = e.replace(/l/gi,"#!^%");
            e = e.replace(/m/gi,"$_#");
            e = e.replace(/n/gi,"g*");
            e = e.replace(/o/gi,"$g");
            e = e.replace(/p/gi,"*)_");
            e = e.replace(/q/gi,"h");
            e = e.replace(/r/gi,"$$");
            e = e.replace(/s/gi,"!#(");
            e = e.replace(/t/gi,"*");
            e = e.replace(/u/gi,"*");
            e = e.replace(/v/gi,"*)");
            e = e.replace(/w/gi,"@2");
            e = e.replace(/x/gi,"!@");
            e = e.replace(/y/gi,"*h^");
            e = e.replace(/z/gi,"^%_");
            e = e.replace(/1/gi,"_%^");
            e = e.replace(/2/gi,"@&*");
            e = e.replace(/3/gi,"*#@");
            e = e.replace(/4/gi,"(*)");
            e = e.replace(/5/gi,"#@");
            e = e.replace(/6/gi,")");
            e = e.replace(/7/gi,"&$@");
            e = e.replace(/8/gi,"_*");
            e = e.replace(/9/gi,"^)");
            e = e.replace(/0/gi,"^x");
        } else if (e.length > 14 && e.length < 30) {
            e = e.replace(/b/gi,"$#");//z
            e = e.replace(/e/gi,"^6");
            e = e.replace(/h/gi,"l=");
            e = e.replace(/j/gi,"_");
            e = e.replace(/i/gi,"@R");
            e = e.replace(/p/gi,"19*");
            e = e.replace(/w/gi,"#$");
            e = e.replace(/x/gi,"9#$");
            e = e.replace(/1/gi,"#%");
            e = e.replace(/k/gi,"@4");
            e = e.replace(/u/gi,"!1");
            e = e.replace(/n/gi,"*");
            e = e.replace(/4/gi,"1+");
            e = e.replace(/y/gi,"78");
            e = e.replace(/a/gi,"@80");
            e = e.replace(/5/gi,"$#*");
            e = e.replace(/6/gi,"78");
            e = e.replace(/s/gi,"a");
            e = e.replace(/c/gi,"x");
            e = e.replace(/3/gi,"j");
            e = e.replace(/2/gi,"&");
            e = e.replace(/9/gi,"^5");
            e = e.replace(/d/gi,"_");
            e = e.replace(/f/gi,"!@");
            e = e.replace(/7/gi,"!");
            e = e.replace(/l/gi,"_{}");
            e = e.replace(/8/gi,"_%^");
            e = e.replace(/g/gi,"@&*");
            e = e.replace(/m/gi,"*#@");
            e = e.replace(/o/gi,"(*)");
            e = e.replace(/q/gi,"#@");
            e = e.replace(/v/gi,")");
            e = e.replace(/t/gi,"&$@");
            e = e.replace(/r/gi,"_*");
            e = e.replace(/p/gi,"^)");
            e = e.replace(/z/gi,"$@");
            e = e.replace(/0/gi,"^x");
        } else {
            e = e.replace(/g/gi,"$#");
            e = e.replace(/h/gi,"^6");
            e = e.replace(/i/gi,"l=");
            e = e.replace(/j/gi,"_");
            e = e.replace(/k/gi,"@R");
            e = e.replace(/l/gi,"19*");
            e = e.replace(/m/gi,"#$");
            e = e.replace(/n/gi,"9#$");
            e = e.replace(/o/gi,"#%");
            e = e.replace(/p/gi,"@4");
            e = e.replace(/q/gi,"!1");
            e = e.replace(/r/gi,"*");
            e = e.replace(/s/gi,"1+");
            e = e.replace(/t/gi,"78");
            e = e.replace(/u/gi,"@80");
            e = e.replace(/v/gi,"$#*");
            e = e.replace(/w/gi,"78");
            e = e.replace(/x/gi,"a");
            e = e.replace(/y/gi,"x");
            e = e.replace(/z/gi,"j");
            e = e.replace(/1/gi,"&");
            e = e.replace(/2/gi,"^5");
            e = e.replace(/3/gi,"_");
            e = e.replace(/4/gi,"!@");
            e = e.replace(/5/gi,"!");
            e = e.replace(/6/gi,"_{}");
            e = e.replace(/7/gi,"_%^");
            e = e.replace(/8/gi,"@&*");
            e = e.replace(/9/gi,"*#@");
            e = e.replace(/0/gi,"(*)");
            e = e.replace(/a/gi,"#@");
            e = e.replace(/b/gi,")");
            e = e.replace(/c/gi,"&$@");
            e = e.replace(/d/gi,"_*");
            e = e.replace(/e/gi,"^)");
            e = e.replace(/f/gi,"^x");
        }
        e = e.split('');
        var returnable = '';
        e.forEach(function(value) {
            returnable += value.charCodeAt(0).toString(2);
        })
        return returnable;
    },
    editFile:(data,file)=>{
        var windOw;
        var data = document.getElementById("info").value;
        windOw = window.open("EditFile.php?data="+data+"&file="+file,"_blank","width=300,height=300");
        windOw.blur();
        document.getElementById("info").focus();
        setTimeout(closeWin,1000)
        function closeWin() {
            windOw.close();
        }
    },
    readFile: (file,functio)=>{
        var httpd = new XMLHttpRequest();
        httpd.onreadystatechange = function() {
            if (this.readyState == 4 && this.status==200) {
                functio(this.responseText)
            }
        }
        httpd.open("GET",file,true);
        httpd.send();
    },
    addup:function(...args) {
        var num = 0;
        args.forEach((e)=> {
            num+=e;
        })
        return num;
    },
    getAvailableCommands:function(towhat = false) {
        if (towhat==false) {
            console.log("-------------SECTION 1: THE _ OBJECT---------------");
            console.log("_.grab(elementID); Returns an HTML Element.");
            console.log("_.onclick(elementID,function); Runs 'function' when element is clicked on.");
            console.log("_.paramR(URLParameters); Reloads the document with URL parameters 'URLParameters'.");
            console.log("_.show(elementID); Sets an HTML element's display to 'block'.");
            console.log("_.hide(elementID); Sets an HTML element's display to 'none'.");
            console.log("_.page(location); Goes to a different location. EX: _.page('html2.html');");
            console.log("_.getCanvas(elementID); Returns an HTML Canvas.");
            console.log("_.intervals; Returns all the intervals currently running.");
            console.log("_.encrypt(message); Encrypts a string to a line of gibberish.");
            console.log("_.getAvailableCommands(console?); If console? is false (default), then this message is displayed. Otherwise it will return the contents of this message to the caller.");
            console.log("_.readFile(file,function); Reads a file and returns the file contents as a parameter to 'function'.");
            console.log("_.addup(num1,num2,num3...); Returns all the arguments added up. EX: '_.addup(1,2,3,4,5,6,7,8,9);' returns 45.");
            console.log("-----------SECTION 2: THE __ FUNCTION---------------");
            console.log("__(string).subs(Start,End); Returns a new substring from index 'Start' to index 'End'.");
            console.log("__(string).raise(); Returns a the string in all capitals.");
            console.log("__(string).lower(); Returns a the string in all lowercase.");
            console.log("__(number).random(); Returns a random number from 0 to 'number'.");
            console.log("__(number).test(); Returns -1 if the number is negative, 1 if positive, 0 if positive 0, -0 if negative 0.");
            console.log("__(#elemID).onclick(function); Runs 'function' when HTML element 'elemID' is clicked.");
            console.log("__(#elemID).show(); Sets HTML element 'elemID' to display:block.");
            console.log("__(#elemID).hide(); Sets HTML element 'elemID' to display:none.");
            console.log("__(#elemID).animation(anim,seconds,times); Sets HTML element 'elemID' to a certain animation.");
            console.log("__(#elemID).style(option,style); Styles HTML element 'elemID'. EX: __(#myparagraph).style('color','blue');");
        } else {
            return ["-------------SECTION 1: THE _ OBJECT---------------","_.grab(elementID); Returns an HTML Element.","_.onclick(elementID,function); Runs 'function' when element is clicked on.","_.paramR(URLParameters); Reloads the document with URL parameters 'URLParameters'.",
            "_.show(elementID); Sets an HTML element's display to 'block'.","_.hide(elementID); Sets an HTML element's display to 'none'.","_.page(location); Goes to a different location. EX: _.page('html2.html');","_.getCanvas(elementID); Returns an HTML Canvas.",
            "_.intervals; Returns all the intervals currently running.","_.encrypt(message); Encrypts a string to a line of gibberish.","_.getAvailableCommands(console?); If console? is false (default), then this message is displayed. Otherwise it will return the contents of this message to the caller.",
            "_.readFile(file,function); Reads a file and returns the file contents as a parameter to 'function'.","_.addup(num1,num2,num3...); Returns all the arguments added up. EX: '_.addup(1,2,3,4,5,6,7,8,9);' returns 45.","-----------SECTION 2: THE __ FUNCTION---------------","__(string).subs(Start,End); Returns a new substring from index 'Start' to index 'End'.",
            "__(string).raise(); Returns a string in all capitals.","__(string).lower(); Returns a string in all lowercase.","__(number).random(); Returns a random number from 0 to 'number'.","__(number).test(); Returns -1 if the number is negative, 1 if positive, 0 if positive 0, -0 if negative 0.",
            "__(#elemID).onclick(function); Runs 'function' when HTML element 'elemID' is clicked.","__(#elemID).show(); Sets HTML element 'elemID' to display:block.","__(#elemID).hide(); Sets HTML element 'elemID' to display:none.",
            "__(#elemID).animation(anim,seconds,times); Sets HTML element 'elemID' to a certain animation.","__(#elemID).style(option,style); Styles HTML element 'elemID'. EX: __(#myparagraph).style('color','blue');"]
        }
    },
    fileToUse:"none",
    get file() {
        var returnval;
        if (this.files!="none") {
            var httpd = new XMLHttpRequest();
            httpd.onreadystatechange = function() {
                if (this.readyState == 4 && this.status==200) {
                    return this.responseText;
                }
            }
            httpd.open("GET",this.fileToUse,true);
            httpd.send();
        } else {
            returnval = "Error: No file selected."
        }
    }
}
function subs(START_POS,END_POS) {
    _.VARS.stringer = _.VARS.stringer.substr(START_POS,END_POS-START_POS+1);
    return _.VARS.stringer;
}
function raise() {
    _.VARS.stringer = _.VARS.stringer.toUpperCase();
    return _.VARS.stringer;
}
function lower() {
    _.VARS.stringer = _.VARS.stringer.toLowerCase();
    return _.VARS.stringer;
}
function __(string) {
    if (string[0]=="#") {
        _.VARS.stringer = string.substr(1,string.length-1);
        return {onclick:onclick,show:show,hide:hide,anim:anim,style:style}
    } else if (typeof string=="string") {
    _.VARS.stringer = string;
    return {subs:subs,raise:raise,lower:lower};
    } else if (typeof string=="number") {
        _.VARS.numberer = string;
        return {random:random,test:test}
    }
}
function random() {
    return Math.floor(Math.random()*_.VARS.numberer);
}
function test() {
    return Math.sign(_.VARS.numberer);
}
function onclick(func) {
    document.getElementById(_.VARS.stringer).onclick = func;
}
function show() {
    document.getElementById(_.VARS.stringer).style.display = "block";
}
function hide() {
    document.getElementById(_.VARS.stringer).style.display = "none";
}
function anim(animation,seconds,times) {
    document.getElementById(_.VARS.stringer).style.animation = animation + " " + seconds + " " + times;
}
function value(){
    return document.getElementById(_.VARS.stringer).value;
}
function style(option,style) {
    document.getElementById(_.VARS.stringer).style[option] = style;
}
function fileAPI() {
    this.editFile = (data,file)=>{
        var windOw;
        var data = document.getElementById("info").value;
        windOw = window.open("EditFile.php?data="+data+"&file="+file,"_blank","width=300,height=300,left=1000,top=0");
        windOw.blur();
        document.getElementById("info").focus();
        setTimeout(closeWin,1000)
        function closeWin() {
            windOw.close();
        }
    }
    this.readFile = (file,functio)=>{
        var httpd = new XMLHttpRequest();
        httpd.onreadystatechange = function() {
            if (this.readyState == 4 && this.status==200) {
                functio(this.responseText)
            }
        }
        httpd.open("GET",file,true);
        httpd.send();
    }
}