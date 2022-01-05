setInterval(function(){
    $.ajax({url: '/real-time/word_counts', success: function(data) {
        var counts_data = $.parseJSON(data);
        var data = [{
		x: counts_data['words'],
		y: counts_data['counts'],
		type: 'bar',
		text: counts_data['counts'].map(String),
		textposition: 'auto',
		hoverinfo: 'none',
		marker: {
			color: 'rgb(220, 248, 198)',
			opacity: 0.6,
			line: {
				color: 'rgb(8, 48, 107)',
				width: 1.5
			}
		}
        }];

        var layout = {
		title: 'Most used terms',
		barmode: 'stack'
        };

        Plotly.newPlot('second', data, layout);
    }});
},5000);

setInterval(function(){
    $.ajax({url: '/real-time/hashtag_counts', success: function(data) {
        var hashtagcounts_data = $.parseJSON(data);
        var data = [{
		x: hashtagcounts_data['words'],
		y: hashtagcounts_data['counts'],
		type: 'bar',
		text: hashtagcounts_data['counts'].map(String),
		textposition: 'auto',
		hoverinfo: 'none',
		marker: {
			color: 'rgb(220, 248, 198)',
			opacity: 0.6,
			line: {
				color: 'rgb(8, 48, 107)',
				width: 1.5
			}
		}
        }];

        var layout = {
		title: 'Most used hashtags',
		barmode: 'stack'
        };

        Plotly.newPlot('first', data, layout);
    }});
},5000);

setInterval(function(){
    $.ajax({url: '/graph', success: function(data) {
        var graphs = $.parseJSON(data);
        var layout = {
		title: 'Tweets geo location from past streaming data',
		font: {size: 10},
		showlegend: false,
        };

        var config = {responsive: true};
        Plotly.newPlot('third', graphs, layout, config);
    }});
}, 5000);


setInterval(function(){
    $.ajax({
	url: '/real-time/sentiments',
	success: function(data) {
		$("#total_counter_value").html(data['total'])
		$("#positive_counter").html(data['positive'] + " %")
// 		$("#neutral_counter").html(data['neutral'] + " %")
		$("#negative_counter").html(data['negative'] + " %")
	}
    });
},5000);