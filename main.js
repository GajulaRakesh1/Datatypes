function change1(){
    var name="Rakesh";
    var phonenumber="987654321";
    if(true){
        document.getElementById("l1").textContent=name+" : "+phonenumber;
    }
}
change1();

function change2(){
    const isTodayThursday="true";
     document.getElementById("l2").textContent=isTodayThursday;
}

function change3(){
    var myNullVariable=null;
    if(true){
        document.getElementById("l3").textContent=myNullVariable??"No data available";
    }
}
change3();

function change4(){
    var myUndefinedVariable;
    if(true){
        document.getElementById("l4").textContent=myUndefinedVariable===undefined?"variable value is not declared yet":myUndefinedVariable;
    }
}
change4();

function change5(){
    if(true){
         var info={
    name:'Rakesh',
    number:'987654321',
    profession:'developer'
     }
        document.getElementById("l5").textContent=info.profession;
         }
};
change5();
    
function change6(){
    let myArray=["yesterday","today","tomorrow","day after"];
    if(true){
        document.getElementById("l6").textContent=myArray[2];
    } 
} 
change6();
