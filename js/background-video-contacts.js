    $(document).ready(function () {
    	var videobackground = new $.backgroundVideo($('body'), {
    		"align": "centerXY",
    		"width": 1280,
    		"height": 720,
    		"path": "video1/",
    		"filename": "daisy",
    		"types": ["mp4"],
    		"preload": true,
    		"autoplay": true,
    		"loop": true,
			"muted": true
    		
    	});
    });
