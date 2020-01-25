var num1 = document.getElementById("first");
var num2 = document.getElementById("second");
var num3 = document.getElementById("third");
var num4 = document.getElementById("fourth");
var num5 = document.getElementById("fifth");
var num6 = document.getElementById("sixth");
var output = document.getElementById("output");

var bigNum = Math.max(first, second, third, fourth, fifth, sixth);
var smallNum = Math.min(first, second, third, fourth, fifth, sixth);

function largestNum(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);

    var bigNum = Math.max(first, second, third, fourth, fifth, sixth);

    output.innerHTML = "The biggest Number is " + bigNum;
}

function smallestNum(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);

    var smallNum = Math.min(first, second, third, fourth, fifth, sixth);
    output.innerHTML = "The smallest Number is " + smallNum;
}

function meanNum(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);

    var aveNum = (first + second + third + fourth + fifth + sixth) / 6;
    output.innerHTML = "The mean of these numbers is " + aveNum;
}

function rangeNum(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);

    var ranNum = Math.max(first, second, third, fourth, fifth, sixth) - Math.min(first, second, third, fourth, fifth, sixth);
    output.innerHTML = "The range is " + ranNum;
}

function order(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);

    var o1 = 1;
    var o2 = 1;
    var o3 = 1;
    var o4 = 1;
    var o5 = 1;
    var o6 = 1;

    o1 = Math.min(first, second, third, fourth, fifth, sixth);
    if(o1 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(o1 === second){
        second = third;
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(o1 === third){
        third = fourth;
        fourth = fifth;
        fifth = sixth;
    }else if(o1 === fourth){
        fourth = fifth;
        fifth = sixth;
    }else if(o1 === fifth){
        fifth = sixth;
    }

    o2 = Math.min(first, second, third, fourth, fifth);
    if(o2 === first){
        first = second;
        second = third;
        third = fourth;
        fourth = fifth;
    }else if(o2 === second){
        second = third;
        third = fourth;
        fourth = fifth;
    }else if(o2 === third){
        third = fourth;
        fourth = fifth;
    }else if(o2 === fourth){
        fourth = fifth;
    }

    o3 = Math.min(first, second, third, fourth);
    if(o3 === first){
        first = second;
        second = third;
        third = fourth;
    }else if(o3 === second){
        second = third;
        third = fourth;
    }else if(o3 === third){
        third = fourth;
    }

    o4 = Math.min(first, second, third);
    if(o4 === first){
        first = second;
        second = third;
    }else if(o4 === second){
        second = third;
    }

    o5 = Math.min(first, second);
    if(o5 === first){
        first = second;
    }

    o6 = first

    output.innerHTML = "order is this: " + o1 + ", " + o2 + ", " + o3 + ", " + o4 + ", " + o5 + ", " + o6;
}