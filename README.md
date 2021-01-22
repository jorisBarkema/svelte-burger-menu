# svelte-burger-menu
Simple burger menu for Svelte with CSS transformations and transitions. Tested in Chrome, Edge, Firefox.<br>  
Demo: [svelte-burger-menu](https://svelte.dev/repl/9fae5dd43aae48feaa1018bbd798de0e?version=3.31.2)
# How to use
To import the Burgermenu, install the component using 
```
npm install svelte-burger-menu
```

And in the file where you want to use it:
```
<script>
    import BurgerMenu from 'svelte-burger-menu';
</script>

<BurgerMenu>
    <h2>Home</h2>
    <h2>About</h2>
</BurgerMenu>
```

# Props
| Name             | Description                                                                                                     | Default                 |
| ---------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------- |
| duration         | Duration of the opening transition in seconds as a number                                                       | 0.4                     |
| width            | Width of the opened menu, accepts CSS values such as '300px' and '50%'                                          | '300px'                 | 
| backgroundColor  | Background color of the opened menu, accepts CSS colors                                                         |'rgb(1, 0, 74)'          |
| menuColor        | Color of the text in the menu and the close menu button, accepts CSS colors                                     | 'rgb(180, 180, 180)'    |
| burgerColor      | Color of the burger when the menu is not open, accepts CSS colors                                               | 'rgb(18.4, 18.4, 18.4)' |
| padding          | padding inside the menu for the props within, accepts CSS values such as '30px' and '10%'                       | '25px'                  |
| paddingTop       | padding inside the menu for the top to prevent items comign underneath the close menu button, accepts CSS values| '50px'                  |
