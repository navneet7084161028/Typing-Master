
var totalTime = 0;
var interval;
//var str1 = document.getElementById("original-text").innerHTML ;
var result;
var num;
var str2="";
var totalWords;
var sec,min,hour;
var array = ["I believe in God only I spell it Nature.", "Leave the road take the trails.",
            "Colors are the smiles of nature.","The earth has music for those who listen.",
            "A weed is no more than a flower in disguise.", "The poetry of the earth is never dead."];


function start()
{  
    var a= str2.length;
    if(a==0)
    {
    countTimer();
    interval = setInterval(countTimer , 1000);
    } 
}

function countTimer()
{
    ++totalTime;
    hour = Math.floor(totalTime/3600);
    min = Math.floor((totalTime- hour*3600)/60);
    sec = Math.floor(totalTime-(hour*3600+min*60));
    if(hour < 10)
        hour = '0'+hour;
    if (min < 10)
        min = '0'+min;
    if (sec < 10)
        sec = '0'+sec;
    document.getElementById('timer').innerHTML=hour+ ':' + min+ ':' + sec;

}

function compare()
{
     str2 = document.getElementById('text-area').value;
     result = (document.getElementById("original-text").innerHTML).localeCompare(str2);
        if (result == 0)
        {
            var tot = sec+min*60;
            var wpm = Math.floor(totalWords*60/tot);
            clearInterval(interval);
            document.getElementById("text-area").style.borderColor="green";
            document.getElementById("text-area").disabled = false;
            alert("Your typing speed is:-" +wpm + 'wpm');
    }
    else{
        document.getElementById("text-area").style.borderColor="red";
    }
}

function random()
{
    num = Math.floor(Math.random()*array.length);
    document.getElementById("original-text").innerHTML = array[num];
    console.log(array[num]);
    document.getElementById('original-text'). classList.remove("original");
    totalWords = array[num].split(' ').length; 
}

function disp()
{
    document.getElementById('text-area').value="";
    location.reload();
}

