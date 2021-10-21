function smrtnrll() {
    console.log("in smrtnrll");
    let currentStep = "nothing clicked";
    let numTries = 0;
    setInterval(function(){
        try{
            if (currentStep = "nothing clicked"){
                let lastClassFound = false;
                let i = 0;
                while (!lastClassFound){
                    try{
                        document.getElementById("DERIVED_REGFRM1_SSR_SELECT$" + i).click();
                        i++;
                    }
                    catch{
                        lastClassFound = true;
                    }
                }
                document.getElementById("DERIVED_SSR_FL_SSR_ENROLL_FL").click();
                currentStep = "classes prepped";
                console.log(currentStep);
                setTimeout(function(){
                    try{
                        if (currentStep = "classes prepped"){
                            document.getElementById("#ICYes").click();
                            currentStep = "yes clicked";
                            console.log(currentStep);
                            setTimeout(function(){
                                try {
                                    if (currentStep = "yes clicked"){
                                        document.getElementById("SCC_LO_FL_WRK_SCC_VIEW_BTN$3").click();
                                        currentStep = "nothing clicked";
                                        console.log(currentStep);
                                        console.log("Tried to enroll: " + ++numTries + " times.");
                                    }
                                }
                                catch (e) {
                                    console.log("confirmation not loaded yet");
                                }
                            }, 5000)
                        }
                    }
                    catch (e) {
                        console.log("popup not loaded yet");
                    }
                }, 5000)
            }
        }
        catch (e) {
            console.log("shopping cart not loaded yet");
        }
    }, 25000)
}

smrtnrll();
