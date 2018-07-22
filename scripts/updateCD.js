var countdownHandler = (function(){
    var initDone=false;
    var countDownDate = new Date("Dec 20, 2018 15:37:25").getTime();
    
    function _init()
    {
        _setCountdownDate();
     setInterval(_setCountdownDate, 1000);   
    }
    function _setCountdownDate()
    {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        $("#CD-days").text(days);
        $("#CD-hours").text(hours);
        $("#CD-minutes").text(minutes);
        $("#CD-seconds").text(seconds);
        
    }
    
    return{
        init:function(){
            if(!initDone)
                {
                    _init();
                    initDone=true;
                }
        }
    };
}()
);

countdownHandler.init();
