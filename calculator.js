var oldvalue='';
var isequalclicked=false;
var isdotclicked=false;
var isoperatorclicked=false;
function calculator(val)
{
    if(isequalclicked)
    {
        isequalclicked=false;
        oldvalue=''
        document.getElementById("text").value=''
        document.getElementById("text1").value=''
    }
    
    document.getElementById("text").value+=val;
    document.getElementById("text1").value+=val;
    oldvalue+=val;
   isoperatorclicked=false;
}
function operator(v)
{
    isdotclicked=false;
    if(isoperatorclicked)
    {
        if(v==='*'){
            document.getElementById("text").value=document.getElementById("text").value.slice(0,-1)+'x'
            oldvalue=oldvalue.slice(0,-1)+v;
        }
        else{
        document.getElementById("text").value=document.getElementById("text").value.slice(0,-1)+v;
        oldvalue=oldvalue.slice(0,-1)+v;
    }
}
    else if(isequalclicked){
        if(v==='*'){
            document.getElementById("text").value=document.getElementById("text1").value+'x'
            oldvalue=document.getElementById('text1').value+v;
            document.getElementById('text1').value=''
            isequalclicked=false;
        }
        else{
        document.getElementById('text').value=document.getElementById('text1').value+v;
    oldvalue=document.getElementById('text1').value+v;
    document.getElementById('text1').value=''
    isequalclicked=false;
    }
}
    else if(v=='%'){
document.getElementById("text").value+=v;
oldvalue=oldvalue+'/100*';
document.getElementById("text1").value=''
}
else if(v=='*')
{
    document.getElementById("text").value=document.getElementById("text").value+'x'
    oldvalue=oldvalue+v;
    document.getElementById("text1").value=''
}
else{
    document.getElementById("text").value+=v;
    oldvalue+=v;
document.getElementById("text1").value=''
}
isoperatorclicked=true;
}
function equalclick()
{
    if(isoperatorclicked)
    {
        document.getElementById('text').value=document.getElementById('text').value.slice(0,-1)
        oldvalue=oldvalue.slice(0,-1)
       
    }
    isdotclicked=false;
    isequalclicked=true;
    var result = eval(oldvalue);
    document.getElementById("text1").value=result;
    document.getElementById("text").value=''
    
    isoperatorclicked=false;
}
function clearall()
{
    isoperatorclicked=false;
    isdotclicked=false;
    document.getElementById("text1").value=''
    document.getElementById("text").value=''
    oldvalue=''
}
function dot(dots)
{
    isoperatorclicked=false;
    if(isequalclicked){
        document.getElementById('text1').value=''
        oldvalue='';
        isequalclicked=false;
    }
    if(isdotclicked==false)
    {
    document.getElementById('text').value+=dots;
    document.getElementById('text1').value+=dots;
    oldvalue+=dots;
    isdotclicked=true;
    }
}
function zero(zero){
    isoperatorclicked=false;
    if(isequalclicked)
    {
        isequalclicked=false;
        oldvalue=''
        document.getElementById("text").value=''
        document.getElementById("text1").value=''
    }
    if(document.getElementById('text1').value=='')
    {
        document.getElementById('text1').value='';
    }
    else{
document.getElementById('text').value+=zero;
document.getElementById('text1').value+=zero;
oldvalue+=zero;
    }
}
function clearscreen()
{
    isoperatorclicked=false;
    if(oldvalue.charAt(oldvalue.length-1)==='.')
    isdotclicked=false;
    if(document.getElementById('text').value[document.getElementById('text').value.length-2]==='+'){
        isoperatorclicked=true;
    }
    if(document.getElementById('text').value[document.getElementById('text').value.length-2]==='-'){
        isoperatorclicked=true;
    }
    if(document.getElementById('text').value[document.getElementById('text').value.length-2]==='*'){
        isoperatorclicked=true;
    }
    if(document.getElementById('text').value[document.getElementById('text').value.length-2]==='/'){
        isoperatorclicked=true;
    }
    if(document.getElementById('text').value[document.getElementById('text').value.length-2]==='%'){
        isoperatorclicked=true;
    }
    if(oldvalue[oldvalue.length-1]=='+')
    {
   var dummy=oldvalue.split(/[^0-9\.]+/)
  
    document.getElementById('text1').value=dummy[dummy.length-2]
    document.getElementById('text').value=document.getElementById('text').value.slice(0,-1)
    oldvalue=oldvalue.slice(0,-1)
}
   else if(oldvalue[oldvalue.length-1]=='-')
    {
   var dummy=oldvalue.split(/[^0-9\.]+/)
  
    document.getElementById('text1').value=dummy[dummy.length-2]
    document.getElementById('text').value=document.getElementById('text').value.slice(0,-1)
    oldvalue=oldvalue.slice(0,-1)
    }
    else if(document.getElementById('text').value[document.getElementById('text').value.length-1]=='x')
    {
   var dummy=oldvalue.split(/[^0-9\.]+/)
   console.log(dummy[dummy.length-2])
    document.getElementById('text1').value=dummy[dummy.length-2]
    document.getElementById('text').value=document.getElementById('text').value.slice(0,-1)
    oldvalue=oldvalue.slice(0,-1)
    }
    else if(oldvalue[oldvalue.length-1]=='/')
    {
   var dummy=oldvalue.split(/[^0-9\.]+/)
   console.log(dummy[dummy.length-2])
    document.getElementById('text1').value=dummy[dummy.length-2]
    document.getElementById('text').value=document.getElementById('text').value.slice(0,-1)
    oldvalue=oldvalue.slice(0,-1)
    }
    else if(document.getElementById('text').value[document.getElementById('text').value.length-1]=='%')
    {
   var dummy=document.getElementById('text').value.split(/[^0-9\.]+/)
   //console.log(dummy)
    document.getElementById('text1').value=dummy[dummy.length-2]
    document.getElementById('text').value=document.getElementById('text').value.slice(0,-1)
    oldvalue=oldvalue.slice(0,-1)
    }
    else{
    document.getElementById('text1').value=document.getElementById('text1').value.slice(0,-1)
    document.getElementById('text').value=document.getElementById('text').value.slice(0,-1)
    oldvalue=oldvalue.slice(0,-1)
}
}
