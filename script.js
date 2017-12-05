/**
 * Created by Ksenya on 23.12.2016.
 */


var news = [
    {
        id: 0,
        imageName: "img7.JPG",
        author: "Admin",
        date: "26.07.2012",
        title: "Thanksgiving greeting card PSD",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, facilis magni! Accusantium, deserunt dolore, est eum explicabo magni modi mollitia nihil nisi nulla praesentium quod reprehenderit sapiente suscipit tempora voluptatibus?",
        text1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores facilis illum quibusdam. Mollitia neque sequi vel vitae! Animi corporis excepturi explicabo id illo ipsam modi possimus, rerum sunt totam vero!",
        comments: [
            {
                id: 0,
                imageName: "img6.JPG",
                author: "Petya",
                date: "16.03.2014",
                text: "Lorem",
                like: 6
            },
            {
                id: 1,
                imageName: "img8.JPG",
                author: "Vova",
                date: "10.07.2014",
                text: "Lorem! Lorem",
                like: 7
            },
            {
                id: 2,
                imageName: "img6.JPG",
                author: "Vanya",
                date: "5.01.2015",
                text: "Lorem/Lorem/Lorem!!!",
                like: 5
            }
        ]
    },
    {
        id: "1",
        imageName: "img8.JPG",
        author: "Vasya",
        date: "17.09.2013",
        title: "Vasya the best!",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, facilis magni! Accusantium, deserunt dolore, est eum explicabo magni modi mollitia nihil nisi nulla praesentium quod reprehenderit sapiente suscipit tempora voluptatibus?",
        text1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores facilis illum quibusdam. Mollitia neque sequi vel vitae! Animi corporis excepturi explicabo id illo ipsam modi possimus, rerum sunt totam vero!",
        comments: [
            {
                id: 0,
                imageName: "img7.JPG",
                author: "Petya",
                date: "16.03.2017",
                text: "Lorem",
                like: 8
            }
        ]
    },
    {
        id: "2",
        imageName: "img6.JPG",
        author: "Petya",
        date: "16.03.2014",
        title: "Vasya!",
        text: "Я замену никому не ищу. Люди ищут замену, когда теряют что-то действительно ценное. У меня из ценного потеряно только время. И ничего больше",
        text1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores facilis illum quibusdam. Mollitia neque sequi vel vitae! Animi corporis excepturi explicabo id illo ipsam modi possimus, rerum sunt totam vero!",
        comments: [
            {
                id: 0,
                imageName: "img7.JPG",
                author: "Kolya",
                date: "28.02.2011",
                text: "Lorem",
                like: 3
            }
        ]
    },
    {
        id: "3",
        imageName: "img9.JPG",
        author: "Kolya",
        date: "16.03.2017",
        title: "lorem ipsum dolor sit amet",
        text: "Я замену никому не ищу. Люди ищут замену, когда теряют что-то действительно ценное.",
        text1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores facilis illum quibusdam. Mollitia neque sequi vel vitae! Animi corporis excepturi explicabo id illo ipsam modi possimus, rerum sunt totam vero!",
        comments: [
            {
                id: 0,
                imageName: "img6.JPG",
                author: "Masha",
                date: "11.11.2011",
                text: "Ivan",
                like: 14
            }
        ]
    }
];

