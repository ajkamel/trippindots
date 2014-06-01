var SearchFormView = Backbone.View.extend({
  el: 'div#search-form',
  initialize: function() {
    this.template = _.template($("#search-form-template").html());
    this.render();
  },
  events: {
    'click #search-button': "getEchoNestData"
  },
  render: function() {
    this.$el.html(this.template);
  },
  getEchoNestData: function() {
    $('#trippin-display').empty(); // this empties the div that displays the dots
    var title = this.$('#search-input').val();
    var sensitivity = this.$('#sensitivity-input').val();
    title = title.split(' ').join('+');
    $.ajax({
      url: '/search',
      type: 'GET',
      data: {title: title},
      dataType: 'json'
    }).done(function(data) {
      var appView = new TrippinDotsView({
        data: data['response'],
        sensitivity: sensitivity,
        itunes_audio: data['itunes_audio'],
        artist_name: data['artist_name'],
        song_name: data['song_name']
      });
    appView.$el.appendTo($('#trippin-display'));
    });
  }
})
