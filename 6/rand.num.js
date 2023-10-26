let number = +prompt("Men 1 va 10  oralig'ida bir sonni o'yladim. \nTopingchi men qaysi sonni o'yladim 🙃.");
let men_oylagan_son = Math.floor(Math.random() * (10 - 1 + 1) + 1);
if (number == men_oylagan_son) {
	alert("Qoyil topdingiz 🤠");
} else {
	alert("Topilmadingiz! 😎 Men " + men_oylagan_son + " ni o'ylagandim");
}