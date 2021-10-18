
var array = [1,3,2,6,5];
var aux;
var con;

    
    for (var i=0; i<array.length;i++) {
      
    con = i; 
    aux = array[i];        
                        
        while((con>0 && array[con-1]>aux)) { //mientras el numero actual sea menor al siguiente avanzo una posicion
            array[con] = array[con-1];
            con--;
        }

    array[con]=aux;
}

for (var i=0; i<array.length;i++) {

    console.log(array[i]);
}