function makeComments(data, el, articleID) {
    var commentHTML = "";


    el.comments.forEach(function (comment) {
        commentHTML +=
            '<div class="block-comment" data-commentID="' + comment.id + '">' +
            '        <img class="photo" src="img/' + comment.imageName + '"alt="Фото">' +
            '        <div class="block-info-comment">' +
            '            <button data-toggle="tooltip" title="Видалити" class="close icon_close_comment">×</button>' +
            '            <a class="name_user" href="#">' + comment.author + '</a>' +
            '            <div class="comment_user">' + comment.text + '</div>' +
            '            <div class="block_data">' +
            '               <span class="real_data">' + comment.date +
            '                   <span class="comment">Відповісти</span>' +
            '                </span>' +
            '               <div class="post_like">' +
            '                    <i class="post_like_icon"></i>' +
            '                   <span class="post_like_count">' + comment.like + '</span>' +
            '                </div>' +
            '            </div>' +
            '        </div>' +
            '    </div>';
    });

    $('.contentBox').html(commentHTML);


    $('[data-toggle="tooltip"]').tooltip();


    //Лайк комента
    $('.post_like_icon').on('click', function () {
        var commentID = $(this).parents('.block-comment').attr('data-commentid');

        $(this).siblings('.post_like_count').html(function (i, text) {
            return parseInt(text) + 1;
        });
        data.forEach(function (el) {
            if (articleID == el.id) {
                el.comments.forEach(function (comment) {
                    if (commentID == comment.id) {
                        comment.like++;
                    }
                })
            }
        });
    });
    //Кінець лайка комента


    // Видалення комента
    $('.icon_close_comment').on('click', function () {
        var delBlock = $(this).parents('.block-comment').attr('data-commentid');
        var currentComment;

        data.forEach(function (el) {
            if (articleID == el.id) {
                el.comments.forEach(function (comment, i, arr) {
                    if (delBlock == comment.id) {
                        arr.splice(i, 1);
                        currentComment = arr.length;
                    }
                })
            }
        });
        $(this).parents('.block-comment').remove();
        $('.comments-count[data-articleid="' + articleID + '"]').text(currentComment + ' Comments');
    });
    //Кінець видалення комента

}


var makeNews = function (data) {
    var output = "";

    data.forEach(function (el) {

        output +=
            '<article>' +
            '<img class="big-img" src="img/' + el.imageName + '" alt="photo">' +
            '    <div class="article-wrap">' +
            '      <div class="info">' +
            '        <i class="user-icon"></i>' +
            '        <span class="author">' + el.author + '</span>' +
            '        <span class="date"> - ' + el.date + '</span>' +
            '        <div class="comments">' +
            '           <i class="comments-icon"></i>' +
            '           <a class="comments-count" data-articleid="' + el.id + '" data-toggle="modal" data-target="#commentBox"  data-backdrop="true" href="#">' + el.comments.length + ' Comments</a>' +
            '        </div>' +
            '      </div>' +
            '       <div class="article-block-text">' +
            '           <h6 class="heading">' + el.title + '</h6>' +
            '           <p class="article_text">' + el.text + '</p>' +
            '           <div class="text1">' + el.text1 + '</div>' +
            '           <div class="read_more">Read More</div>' +
            '       </div>'+
            '   </div>'+

            '</article>';


    });
    $('.news_wrap').html(output);

    $('.read_more').on('click', function(){
        var hBlock = $(this).siblings('.text1');
        $(this).text(hBlock.is(':visible') ? 'Read More' : 'Hide');
        hBlock.toggle('slow');
    });

    $('.comments-count').on('click', function (e) {
        e.preventDefault();

        var articleID = $(this).attr('data-articleid');
        data.forEach(function (el) {
            if (articleID == el.id) {
                var modal = $('#commentBox');
                modal.find('.modal-title').text(el.title);
                modal.find('.text_modal').text(el.text);
                modal.find('.text_modal1').text(el.text1);
                modal.find('.save').attr('data-articleid', articleID);

                makeComments(data, el, articleID);
            }
        });
    });

    $('.save').on('click', function () {

        var userName = $('.message input[name="userName"]').val();
        var userMessage = $('.message textarea[name="userMessage"]').val();
        var articleID = $(this).attr('data-articleid');

        var btn = $(this).button('loading');

        setTimeout(function() {
            btn.button('reset')
        }, 3000);

        data.forEach(function (el) {
            if (articleID == el.id) {
                var lastCommentid = el.comments[el.comments.length - 1].id;
                var Data = new Date();

                el.comments.push({
                    id: lastCommentid + 1,
                    imageName: "img7.JPG",
                    author: userName,
                    date: Data.toLocaleString(),
                    text: userMessage,
                    like: 0
                });
                $('input, textarea').val('');
                makeComments(data, el, articleID);
                $('.comments-count[data-articleid="' + articleID + '"]').text(el.comments.length + ' Comments');

            }
        });
    });
};


$(document).ready(function () {

    $(window).on('scroll', function () {
        var topBtn = $('#top');
        $(this).scrollTop() > 100 ? topBtn.fadeIn() : topBtn.fadeOut()
    });

    $('#top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $('[data-toggle="tooltip"]').tooltip();

    makeNews(news);
});