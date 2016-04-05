/***************************	 	
		PAGE VARIABLES		
***************************/
var homePage = $('.home-page');
var animalPage = $('.animal-album');
var cloudPage = $('.cloud-album');
var treePage = $('.tree-album');
var rainPage = $('.rain-album');
var rainbowPage = $('.rainbow-album');
var randomPage = $('.random-album');
var sidebarEl = $('.sidebar');
var slideShow = $('.slideshow');

/***************************	 	
	NAVIGATION VARIABLES		
***************************/
var homeEl = $('.home');
var animalsEl = $('.animals');
var cloudsEl = $('.clouds');
var treesEl = $('.trees');
var rainyEl = $('.rainy');
var rainbowsEl = $('.rainbows');
var randomEl = $('.random');

/***************************	 	
		PHOTO ALBUMS		
***************************/

let animalPix = [
	{
		imageUrl: 'images/animals/milo.jpg',
		title: 'milo',
		class: 'animal-pic',
		id: 0
	},

	{	
		imageUrl: 'images/animals/grackles.jpg',
		title: 'grackles',
		class: 'animal-pic',
		id: 1
	},

	{	
		imageUrl: 'images/animals/bees.jpg',
		title: 'bees!',
		class: 'animal-pic',
		id: 2
	},	

	{
		imageUrl: 'images/animals/squirrel.jpg',
		title: 'squirrel',
		class: 'animal-pic',
		id: 3
	},
	
	{	
		imageUrl: 'images/animals/purple_martins.jpg',
		title: 'purple martins',
		class: 'animal-pic',
		id: 4
	},
		
	{	
		imageUrl: 'images/animals/milo2.jpg',
		title: 'milo again',
		class: 'animal-pic',
		id: 5
	}
]

let cloudPix = [
	{
		imageUrl: 'images/clouds/altocumulus.jpg',
		title: 'altocumulus',
		class: 'cloud-pic',
		id: 0
	},

	{	
		imageUrl: 'images/clouds/altostratus.jpg',
		title: 'altostratus',
		class: 'cloud-pic',
		id: 1
	},

	{	
		imageUrl: 'images/clouds/cirrocumulus.jpg',
		title: 'cirrocumulus!',
		class: 'cloud-pic',
		id: 2
	},	

	{
		imageUrl: 'images/clouds/cirrostratus.jpg',
		title: 'cirrostratus',
		class: 'cloud-pic',
		id: 3
	},
	
	{	
		imageUrl: 'images/clouds/mammatus.jpg',
		title: 'mammatus',
		class: 'cloud-pic',
		id: 4
	},
		
	{	
		imageUrl: 'images/clouds/cumulonimbus.jpg',
		title: 'cumulonimbus',
		class: 'cloud-pic',
		id: 5
	}
]

let treePix = [
	{
		imageUrl: 'images/trees/tree01.jpg',
		title: 'yellow tree',
		class: 'tree-pic',
		id: 0
	},

	{	
		imageUrl: 'images/trees/tree02.jpg',
		title: 'red tree',
		class: 'tree-pic',
		id: 1
	},

	{	
		imageUrl: 'images/trees/tree03.jpg',
		title: 'night tree',
		class: 'tree-pic',
		id: 2
	},

	{	
		imageUrl: 'images/trees/tree03.jpg',
		title: 'sunset tree',
		class: 'tree-pic',
		id: 3
	}
]

let rainPix = [
	{	
		imageUrl: 'images/rainy/austin_skyline.jpg',
		title: 'austin skyline',
		class: 'rain-pic',
		id: 0
	},	

	{	
		imageUrl: 'images/rainy/bullock.jpg',
		title: 'bullock museum',
		class: 'rain-pic',
		id: 1
	},

	{	
		imageUrl: 'images/rainy/leaf.jpg',
		title: 'a leaf',
		class: 'rain-pic',
		id: 2
	},

	{	
		imageUrl: 'images/rainy/shoal_creek.jpg',
		title: 'shoal creek',
		class: 'rain-pic',
		id: 3
	}
]

let rainbowPix = [
	{	
		imageUrl: 'images/rainbow/double_rainbow.jpg',
		title: 'double rainbow',
		class: 'rainbow-pic',
		id: 0
	},	

	{	
		imageUrl: 'images/rainbow/flat_rainbow.jpg',
		title: 'flat rainbow',
		class: 'rainbow-pic',
		id: 1
	},	

	{	
		imageUrl: 'images/rainbow/rainbow_birds.jpg',
		title: 'rainbow birds',
		class: 'rainbow-pic',
		id: 2
	},

	{	
		imageUrl: 'images/rainbow/rainbow_birds2.jpg',
		title: 'more rainbow birds',
		class: 'rainbow-pic',
		id: 3
	},

	{	
		imageUrl: 'images/rainbow/secret_rainbow.jpg',
		title: 'secret rainbow',
		class: 'rainbow-pic',
		id: 4
	}	
]

