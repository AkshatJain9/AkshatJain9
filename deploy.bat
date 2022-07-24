call npm run build
git add dist -f
git commit -m "Deploying Updates to Github Pages $(Get-Date -format 'd')"
git subtree push --prefix dist origin gh-pages
git push