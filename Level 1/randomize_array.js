/**
 * Created by Melynda Eason on 9/12/2016.
 */


var input_array = [5, 3, 2, 5, 1];

function randomize(array) {
    // var i = 0;
    var j = 0;
    temp = null;

    for (var i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    console.log(input_array)
}
randomize(input_array);

function splice_randomizer(array){
    var output_array = [];
    while(array.length){
        var index = Math.floor(Math.random()*array.length);
        output_array.push(array[index]);
        array.splice(index,1);
        //output_array.push(array.splice(index,1)[0]);
    }
    return output_array;
}

