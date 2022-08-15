function createFact(){
    //we want a function that return the factorial value
    //extract the factorial
    var extractNum;
    var factValue;
    var numValue = 1;
    extractNum = document.getElementById("factNum").value;
    console.log(extractNum);

    //determine the value of the factorial
    /* 0! = 1
    n! = (n-1)! x n
    use a loop to make factorials
    */

    if (extractNum == 0){
        factValue = 1;
    } else {
        for(var i = 1; i <= extractNum; i++){
            numValue = numValue * i;
        }
        factValue = numValue;
    }

    //return the value
    console.log(factValue);


}