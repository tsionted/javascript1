function setToGetSerial(kind){
    console.log("step 2 get cereal");
    return kind + "cereal";
}

function step3GetMilk(type){
    console.log("step 3 get milk");
    return type +" milk";
}

function step4pourCereal(cereal){
    console.log("step 4: pour cereal in to bowl");
    return cereal;
}

function step5pourMilk(milk){
    console.log("step 5: pour cereal milk into bowl");
    return milk;
}
function actualluDoTheAction(){
    let bowl = dtep1GetBowl("red");
    let cereal = step2GetCereal("frosted Flakes");
    let milk = step3GetMilk("skim");
    let cerealPoured = step4pourCereal(cereal);
}