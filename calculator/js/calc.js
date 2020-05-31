"use strict"

let textView = document.getElementById('calc__input');

function insert(num) {
    textView.value = 
    textView.value + num;
}

function clean() {
    textView.value = '';
}

function back() {
    let exp = textView.value;
    textView.value = exp.substring(0, exp.length-1);
}

function result() {
    let exp = textView.value;
    if (exp) {
        textView.value = eval(exp);
    }
}




$('.calc__key').mousedown(function() {
    let btnStyleDown = {
        'background': 'rgb(203, 180, 155)',
        'box-shadow': '1px 1px 2px black',
        'width': '48px',
        'height': '33px',
        'border': '1px solid grey',
        'font-size': '18px',
        'margin': '1px'
    }
    $(this).css(btnStyleDown);
    
});
$('.calc__key').mouseup(function() {
    let btnStyleUp = {
        'width': '50px',
        'height': '35px',
        'background-color': 'rgb(231, 213, 186)',
        'border': '1px solid rgb(5, 7, 29)',
        'border-radius': '5px',
        'box-shadow': '2px 2px 4px black',
        'font-size': '20px',
        'font-weight': '400',
        'color': 'rgb(11, 12, 14)',
        'margin': '0'
    }
    $(this).css(btnStyleUp);
    
});
$('.calc__key').mouseenter(function() {
    
    let btnStyleEnter = {
        
        'background': 'rgb(163, 160, 155)'
    }
    $(this).css(btnStyleEnter);
    
});
$('.calc__key').mouseleave(function() {
    let btnStyleLeave = {
        'background': 'rgb(231, 213, 186)'
    }
    $(this).css(btnStyleLeave);
});







$('#calc__clear').mousedown(function() {
    let cleanStyleDown = {
        'background': 'rgb(163, 39, 39)',
        'box-shadow': '1px 1px 2px black',
        'width': '48px',
        'height': '33px',
        'border': '1px solid grey',
        'font-size': '18px',
        'margin': '1px'
    }
    $(this).css(cleanStyleDown);
    
});
$('#calc__clear').mouseup(function() {
    let cleanStyleUp = {
        'width': '50px',
        'height': '35px',
        'background-color': 'red',
        'border': '1px solid rgb(5, 7, 29)',
        'border-radius': '5px',
        'box-shadow': '2px 2px 4px black',
        'font-size': '20px',
        'font-weight': '400',
        'color': 'white',
        'margin': '0'
    }
    $(this).css(cleanStyleUp);
    
});
$('#calc__clear').mouseenter(function() {
    
    let cleanStyleEnter = {
        
        'background': 'rgb(163, 39, 39)'
    }
    $(this).css(cleanStyleEnter);
    
});
$('#calc__clear').mouseleave(function() {
    let cleanStyleLeave = {
        'background': 'red'
    }
    $(this).css(cleanStyleLeave);
});