let textArray = new Array();
let destinationArray = new Array();

let Elements = document.getElementsByClassName("inputTypewriter");
Array.from(Elements).forEach((element) => {
    textArray.push( new String( element.firstChild.nodeValue.toString() ) );
    console.log(element.firstChild.nodeValue.toString());
    element.remove();
});


let iSpeed = 100; 
let textArrayIterator = 0; 
let textLengh = textArray[0].length; 
let textIterator = 0; 

            
let newDiv = null;
let newContent = null;


    function typewriter()
    {
        let destination = document.getElementById("outputTypewriter");
           
        if (textIterator == 0) {
            // crée un nouvel élément div
            newDiv = document.createElement("div");
            // et lui donne un peu de contenu
            newDiv.classList.add('dollar');
            newContent = document.createTextNode('');
            // ajoute le nœud texte au nouveau div créé
            newDiv.appendChild(newContent);
            // ajoute le nouvel élément créé et son contenu dans le DOM
            destination.appendChild(newDiv);
        }

        if (textIterator == textLengh )
        {
            newDiv.innerHTML = textArray[textArrayIterator].substring(0, textIterator);
        }
        else
        {
            newDiv.innerHTML = textArray[textArrayIterator].substring(0, textIterator)  + "_";
        }

        if ( textIterator++ == textLengh ) 
        {
            
            textIterator = 0;
            textArrayIterator++;
            if ( textArrayIterator != textArray.length ) 
            {
                textLengh = textArray[textArrayIterator].length;
                setTimeout("typewriter()", 500);
            }
            else 
            {
                //END OF FUNCTION
            }
        } 
        else 
        {
            setTimeout("typewriter()", iSpeed);
        }
    }
