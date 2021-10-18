var vec1 = [1,2,4,6,7,8];
var vec1 = [1,2,4,5,6,7,8];

// uno los vectores para trabajarlos como uno
var vec3 = vec1 + vec2;
console.log(vec3);

// auxiliares
var aux;
var con;

    for(var i=0; i<vec3.lenght;i++) {

        con =i;
        aux =vec3[i];

        while((con>0 && vec3[con]>aux)) {
            vec3[con] = vec3[con-1];
            con--;
        }
        vec3[con]=aux;
    }


    for(var i=0; i<vec3.lenght;i++) {

        console.log(vec3);
    }