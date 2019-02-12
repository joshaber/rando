workflow "New workflow" {
  on = "push"
  resolves = [
    "HTTP client",
    "Filters for GitHub Actions",
  ]
}

action "HTTP client" {
  uses = "swinton/httpie.action@02571a073b9aaf33930a18e697278d589a8051c1"
}

workflow "Cool workflow" {
  on = "push"
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@ec328c7554cbb19d9277fc671cf01ec7c661cd9a"
}
