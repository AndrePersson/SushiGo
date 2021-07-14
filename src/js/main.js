console.log('main.js');
// Settings
var maxPlayers = 5;
var startPlayers = 1;
var currentPlayers = 0;
var addPlayerHTML = '';
var players = [];
var randomNames = [
    'Chet',
    'Brynn',
    'Clement',
    'Avelina',
    'Iliana',
]

$('.addPLayer').on('click', function() {
    console.log('Add player');
    if (currentPlayers < maxPlayers) {
        addPlayer();
    }
    if (currentPlayers == maxPlayers) {
        $(this).addClass('d-none');
    }
    console.log(currentPlayers);
});
$('.playerList').keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        addPlayer();
    }
});
$('.start').on('click', function() {
    startGame();
});
$('.reset').on('click', function() {
    resetGame();
})
$(function() {
    $('.start').addClass('disabled');
    while (currentPlayers < startPlayers) {
        if (currentPlayers > 1) {
            $('.start').removeClass('disabled');
        }
        addPlayer();
    }
});

function addPlayer() {
    currentPlayers++;
    if (currentPlayers > 1) {
        $('.start').removeClass('disabled');
    }
    var addPlayerHTML = '<div class="input-group mb-2">' +
        '<input name="players[]" type="text" class="form-control playerOne" placeholder="Player ' +
        currentPlayers +
        ' name..">' +
        '</div>';
    $('.playerList').append(addPlayerHTML);
    $('.playerList input').last().trigger('focus');
};

function startGame() {
    $('.preGame').hide(500);
    $('.firstRound').show(500);
    var random = 0;

    players = $("input[name='players[]']")
        .map(function() {
            if ($(this).val() == '') {
                random++;
                return randomNames[random];
            } else {
                return $(this).val();
            }
        }).get();

    console.log(players);
}

function resetGame() {
    $('.firstRound').hide(500);
    $('.preGame').show(500);
}