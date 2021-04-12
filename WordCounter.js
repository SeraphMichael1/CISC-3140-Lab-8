    var count = document.getElementById('count');
    var input = document.getElementById('input'); 

    //keyup causes WordCounter function to be called every time the user releases a key
    input.addEventListener('keyup', function(e){
        WordCounter(e.target.value);
    });
    //WordCounter takes in a string (the input from user) and uses regex (that was a rabbit hole) and string manipulations to
    //determine how many words there are in the input
    function WordCounter(string) {
        var string = input.value; 
        count.innerText = string.trim().split(/\s+/).length;
        //the .trim gets rid of extra whitespaces (in case user double spaces)
        //the .split creates an array of what the regex expression /\s+/ means (whitespaces), takes the length of that and sends it to count's text
    }
          