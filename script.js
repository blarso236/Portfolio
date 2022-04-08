var elements = document.querySelectorAll('li.holiday');
for(var i=0; i<elements.length;i++)
{
    if(i%2===0)
    {
        elements[i].className="even";

    }

    else if(i%2===1)
    {
        elements[i].className="odd";
    }

    
}