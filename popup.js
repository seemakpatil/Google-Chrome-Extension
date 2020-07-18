var quotesList = [
    "Strive not to be a success, but rather to be of value.",
    "The mind is everything. What you think you become.",
    "Either you run the day, or the day runs you.",
    "The best revenge is massive success.",
    "Fall seven times and stand up eight.",
    "Happiness is not something readymade. It comes from your own actions.",
    "You cannot fall if you don’t climb. But there is no joy in living your whole life on the ground.",
    "I did not fail the test. I just found 100 ways to do it wrong.",
    "I would rather die of passion than of boredom.",
    "You cannot use up creativity. The more you use, the more you have.",
    "Good things come to people who wait, but better things come to those who go out and get them.",
    "Opportunities do not happen, you create them.",
    "The distance between insanity and genius is measured only by success.",
    "No masterpiece was ever created by a lazy artist.",
    "If you cannot explain it simply, you do not understand it well enough.",
    "Do one thing every day that scares you.",
    "I find that the harder I work, the more luck I seem to have.",
    "The only place where success comes before work is in the dictionary.",
    "Two roads diverged in a wood and I took the one less traveled by, and that made all the difference."
]

var songsList = [
    "https://www.youtube.com/watch?v=NG2zyeVRcbs",
    "https://www.youtube.com/watch?v=04854XqcfCY",
    "https://www.youtube.com/watch?v=mk48xRzuNvA",
    "https://www.youtube.com/watch?v=j5-yKhDd64s",
    "https://www.youtube.com/watch?v=VBmMU_iwe6U",
    "https://www.youtube.com/watch?v=lwgr_IMeEgA",
    "https://www.youtube.com/watch?v=QUQsqBqxoR4",
    "https://www.youtube.com/watch?v=-C_3eYj-pOM",
    "https://www.youtube.com/watch?v=qQzdAsjWGPg",
    "https://www.youtube.com/watch?v=HgzGwKwLmgM",
    "https://www.youtube.com/watch?v=cwLRQn61oUY",
    "https://www.youtube.com/watch?v=Xn676-fLq7I",
    "https://www.youtube.com/watch?v=w5tWYmIOWGk",
    "https://www.youtube.com/watch?v=JRfuAukYTKg",
    "https://www.youtube.com/watch?v=Mgfe5tIwOj0",
    "https://www.youtube.com/watch?v=ffxKSjUwKdU"
]

document.addEventListener('DOMContentLoaded', function() {
    var getQuote = document.getElementById('get_quote');
    var getSong = document.getElementById('get_song');
    var getWorkout = document.getElementById('get_workout');
    getQuote.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            var randomNumber = Math.floor(Math.random() * quotesList.length);
            alert(quotesList[randomNumber]);
        });
    }, false);
    getSong.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            var randomNumber = Math.floor(Math.random() * songsList.length);
            window.open(songsList[randomNumber], "_blank");
        });
    }, false);
}, false);

