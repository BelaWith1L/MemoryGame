/* Google Fonts */

@import url('https://fonts.googleapis.com/css?family=Sawarabi+Mincho');

html {
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

html,
body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

body {

    /* Background pattern from Subtle Patterns */
    font-family: 'Sawarabi Mincho', sans-serif;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fff url('../img/abstract.jpg') no-repeat;
    background-position: center;
    background-size: cover;
}

h1 {
    font-family: 'Sawarabi Mincho', sans-serif;
    font-weight: 300;
    letter-spacing: 3px;
    font-size: 2.5em;
    background: linear-gradient(160deg, #02ccba 0%, #aa7ecd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

h2 {
    font-family: 'Sawarabi Mincho', sans-serif;
    font-weight: 200;
    letter-spacing: 2px;
    font-size: 1.5em;
    color: navy;
    font-style: italic;
}


/* Card Design Styling */

.deck {
    width: 660px;
    min-height: 680px;
    background: linear-gradient(160deg, #02ccba 0%, #aa7ecd 100%);
    padding: 32px;
    border-radius: 10px;
    box-shadow: 12px 15px 20px 0 rgba(46, 61, 73, 0.5);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 3em;
}

.card {
    transform: rotateY(180deg);
    transform-style: preserve-3d;
    transition: transform .4s ease;
}

.deck .card {
    height: 125px;
    width: 125px;
    background: #2e3d49;
    font-size: 0;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);
}

.deck .card.open {
    transform: rotateY(0);
    background: #02b3e4;
    cursor: default;
}

.deck .card.show {
    font-size: 33px;
}

.deck .card.match {
    cursor: default;
    background: #02ccba;
    font-size: 33px;
    transition: 1s;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
}

.deck .card.no-match {
    background-color: #fa7280;
}

/* Score Panel Styling */

.move-count {
    margin: auto 10px auto 10px;
}

.score-panel {
    text-align: left;
    padding: 20px;
    margin: 20px;
    background: #0097b2;
    color: #fff;
    font-weight: 700;
    border-radius: 8px;
    font-size: 18px;
    width: 420px;
    margin: 5px auto 10px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.score-panel .stars {
    display: inline-block;
    margin: auto 5px auto 0;
}

ul.stars {
    padding: 0;
}

li {
    list-style: none;
    display: inline-block;
}

i.fa-star {
    color: gold;
}

i.fa-sync {
    color: darkblue;
}

.restart i {
    background-color: #6fc4d3;
    color: #fff;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 50%;
}

.restart i:hover {
    background-color: #fff;
    color: #6fc4d3;
    transition: 1s;
}

.score-panel .restart {
    float: right;
    cursor: pointer;
}

.time {
    margin: auto 20px auto 10px;
}

.star-empty {
    opacity: 0.1;
}

/* Modal Congratulations Message */

.modal {
    display: none;
    position: absolute;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: lightblue;
    opacity: 1;
}

.modal-message {
    text-align: center;
    background-color: mediumseagreen;
    margin: 15% auto;
    padding: 20px;
}

.win-message {
    font-size: 27px;
    letter-spacing: 2px;
}

footer {
    justify-content: flex-end;
    text-align: center;
    text-shadow: 1px 1px #888;
    font-style: italic;
}
