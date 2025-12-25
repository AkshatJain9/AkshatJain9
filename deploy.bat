call npm run build
git add dist -f
git commit -m "Deploying Updates to Github Pages"
git subtree push --prefix dist origin gh-pages
