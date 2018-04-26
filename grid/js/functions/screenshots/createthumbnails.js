
function getScreenshots(){
    
 
    var strMime = "image/jpeg";
    var strDownloadMime = "image/octet-stream";
        
   
    var imgData = renderer.domElement.toDataURL("image/png");

    console.log(imgData)
    // saveFile(imgData.replace(strMime, strDownloadMime), "test.jpg");
     

    function saveFile(strData, filename) {
        
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
            document.body.appendChild(link); //Firefox requires the link to be in the body
            link.download = filename;
            link.href = strData;
            link.click();
            document.body.removeChild(link); //remove the link when done
        } else {
            location.replace(uri);
        }
    }
}
