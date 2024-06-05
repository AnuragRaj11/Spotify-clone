let currentsong=new Audio();
let songs;
let currentfolder;

function secondstoMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds<0) {
        return "00:00";
    }

    const min=Math.floor(seconds/60);
    const remaingsec=Math.floor(seconds%60);

    const formatmin=String(min).padStart(2,'0');
    const formatsec=String(remaingsec).padStart(2,'0');

    return '${formatmin}:${formatsec}';
}

async function getsongs(folder) {
    currentfolder=folder;
    let a=await fetch('/${folder}/')
    let resp=await a.text();
    let div=document.createElement("div")
    div.innerHTML=resp;
    let as=div.getElementsByTagName("a")
    songs=[]
    for (let index = 0; index < as.length.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split('/${folder}/')[1])
        }
    }
}