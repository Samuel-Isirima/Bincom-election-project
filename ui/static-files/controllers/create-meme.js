
create_meme_processing = false
create_meme_button = `.cmb0`
result_container = `.rc0`
progress_bar = `.pb0`
progress_bar_container = `.pc0`
titleInput = `.ti0`
descriptionInput = `.di0`
removeTagButton = `.rtag`
progress_bar_object = `<progress class="progress-bar pb0" value="0" max="100" style="width: auto;"></progress>`
tag_search_suggestion_container = `.ts-sc-0`
tags_container = `.tags-c0`
tags_input = `.tai0`
addTagButton = `.atb0`
tagSearchSuggestion = `.tss013`
resultContainer = `.rco0`


const validationErrors = [{tag: "title", error: ""}, {tag: "description", error: ""}]
tags = []
title = description = ''


$(document).on('input', titleInput, function (e){
title = $(this).val()
if(!validateText(title))
    {
        validationErrors.push({tag:"title", error:"Invalid title"})
    }
else
    {
        removeValidationError("title")
    }
})


$(document).on('input', descriptionInput, function (e){
    description = $(this).val()
    if(!validateText(description))
        {
            validationErrors.push({tag:"description", error:"Please provide a valid description"})
        }
    else
        {
            removeValidationError("description")
        }
})


const removeValidationError = (tag) =>
{
    const errorIndex = validationErrors.findIndex(errorEntry => 
        {
        return errorEntry.tag === String(tag)
        })
    if(errorIndex === -1)
    {
        return false
    }
    
    return !!validationErrors.splice(errorIndex, 1);
}


const verifyInputs = () =>
{


    $(resultContainer).empty()
    //Check for errors
    if(validationErrors.length > 0)
    {
        $(resultContainer).append(`<p style="color: red;">${validationErrors[0].error}</p>`)
        $(create_meme_button).prop('disabled', true)
    }
    else
    {
        $(create_meme_button).prop('disabled', false)
    }
}

verifyInputs()


$(document).on('input', tags_input, function (e){
    runAfterEvent_noDuplicateRequests(() => {
        query = $(this).val()
        /*
        Check if value is upto at least 2 characters, 
        then wait 1.0 second before making backend request to make sure user finished typing
        */
        if (query.length > 1) {
            searchTags(query)
        }
    }, 1000)

    //Prevent the use of non alphanumeric characters in tags, space included

    if ($(this).val().length >= 1
        && $(this).val().match(/^[0-9a-zA-Z]+$/)) {
        $(addTagButton).prop('disabled', false)
    }
    else {
        $(addTagButton).prop('disabled', true)
    }
})


$(document).on('click', tagSearchSuggestion, function (e) {
    tag = $(this).attr('tag')
    //Clear the search suggestions result tag
    $(tag_search_suggestion_container).empty()
    addTag(tag.trim())
})


$(document).on('click', removeTagButton, function (e) {
    tag_ = $(this).attr('tag')
    removeTag(tag_.trim())
})



$(document).on('click', addTagButton, function (e) {
    addTag($(tags_input).val())
    $(tags_input).val('')
})



function removeTag(tag) {
    index = tags.indexOf(tag.trim())
    tags.splice(index, 1)
    renderTags()
}


function addTag(tag) {

    if (tags.length == 10) {
        $(tag_search_suggestion_container)
        .append('<p style="color: red; text-align: center;" class="tqty-err">You can only add 10 tags</p>')
        
        setTimeout(function () 
        {
            $('.tqty-err').remove()
        }, 2000)
        return
    }

    duplicate = false
    //check if the tag already exists and prevent addition if yes to avoid duplicates
    for (i = 0; i < tags.length; i++) {
        if (tags[i].toLowerCase() == tag.trim().toLowerCase()) {
            removeTag(tag.trim())
        }
    }
    tags.push(tag.trim())
    renderTags()
    $(addTagButton).prop('disabled', true)
}


function renderTags() 
{
    $(tags_container).empty()
    tags_UI = ''
    for (i = 0; i < tags.length; i++) 
    {
        tags_UI += selectedTag_UI(tags[i].trim())
    }

    $(tags_container).append(tags_UI)
}


function searchTags(query) 
{
    if (query.length < 1) 
    {
        return
    }

    fetch('http://localhost:7073/api/meme/tags/search', 
    {
        method: 'POST',
        headers:{
                'Content-Type': 'application/json'
                },
        body: JSON.stringify({
                query: query,
                }),
        cache: 'default'
    })
    .then((response)=>
    {
    if(response.status != 200)
        return null
    return response.json()
    })
    .then((data)=>
    {
    if(data == null)
        return
    renderTagSuggestions(data)
    })
}



