# Create new project with vite

yarn create vite typescript-pocd
--> select react-ts template

# Setup git

echo "# typescript-pocd" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:ngocanhth/typescript-pocd.git
git push -u origin main

# Install other package
yarn add path @types/node react-router-dom history react-redux @reduxjs/toolkit axios react-slick slick-carousel
yarn add -D sass @types/react-slick tailwindcss @tailwindcss/aspect-ratio @tailwindcss/line-clamp tailwindcss-labeled-groups


npx tailwindcss -i ./src/index.css -o ./src/sass/_tailwind.scss --watch
npx tailwindcss -i ./src/index.css -o ./src/tailwind.css --watch

yarn add react-hook-form yup  @hookform/resolvers jwt-decode
# clothing

- logo: https://tatthanh.com.vn/logo-shop-quan-ao-nu

# Free icons styles
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/free-regular-svg-icons


# Header
https://preview.themeforest.net/item/retro-clean-minimal-ecommerce-nextjs-redux-template/full_screen_preview/33938980?_ga=2.6511344.337519482.1662803765-1187137013.1662803765&_gac=1.229036526.1662803765.Cj0KCQjw6_CYBhDjARIsABnuSzrSZpAuzkUX-3jjdWDmKsnX8o4ueCMkbRflivmasUUJ4g6td_NLooEaAsVQEALw_wcB
# New Arrival
https://luan-react.hibotheme.com/

# Category
https://preview.themeforest.net/item/retro-clean-minimal-ecommerce-nextjs-redux-template/full_screen_preview/33938980?_ga=2.6511344.337519482.1662803765-1187137013.1662803765&_gac=1.229036526.1662803765.Cj0KCQjw6_CYBhDjARIsABnuSzrSZpAuzkUX-3jjdWDmKsnX8o4ueCMkbRflivmasUUJ4g6td_NLooEaAsVQEALw_wcB