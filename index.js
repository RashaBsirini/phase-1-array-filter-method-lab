function findMatching(names, text)
{
    return names.filter(el=>el.toUpperCase()===text.toUpperCase());
}
 function fuzzyMatch (names, text)
 {
    return names.filter(el=>el.startsWith(text));
 }
 function matchName (drivreob, text)
 {
    return drivreob.filter(function(el)
    {
        if (el.name===text)
           return el;

    }
        
        );
 }