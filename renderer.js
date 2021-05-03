const fs = require("fs");

function mergeValues(values, content){
    for(var key in values){
        //console.log(`{{${key}}}:${values[key]}`);
        content = content.replace("{{" + key + "}}", values[key]);    
    }
    //console.log(content);
    return content;
}

function view(templateName, values, response){
    //Read from the template files
    var fileContents = fs.readFileSync(`./views/${templateName}.html`, {encoding: "utf8"});
    //Insert values into the content
    var updatedHtml = mergeValues(values, fileContents)
    //Write out to the response
    response.write(updatedHtml);
}

module.exports.view = view;