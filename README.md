# Using

Install yarn

```shell
npm i -g yarn
```

Next install required dependencies

```shell
yarn i
```

Next build the compile the `scss` file into a `css` file

```shell
yarn build
```

Select the resulting file in the generated `build` folder called `style.css`, copy all the contents. Next goto Anki. Click `b` from home to go to the card browser, then on the toolbar at the top go to `Notes > Manage Note Types > [Select the card deck you wish to] > Cards > Styling`.

Paste all contents in there, replacing the text file.

Next, copy the `_lake.jpeg` located inside the `public` folder to your anki `collection.media` folder, (by default located in `~/Library/Application Support/Anki2/User 1/collection.media` on macos) or as specified in the [anki manual](https://docs.ankiweb.net/templates/styling.html?highlight=font#installing-fonts). Everything should be good to go.
