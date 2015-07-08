$(document).ready(function() {
	$('.tree > ul').attr('role', 'tree').find('ul').attr('role', 'group');
	$('.tree').find('li:has(ul)').addClass('parent_li').attr('role', 'treeitem').find(' > span').attr('title', 'Collapse this branch').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(':visible')) {
    		children.hide('fast');
    		if($(this).attr('title', 'Expand this branch').find(' > i').hasClass('icon-folder-open')) {
			$(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-folder-close').removeClass('icon-folder-open');
		} else {
			$(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
		}
        }
        else {
    		children.show('fast');
    		if($(this).attr('title', 'Collapse this branch').find(' > i').hasClass('icon-folder-close')) {
			$(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-folder-open').removeClass('icon-folder-close');
		} else {
			$(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
		}
        }
        e.stopPropagation();
    });
});
