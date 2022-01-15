function SwitchLanguage() {

    if (localStorage.getItem('language') === 'English') {
        localStorage.setItem('language', 'German')
        document.getElementById("SwitchLanguage").innerHTML = "Language: German"

    } else if (localStorage.getItem('language') === 'German') {
        localStorage.setItem('language', 'English')
        document.getElementById("SwitchLanguage").innerHTML = "Language: English"

    } else {
        localStorage.setItem('language', 'English')
        document.getElementById("SwitchLanguage").innerHTML = "Language: English"
    }
}

function translate_index() {

    if (localStorage.getItem('language') === 'English') {
        document.getElementById("SwitchLanguage").innerHTML = 'Language: English'
        document.getElementById("info").innerHTML = 
        'As you can see, this site is not finished yet! <br>' + 
        'You can look into "Projects" if something is there, but it`s not much'
    } else {
        document.getElementById("info").innerHTML = 
        'Wie du sehen kannst, ist diese Seite noch nicht fertig! <br>' + 
        'Du kannst bei "Projects" schauen, was schon da ist, aber viel ist es noch nicht'
    }
}

function translate_applescript() {

    if (localStorage.getItem('language') === 'English') {
        document.getElementById("SwitchLanguage").innerHTML = 'Language: English'
        document.getElementById('apple1').innerHTML = 'Assistant (not finished)'
        document.getElementById('apple2').innerHTML = 'Flowey`s Time Machine (absolutely not finished)'
    } else {
        document.getElementById('apple1').innerHTML = 'Assistent (nicht fertig)'
        document.getElementById('apple2').innerHTML = 'Flowey`s Time Machine (absolut nicht fertig)'
    }
}