var oldvalue='';
var isequalclicked=false;
var isdotclicked=false;
var isoperatorclicked=false;
function calculator(val)
{
    isoperatorclicked=false;
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
    //console.log(oldvalue)
}
function operator(v)
{
    isdotclicked=false;
    if(isoperatorclicked)
    {
        document.getElementById("text").value=document.getElementById("text").value.slice(0,-1)+v;
        oldvalue=oldvalue.slice(0,-1)+v;
    }
    else if(isequalclicked){
        document.getElementById('text').value=document.getElementById('text1').value+v;
    oldvalue=document.getElementById('text1').value+v;
    document.getElementById('text1').value=''
    isequalclicked=false;
    }
    else if(v=='%'){
document.getElementById("text").value+=v;
oldvalue=oldvalue+'/100*';
document.getElementById("text1").value=''
}
else if(v=='*')
{
    document.getElementById("text").value=oldvalue+'x'
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
        console.log(oldvalue)
    }
    isdotclicked=false;
    isequalclicked=true;
    var result = eval(oldvalue);
    document.getElementById("text1").value=result;
    document.getElementById("text").value=''
    //console.log(oldvalue)
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
    if(document.getElementById('text1').value=='0')
    {
        document.getElementById('text1').value='0';
        document.getElementById('text').value=oldvalue;
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
    document.getElementById('text').value=document.getElementById('text').value.slice(0,-1)
    document.getElementById('text1').value=document.getElementById('text1').value.slice(0,-1)
    oldvalue=oldvalue.slice(0,-1)
}