console.log("hello")

//loadNASAData()

function loadNASAData() {

    console.log("loadNASAData");

    //before we call, show a loading image

    let loadingimage = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921";
    document.getElementById("image").src = loadingimage;

    //fetch call 

    //we need to provide the NASA API ENDPOINT.

    //JjP84CKefxzmg2fyAvN4zWsRyAAqg1nzrXvHdtc6
    //https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY 

    let apikey = "pdD5EnF8FLOh1fLEWym9BBk9gX7QMbwfyZRUEkgU";
    let url = "https://api.nasa.gov/planetary/apod?api_key=" + apikey;

    console.log(url);

    fetch(url).then(function (response) {
        return response.json();
    }
    ).then(function (json) {

        //console.log(json);
        // to see what is received 

        let title = json.title;
        let date = json.date;
        let explanation = json.explanation;
        let urlPhoto = json.url;
        let media_type = json.media_type;
        let hdurl = json.hdurl;

        console.log(`title: ${title}`);
        console.log(`date: ${date}`);
        console.log(`explanation: ${explanation}`);
        console.log(`url: ${urlPhoto}`);
        console.log(`media_type: ${media_type}`);
        console.log(`hdurl: ${hdurl}`);

        document.getElementById("title").innerHTML = title;
        document.getElementById("date").innerHTML = date;
        document.getElementById("explanation").innerHTML = explanation;
        document.getElementById("image").src = hdurl;

    }).catch(function (error) {
        console.log(error);
    });

}

function reset(){
        document.getElementById("title").innerHTML = "Title comes here";
        document.getElementById("date").innerHTML = "Date comes here";
        document.getElementById("explanation").innerHTML = "Explanation comes here";
        document.getElementById("image").src ="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png";
}