function renderTagSuggestions(tags) 
{

    $(tag_search_suggestion_container).empty()
    tagSuggestionsUI = ''
    
    Object.keys(tags).forEach((key) => 
    {
        tagSuggestionsUI += tagSearchSuggestionUI(tags[key].tag)
    })
    $(tag_search_suggestion_container).append(tagSuggestionsUI)

}







$(document).on('click', create_meme_button, (event) => {
    create_meme()
})

const create_meme = () => {
    /*
    Avoid multiple requests
    Do this by creating a processing lock
    */
    if (create_meme_processing)
        return

    create_meme_processing = true
    $(create_meme_button).prop('disabled', true)
    $(progress_bar_container).append(progress_bar_object)

    var form = $('#upload-meme-data')[0]
    var formdata = new FormData(form)
    formdata.set('tags', tags)
    var ajax = new XMLHttpRequest()
    /*
    Add event listeners to watch the data upload process
    */
    ajax.upload.addEventListener("progress", progressHandler, false)
    ajax.addEventListener("load", completeHandler, false)
    ajax.addEventListener("error", errorHandler, false)
    ajax.addEventListener("abort", abortHandler, false)
    ajax.open(`POST`, `http://localhost:7073/api/meme/add`)
    /*
    Now set the request header
    This is because the nodejs library being used to handle file uploads in this project
    requires that data sent in should have the header content type multipart/form-data
    to be processed.
    
    The setRequestHeader method is used just before the send method as required by the 
    xmlhttprequest class/documentation 
    */
    //ajax.setRequestHeader("content-type","multipart/form-data")
    ajax.send(formdata)


}



const progressHandler = (event) => {
    const percent = (event.loaded / event.total) * 100;
    console.log(`Upload progressing ${percent}`)
    $(result_container).empty()
    $(result_container).append(`<p style="text-align: center">Uploading meme | <b> ${Math.round(percent)}% </b></p>`)
    $(progress_bar).val(Math.round(percent))
}

function completeHandler(event) {
    //Remove the progress bar and update the result container
    $(progress_bar).val(0)
    $(progress_bar).hide(100)
    process_response(event.target)
}

function errorHandler(event) {
    $(result_container).empty()
    $(result_container).append(`<p>Data upload failed</p>`)
    //Enable the button again and remove processing lock so user can try again
    $(create_meme_button).prop('disabled', false)
    create_meme_processing = false
}

function abortHandler(event) {
    $(result_container).empty()
    $(result_container).append(`<p>Data upload failed</p>`)
    //Enable the button again and remove processing lock so user can try again
    $(create_meme_button).prop('disabled', false)
    create_meme_processing = false
}


function process_response(response) {
    try {
        responseJSON = JSON.parse(reponse.responseText)
    }
    catch (error) {
        $(result_container).empty()
        $(result_container).append(`<p style="color:red;">An unexpected error has occured. Please try again later.</p>`)
        $(create_meme_button).prop('disabled', false)
        create_meme_processing = false

        return
    }

    if (response.status != 200) {
        $(result_container).empty()
        $(result_container).append(`<p style="color:red;">${responseJSON.message}</p>`)
        $(create_meme_button).prop('disabled', false)
        create_meme_processing = false

        return
    }

    //If the code gets to this point, it means the request was successful
    $(result_container).empty()
    $(result_container).append(`<p style="color:green;">${responseJSON.message}</p>`)
    //Now redirect to the newly created meme's page
    setTimeout(() => {
        window.location = `./meme/${responseJSON.data.link}/${responseJSON.data.uuid}`
    }, 1500);


}


const validateText = (text) =>
{
    if(text == '' || text == undefined || text == null || text == ' ')
	{return false}
	else
	{return true}
}

let timeout;

function runAfterEvent_noDuplicateRequests(callback, wait) 
{
    /*
    This function helps to regulate backend requests sent for suggestion. A regular setTimeout call will 
    do multiple calls at once if the criteria are met. This guy would only send one request after user input
    */
      clearTimeout(timeout);
      timeout = setTimeout(function () { callback.apply(this) }, wait);
}


const selectedTag_UI = (tag) =>
{
return ` <span class="tss-0" tag="${tag}" id="tag-${tag}">${tag}  <span class="rtag" tag="${tag}">x</span> </span>`

}

const tagSearchSuggestionUI = (tag) =>
{
return ` <span class="tss-0 tss013 tag-search-suggestion-result" tag="${tag}" id="tag-${tag}">${tag}</span>
    `

}