$(function(){
  //variables
  var mode = 0; //appmode
  var timeCounter = 0; //time counter 
  var lapCounter = 0; //lap counter
  var actions; //variables for setinterval
  var lapNumber = 0; // number of laps
    //minutes,seconds,centiseconds for time and lap
  
  var timeMinutes, timeSeconds, timeCentiseconds, lapMinutes, lapSeconds, lapCentiseconds; 
  
  // on load show startand show button
  hideshowButtons("#StartButton","#lapButton");
    
    
    $("#StartButton").click(function(){
        //game is on
        mode = 1;
        //show stop and lap button
        hideshowButtons("#StopButton","#lapButton");
        //start counter
        startAction();
    });
  
  
  
  

  //functions
    //show and hide two functions
  function hideshowButtons(x,y){
      $(".control").hide();
      $(x).show();
      $(y).show();
  }
    //start counter
    function startAction(){
        actions =setInterval(function(){
            timeCounter++;
            //limit timecounter
            if(timeCounter = 100*60*100){
                timeCounter =0;
            }
            lapCounter++;
             if(lapCounter = 100*60*100){
                lapCounter =0;
            }
            updateTime();
        },10);
    }
    
    
  //updatetime:covert counter to min,sec,centisec
    function updateTime(){
        //1min =60*100centiseconds=6000centiseconds
        timeMinutes=Math.floor(timeCounter/6000);
        //1sec=100centiseconds
        timeSeconds=Math.floor((timeCounter%6000)/100);
        timeCentiseconds= (timeCounter%6000)%100;
        
        $("#timeminute").text(format(timeMinutes));
        $("#timesecond").text(format(timeSeconds));
        $("#timeCentiSecond").text(format(timeCentiseconds));
        
        //1min =60*100centiseconds=6000centiseconds
        lapMinutes=Math.floor(lapCounter/6000);
        //1sec=100centiseconds
        lapSeconds=Math.floor((lapCounter%6000)/100);
        lapCentiseconds= (lapCounter%6000)%100;
        
        $("#lapminute").text(format(lapMinutes));
        $("#lapsecond").text(format(lapSeconds));
        $("#lapCentiSecond").text(format(lapCentiseconds));
        
    }
    //format number
    function format(Number){
        if(Number<10){
            return '0'+Number;
        }else{
            return Number;
        }
            
        }
    });