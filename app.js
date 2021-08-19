var privacyNotice=document.querySelector("#remove");
var privacyDiv=document.querySelector(".main-privacy");

var userName=document.querySelector("#name");
var date=document.querySelector("#dob");
var ln=document.querySelector("#luckynumber");

var goodluck=document.querySelector(".lucky-div");
var goodluckMsg=document.querySelector("#main-msg-luck");
var badluck=document.querySelector(".unlucky-div");
var badluckMsg=document.querySelector("#main-msg-unluck");
var badluckImg=document.querySelector("#image-unluck");

var submitIco=document.querySelector("#btn-submit");
var form=document.querySelector("#main-form");
var resetIco=document.querySelector("#btn-reset")


privacyNotice.addEventListener("click",()=>{
    privacyDiv.style.display="none";
})

function luckyBirthdayHandler(event){
    event.preventDefault();
    var nameValue=userName.value;
    var dobValue=date.value;
    var luckyNum=ln.value;
    luckyBdayChecker(nameValue,dobValue,luckyNum)
}

function luckyBdayChecker(nameValue,dobValue,luckyNum){
    var dobArr=dobValue.split("-");
    var dobJoin=dobArr.join("");
    console.log(dobJoin);
    var sum=0;
    for(let i=0;i<dobJoin.length;i++){
        sum+=Number(dobJoin[i]);
    }
    if(luckyNum>0){
        if(sum%luckyNum===0){
            goodluck.style.display="block";
            goodluckMsg.innerText=`Yippee ${nameValue} your birthday is lucky.`
            badluck.style.display="none";
        }else{
            goodluck.style.display="none";
            badluckMsg.innerText=`Sorry ${nameValue} your birthday isn't lucky.`
            badluck.style.display="block";
            badluckImg.style.display="block";
        }
    }else{
        goodluck.style.display="none";
        badluckMsg.innerText=`Sorry ${nameValue} please enter lucky number whose value is greater than 0.`
        badluck.style.display="block";
        badluckImg.style.display="none";
    }
}
form.addEventListener("submit",(e)=>luckyBirthdayHandler(e));
resetIco.addEventListener("click",()=>{
    privacyDiv.style.display="block";
    userName.value="";
    date.value="";
    ln.value="";
    goodluck.style.display="none";
    goodluckMsg.innerText=``;
    badluckMsg.innerText=``
    badluck.style.display="none";
    
})