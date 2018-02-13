
$(document).ready(function() {
	$(".modalTabsNotes").click(function() {
		$(".modalTabs>.active").addClass("inactive");
		$(".modalTabs>.active").removeClass("active");
		$(".modalTabsNotes").addClass("active");
	});


	$(".modalTabsHistory").click(function() {
		$(".modalTabs>.active").addClass("inactive");
		$(".modalTabs>.active").removeClass("active");
		$(".modalTabsHistory").addClass("active");
	});
	
	$(".addNote").click(function() {
		alert("ADD NOTE");
	});
	$(".noteListBlock").click(function() {
		alert("View/Edit Note");
	});
	
	
	var notes = [
		{"noteID": 1	,"date":"6/02/2018",	"author":"James Jordan",	"note":"Lorem ipsum dolor sit amet, detracto gloriatur efficiantur sea an, vix ne sumo vivendo. Vis homero viderer nonumes in, per eu adhuc meliore intellegat. An has legere omnium aliquam. Cu semper persius gloriatur eam."},	
		{"noteID": 2	,"date":"7/01/2018",	"author":"David Jordan",	"note":"Lorem ipsum dolor sit amet, ne sed essent viderer repudiare, in vel atqui fabellas honestatis, sea eu tale forensibus abhorreant. Duo no atqui aeterno. Ei duis primis habemus qui, ius ei idque vulputate democritum, quod quas brute pro ad. Est error errem laboramus an, munere docendi an eum, quo no solum discere antiopam."},	
		{"noteID": 3	,"date":"6/02/2018",	"author":"James Jordan",	"note":"Lorem ipsum dolor sit amet, te evertitur persequeris vim. An mea animal impedit, integre eloquentiam ex nam, ne periculis hendrerit mel. Vis graece habemus an, semper dicunt urbanitas an vix. Mea vide imperdiet consequuntur ei, sed et stet feugiat persequeris."},	
		{"noteID": 4	,"date":"14/01/2018",	"author":"David Jordan",	"note":"Lorem ipsum dolor sit amet, an odio quot est. In libris perpetua has, cum ex zril accumsan perfecto. Usu an platonem qualisque, sea autem discere sententiae ea, eos soluta inciderint disputando id. Ex scaevola euripidis neglegentur eum, eu simul tempor theophrastus vis."},	
		{"noteID": 5	,"date":"18/01/2018",	"author":"James Jordan",	"note":"Lorem ipsum dolor sit amet, mea in minim nonumy admodum, mea ei novum exerci molestie. Eam timeam diceret id, has ut liber electram. An vel inani nullam dissentiet, euismod dolores nominati ex vim. Tibique disputationi in cum, in mel verterem percipitur. Mea cu possit menandri, pri accusamus reformidans ut."},	
		{"noteID": 6	,"date":"22/01/2018",	"author":"David Jordan",	"note":"Lorem ipsum dolor sit amet, eros dolore graece sit te, modus dicat ocurreret sed ea. Ne quo error dicant concludaturque, ipsum clita nemore eu cum, ex congue dolores mea. Quo an elit detraxit. Noster virtute incorrupte id vel, eum ea quis liber eligendi."},	
		{"noteID": 7	,"date":"1/01/2018",	"author":"James Jordan",	"note":"Lorem ipsum dolor sit amet, eu quo brute delenit voluptatum, pro novum oblique id, vix ne malis facilisis disputationi. Mei no omnes posidonium, te vide dicat solet sea, sea eu duis laboramus. Quo ex quem probo mandamus, legimus eleifend ea vix. Nam diceret invenire et, ea eam tantas scribentur. Iudico civibus invidunt an vix. Illud inciderint cu est, eos tale nonumes omnesque ad, minim oblique perfecto duo ex. Pri eu tempor nemore, no sea consul postulant efficiendi."},	
		{"noteID": 8	,"date":"11/01/2018",	"author":"David Jordan",	"note":"Lorem ipsum dolor sit amet, liber maiorum invenire pro ut. At possit inciderint pri. Id omnis qualisque similique vim, per probo nostrud elaboraret in. Ea nibh solet eam, ad quod dicat adipiscing mea."},	
		{"noteID": 9	,"date":"2/02/2018",	"author":"James Jordan",	"note":"Lorem ipsum dolor sit amet, et sea tibique tincidunt repudiandae, id eum sonet abhorreant, partem vocibus vis id. Intellegat comprehensam an qui, option corrumpit cum te. Ex accumsan inimicus ocurreret quo, diam nullam mei ei. Ea pertinax disputando mel. Eu eum legere signiferumque, ne idque essent vim."},	
		{"noteID": 10	,"date":"9/02/2018",	"author":"David Jordan",	"note":"Lorem ipsum dolor sit amet, aeque antiopam eu mea, quo sumo posse voluptatum ut. Postulant accusamus corrumpit no vel, ex novum iriure qualisque vim. Sea vero vulputate et, te ius sale consulatu, sea inani utamur in. Nam munere verear animal ea, everti admodum eu has."},	
		{"noteID": 11	,"date":"30/01/2018",	"author":"James Jordan",	"note":"Lorem ipsum dolor sit amet, ea timeam deserunt pro. Reque gubergren his ex. Hinc altera posidonium ea vix, eum dolor cetero ei, at enim laoreet mel. Sit et illum malis putant. Ignota prodesset cu pro."},	
		{"noteID": 12	,"date":"8/01/2018",	"author":"David Jordan",	"note":"Lorem ipsum dolor sit amet, pro ex odio debet populo, ex eos illud numquam. Intellegam reprehendunt nec et. Te cum debitis moderatius, no agam oblique dolores quo. In purto falli repudiare mea, in eam dolore tempor voluptatibus, eum sumo platonem mediocritatem eu. Eos ex urbanitas abhorreant omittantur, erat illud evertitur est ei, has an altera expetenda. Id pri omnes aperiri, et pri nonumy postulant, omnis eirmod per ut. Ad idque mucius deseruisse vis, eum ad equidem platonem suavitate."},	
		{"noteID": 13	,"date":"11/01/2018",	"author":"James Jordan",	"note":"Lorem ipsum dolor sit amet, id mei sale atqui civibus. Quis labores ei pri, cum quas scripta detraxit ut. Nec ut docendi quaestio platonem. Eum et eros dicit, nec cu magna scribentur. His cu choro quando nusquam, sumo homero invenire quo id."},	
		{"noteID": 14	,"date":"20/01/2018",	"author":"David Jordan",	"note":"Lorem ipsum dolor sit amet, modo virtute ocurreret ius in. Quo dico labitur delectus ad, veri latine ne mel. Veniam noster an vim. Ea mea dissentiunt complectitur, simul dissentiet in mel. Dico timeam est ad, an mea etiam iriure insolens."},	
		{"noteID": 15	,"date":"5/01/2018",	"author":"James Jordan",	"note":"Lorem ipsum dolor sit amet, nec reque graeco bonorum in, vel at amet habeo oratio. Amet meliore aliquando an sea, mea eu quis nemore quaerendum. Cu error populo splendide nec. Commodo deterruisset sea in. Cum ei vidit constituto dissentias."},
		{"noteID": 16	,"date":"20/01/2018",	"author":"David Jordan",	"note":"Lorem ipsum dolor sit amet, mei consul blandit id, ei duo discere sententiae instructior. Velit quidam hendrerit has in. Soluta tacimates sapientem eos ei, epicuri apeirian no sed. Eum an illum legere intellegebat, per ne virtute atomorum, te pri oratio invidunt torquatos. Eos agam deseruisse inciderint ne, nominati maluisset torquatos duo an, qui at vero ullum."}
	]
	
	for (i=0; i<notes.length; i++){
		var note = notes[i];
		$(".modalContentNotes").append("<div class=\"noteListBlock\">\
					<div class=\"noteListInfo\"><span class=\"noteListDate\">"+note.date+"</span> - <span class=\"noteListAuthor\">"+note.author+"</span></div>\
					<div class=\"noteListText\">"+note.note+"</div>\
				</div>")
	}
	var modal = $(".customModal.customModalNotes")[0];
	$(modal).css("display", "flex").hide().fadeIn("slow");
});