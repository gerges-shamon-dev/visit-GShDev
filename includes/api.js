
var N_SiteWeb = LinkWeb.length;
var MySite_now = new Date();
var detik = MySite_now.getSeconds();
var VisitSiteWeb = detik % N_SiteWeb;
VisitSiteWeb += 0;

var N_SiteVideo = LinkVideo.length;
var MySite_now = new Date();
var detik = MySite_now.getSeconds();
var ShowVideo = detik % N_SiteVideo;
ShowVideo += 0;
