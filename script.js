// this functiion is used to print the value in input w means write 
function w(val){
    let a = document.getElementById('inp');
    a.value +=val
}
// this function is used to c means clear the input 
function c(){
    let a = document.getElementById('inp');
    a.value = '';
}
// this function is used to display or solve  the input 
function result(){
    const num = document.getElementById('inp');
    try {
        const num2 = eval(num.value.replace('x','*'));//this line is most important 
        document.getElementById('inp').value = num2;
        
    } catch (error) {
        document.getElementById('inp').value = "error";
        
    }

}