let randomPix = [
	{	
		imageUrl: 'images/random/murder_cookie.jpg',
		title: 'murder cookie',
		class: 'random-pic',
		id: 0
	},

	{	
		imageUrl: 'images/random/dinosaur_print.jpg',
		title: 'dinosaur print',
		class: 'random-pic',
		id: 1
	},	

	{	
		imageUrl: 'images/random/dinosaur_prints.jpg',
		title: 'dinosaur prints',
		class: 'random-pic',
		id: 2
	},

	{	
		imageUrl: 'images/random/skull.jpg',
		title: 'crystal skull',
		class: 'random-pic',
		id: 3
	},

	{	
		imageUrl: 'images/random/umbrellas.jpg',
		title: 'ceiling umbrellas',
		class: 'random-pic',
		id: 4
	},

		{	
		imageUrl: 'images/random/weird_princess.jpg',
		title: 'weird princess',
		class: 'random-pic',
		id: 5
	},
]


// show home page; hide sidebar and everything else
homeEl.on('click', (e) => {
	sidebarEl.addClass('hidden');
	homePage.removeClass('hidden');
	animalPage.addClass('hidden');
	cloudPage.addClass('hidden');
	treePage.addClass('hidden');
	rainPage.addClass('hidden');
	rainbowPage.addClass('hidden');
	randomPage.addClass('hidden');
});

// show animal page and sidebar; hide everything else
animalsEl.on('click', (e) => {
	sidebarEl.removeClass('hidden');
	homePage.addClass('hidden');
	animalPage.removeClass('hidden');
	cloudPage.addClass('hidden');
	treePage.addClass('hidden');
	rainPage.addClass('hidden');
	rainbowPage.addClass('hidden');
	randomPage.addClass('hidden');
});

// show cloud page and sidebar; hide everything else
cloudsEl.on('click', (e) => {
	sidebarEl.removeClass('hidden');
	homePage.addClass('hidden');
	animalPage.addClass('hidden');
	cloudPage.removeClass('hidden');
	treePage.addClass('hidden');
	rainPage.addClass('hidden');
	rainbowPage.addClass('hidden');
	randomPage.addClass('hidden');
});

// show tree page and sidebar; hide everything else
treesEl.on('click', (e) => {
	sidebarEl.removeClass('hidden');
	homePage.addClass('hidden');
	animalPage.addClass('hidden');
	cloudPage.addClass('hidden');
	treePage.removeClass('hidden');
	rainPage.addClass('hidden');
	rainbowPage.addClass('hidden');
	randomPage.addClass('hidden');
});

// show rainy page and sidebar; hide everything else
rainyEl.on('click', (e) => {
	sidebarEl.removeClass('hidden');
	homePage.addClass('hidden');
	animalPage.addClass('hidden');
	cloudPage.addClass('hidden');
	treePage.addClass('hidden');
	rainPage.removeClass('hidden');
	rainbowPage.addClass('hidden');
	randomPage.addClass('hidden');
});

// show rainbow page and sidebar; hide everything else
rainbowsEl.on('click', (e) => {
	sidebarEl.removeClass('hidden');
	homePage.addClass('hidden');
	animalPage.addClass('hidden');
	cloudPage.addClass('hidden');
	treePage.addClass('hidden');
	rainPage.addClass('hidden');
	rainbowPage.removeClass('hidden');
	randomPage.addClass('hidden');
});


// show random page and sidebar; hide everything else
randomEl.on('click', (e) => {
	sidebarEl.removeClass('hidden');
	homePage.addClass('hidden');
	animalPage.addClass('hidden');
	cloudPage.addClass('hidden');
	treePage.addClass('hidden');
	rainPage.addClass('hidden');
	rainbowPage.addClass('hidden');
	randomPage.removeClass('hidden');
});


// animalPix.forEach((val,  i, arr) => {
// 	var slideImg = $('<img>').attr('src', animalPix[i].imageUrl);
// 	var slideCaption = $('<h1></h1>').html(animalPix[i].title);
// 	$('#overlay').append(slideCaption);
// 	$('#overlay').append(slideImg);
// });

$('.clicked').on('click', (e) => {
	var $clicked = $(e.target);
	var closebtn = $('<div class="btn close-btn"></div>').html('&times;');
	var slideImg = $('<img>').attr('src', ($clicked.attr('src')));
	var slideCaption = $('<h1 class="clearfix"></h1>').html($clicked.attr('title'));
	$('#overlay').html('');
	$('#overlay').append(closebtn);
	$('#overlay').append(slideCaption);
	$('#overlay').append(slideImg);
	$('#overlay').css('height', '100%');
	$(closebtn).on('click', (e) => {
		$('#overlay').css('height', '0%');
	});
});


// $('.image-1').on('click', function(e){
// 	animalPage.addClass('hidden');
// 	slideShow.removeClass('hidden');
// 	$('.image-title').html(animalPix[0].title);
// 	$('.image-url').attr('src', animalPix[0].imageUrl);
// 	console.log('yo');
// });

// var slideImg = $('<img>').attr('src', animalPix[0].imageUrl);
	// var slideCaption = $('<h1></h1>').html(animalPix[0].title);
	// $('#overlay').append(slideCaption);
	// $('#overlay').append(slideImg);



