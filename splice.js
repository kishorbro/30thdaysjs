

//
//let srt=[1,2,3,4,,54,,5];
//srt.splice(2,3,45,67,)
//console.log(srt);

//let arr=['a','b','c','d'];
//arr.splice('a','b','r','f');

//let arr1=['kishor','kishore','ram','tannu'];
//srt.splice(1,2,'kumar','raj')
 
//function removeCharacter(){
//    let originalString="brajkishorkumar";
//    //removeing the first character
//
//    let  firstCharRemoved=originalString.split('');
//     firstCharRemoved.splice(0,1);
//     firstCharRemoved=firstCharRemoved.join('');
//
//
//     //removing the second character
//     let lastCharRemoved=originalString.split('');
//     lastCharRemoved.splice(-1,1);
//     lastCharRemoved=lastCharRemoved.join('');
//     console.log(firstCharRemoved);
//       console.log(lastCharRemoved);
//       
//     
//
//}
//removeCharacter();


function myremoveChar(){
    let originalString='kishorBraj';
    let newString=originalString.split('k').join('m');

    console.log(newString);
    

}
myremoveChar();