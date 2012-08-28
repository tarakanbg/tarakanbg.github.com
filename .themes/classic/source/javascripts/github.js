var github = (function(){
  function render(target, repos){
    var i = 0, fragment = '', t = $(target)[0];

    for(i = 0; i < repos.length; i++) {
      // fragment += '<li><a href="'+repos[i].url+'">'+repos[i].name+'</a><p>'+repos[i].description+'</p></li>';
      fragment += '<li><a href="'+repos[i].svn_url+'">'+repos[i].name+'</a><p>'+repos[i].description+'</p></li>';
    }
    t.innerHTML = fragment;
  }
  return {
    showRepos: function(options){
      $.ajax({
          // url: "http://github.com/api/v2/json/repos/show/"+options.user+"?callback=?"
          url: "https://api.github.com/users/"+options.user+"/repos?callback=?"
        , type: 'jsonp'
        , error: function (err) { $(options.target + ' li.loading').addClass('error').text("Error loading feed"); }
        , success: function(data) {
          var repos = [];
          // if (!data || !data.repositories) { return; }
          // for (var i = 0; i < data.repositories.length; i++) {
          //   if (options.skip_forks && data.repositories[i].fork) { continue; }
          //   repos.push(data.repositories[i]);
          if (!data || !data.data) { return; }
          for (var i = 0; i < data.data.length; i++) {
            var currentRepo = data.data[i];
            if (options.skip_forks && currentRepo.fork) { continue; }
            repos.push(currentRepo);
          }
          repos.sort(function(a, b) {
            var aDate = new Date(a.pushed_at).valueOf(),
                bDate = new Date(b.pushed_at).valueOf();

            if (aDate === bDate) { return 0; }
            return aDate > bDate ? -1 : 1;
          });

          if (options.count) { repos.splice(options.count); }
          render(options.target, repos);
        }
      });
    }
  };
})();
