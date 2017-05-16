/*
* A call to this function is written out in the RenderContents function of the PayPal
* Control.  It appends the paypal form to the end of the body, outside the current form
*/
function appendform(content)
{
    var div = document.createElement("div");
    div.style.display = "none";
    div.innerHTML = content;
    document.body.appendChild(div);

    return div.firstChild;
}

/*
* This function is set as the onclick handler for the PayPal button.
*/
function submitform(id, formDef)
{
    var fields = document.getElementById(id);

    if (fields != null)
    {
        var fields_txt = fields.innerHTML;
        fields_txt += '<input type="hidden" name="BNPartner" value="Microsoft Office Live"/>';

        // Get the form, if it does not already exist then create and append it.
        //
        var form = document.getElementById(id + '_form');
        if (form == null)
        {
            form = appendform(formDef);
        }
        
        form.innerHTML = fields_txt;
        form.submit();
    }
}