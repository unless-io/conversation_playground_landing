activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :sprockets

data.team.each do |key, team_member|
  proxy "/team/#{key}.html", "/templates/show.html", locals: { team_member: team_member }
end

data.workshops.each do |workshop|
  proxy "/cursus/#{workshop["slug"]}.html", "/templates/workshop.html", locals: { workshop: workshop }
end

ignore "/templates/show.html.erb"
ignore "/templates/workshop.html.erb"


page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end
