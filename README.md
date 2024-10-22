# Task - Class Binding

This project demonstrates the use of **class binding** in Vue.js. The app includes a simple interface with buttons that allow you to toggle between different letters (`A`, `B`, `C`), applying dynamic class bindings based on the selected letter. The current active letter is reflected visually, and the application utilizes Vue.js directives to handle state and class management.

## Project Overview

- **Buttons**: There are three buttons labeled `A`, `B`, and `C`. When a button is clicked, it sets the active letter to the respective value.
- **Active State**: The button corresponding to the active letter receives an `active` class, and the letter displayed is also highlighted based on which letter is active.
- **Dynamic Class Binding**: Vue.js’ `:class` directive is used to conditionally apply CSS classes based on the state (`activeLetter`).