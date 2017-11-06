$.get('https://www.reddit.com/r/aww/.json', function(data){

//get data, for loop to post 10 blogs, skipping the first:
var posts = data.data.children;

for( var i = 1; i < 11; i++ ){

var reddit = posts[i];
var postsEl = $("<section>");

//thumbnail images:
var images = $("<div id = 'images'>");
var image = reddit.data.thumbnail;
image.append("<img src =" + image + ">");
images.append(image);

//titles:
var headers = $("<div id = 'redditHeaders'>");
var title = reddit.data.title;
var heading = $("<h3 id = 'heading'>");
headers.append(heading);
heading.append(title);

//links:
var links = reddit.data.url;

$("#main").append(postsEl);

}
});
