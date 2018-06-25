function mask(a, b) { 
    num = a; 
    numFun = b; 
    setTimeout("execmask()", 1) 
};

function execmask() { 
    num.value = numFun(num.value);
};

function mphone(v) {
    v=v.replace(/\D/g,""); // ищем не цифры 0 - 9 и если буквы то в пустую строку        
    v=v.substring(0, 11); // извлекаем 11 цифр(можем вводить, только 11)
    v=v.replace(/^(\d{3})(\d)/g,"($1) $2"); 
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); 
    return v;
};