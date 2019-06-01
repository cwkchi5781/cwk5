$(function () {
    var results;
    var detail = [];
    var searchTerm = "Lego";
    function compareMovies(m1, m2) {
        if (m1.Year < m2.Year) {
            return -1;
        } else if (m1.Year > m2.Year) {
            return 1;
        }
        return 0;
    }
    $.get({
        url: "https://www.omdbapi.com/?s=" + searchTerm + "&type=movie&apikey=78ebd3",
        success: function (data, textStatus, jqXHR) {
            if (textStatus === "success") {
                results = data["Search"];
                results.sort(compareMovies);
                var count = 0;
                detail = [];
                $("#status").html(data["totalResults"] + " results for '" + searchTerm + "', " +
                    "displaying the Top 10");
                for (var i = 0; i < results.length; i++) {
                    $("#brief-view > table > tbody").append("<tr>" +
                        "<td><img src='" + results[i]["Poster"] + "'title = '"+results[i]["Title"]+"'</img ></td > "+"<td class='align-middle'>" + results[i]["Title"] + "</td>" +
                        "<td class='align-middle'>" + results[i]["Year"] + "</td>" +
                        "</tr>");
                    $.get({
                        url: "https://www.omdbapi.com/?i=" + results[i]["imdbID"] + "&apikey=78ebd3",
                        success: function (data, textStatus, jqXHR) {
                            detail.push(data);
                            count++;
                            console.log(data);
                            if (count === results.length) {
                                detail.sort(compareMovies);
                                for (var i = 0; i < detail.length ; i++) {
                                    var ratingString = "";

                                    for(var j = 0; j < detail[i]["Ratings"].length; j++){
                                        ratingString +=  "<td class='align-middle'>" + detail[i]["Ratings"][j]["Value"] + "</td>";
                                        console.log("movie: " + i + " rating: " + j + "loop ran" )
                    
                                    }
                                    for(var j = 3; j > detail[i]["Ratings"].length; j--){
                                        ratingString += "<td class='align-middle'>Not Avaliable</td>"
                                    }

                                    $("#reception > table > tbody").append("<tr>" +
                                        "<td><img src='" + results[i]["Poster"] + "'title = '"+results[i]["Title"]+"'</img ></td > " +
                                        ratingString+
                                        "<td class='align-middle'>" + detail[i]["Awards"] + "</td>" +
                                        "</tr>");
                                    $("#detail-view").append("<a data-toggle='collapse' href = '#"+detail[i]["imdbID"]+"' > "+"<img src='" + detail[i]["Poster"] + "'title = '"+detail[i]["Title"]+"' ></img ></a > ");
}
                                for (var i = 0; i < detail.length; i++) {
                                    $("#detail-view").append(
                                        "<div class='collapse' id = '"+detail[i]["imdbID"]+"' > "+"<div class='card card-body'>" +
                                        "<table class='table table-borderless'>" +
                                        "<thead>" +
                                        "<th scope='col'><h4>" + detail[i]["Title"] + "</h4></th>" +
                                        "<th scope='col'><h4> <span class='badge badge-dark'>" + detail[i]["Rated"] + "</h4></span> </th>" +
                                        "<th scope='col'><h4> <span class='badge badge - secondary'><h4>"+detail[i]["Runtime"]+"</span></h4></th>"+
                                        "</thead>" +
                                        "<tbody>" +
                                        /*"<div class='container'><div class='row'>" +
                                        "<div class='col-lg-3 col-md-5 col-sm-6'>" +  */
                                        "<tr><td rowspan='6'><img src='" + detail[i]["Poster"] + "'title = '"+detail[i]["Title"]+"' class='img-fluid' ></img ></td></tr>"/*</div > +"<div class='col-lg-9 col-md-7 col-sm-6'>"*/ +
                                        "<tr ><td colspan='2'><p><b>Released: </b>" + detail[i]["Released"] + "</p></tr>" +
                                        "<tr><td colspan='2'><p><b>Directed By: </b>" + detail[i]["Director"] + "</p></td></tr>" +
                                        "<tr> <td colspan='2'><p><b>Starring: </b>" + detail[i]["Actors"] + "</p></td></tr>" +
                                        "<tr><td colspan='2'><p><b>Summary: </b>" + detail[i]["Plot"] + "</p></td></tr>" +
                                        "<tr colspan='2'><td colspan='2'><p><b>IMDb link: </b><a href = 'https://www.imdb.com/title/"+detail[i]["imdbID"]+"'>imdb.com/title/" + detail[i]["imdbID"] + "</a></p></td></tr>" +
                                        "</tbody></table></div></div>" /* + "</div></div></div>"*/);
                                }
                                $("#detail-view > a").click(function () {
                                    $(".collapse").collapse("hide");
                                });
                            }
                        }
                    });
                }
            }
        }
    });
});