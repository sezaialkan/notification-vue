
## notification-vue

[![NPM Version](https://img.shields.io/badge/npm-v1.0.3-blue.svg)](https://www.npmjs.com/package/w8icon-vue) 

## using notification-vue

With the notification-vue package, you can show push notifications in a specific area of ​​the window. There is a time bar on the notification box and a time indicator of when the notification occurred.

# Demo 
https://notification.sezaialkan.com/

## notification-vue setup

#### npm
```
npm i notification-vue
```

Add the notification-vue package in the component you want to use after installation.

```Javascript
import notification from 'notification-vue'
```
ready to use
```Javascript
<notification :items="push"></notification>
```

```Javascript
let push = [
    {
        type: "success",
        duration: 6000,
        time: "2023-01-10 17:30:55",
        icon: true,
        title: "New Notification",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis rerum quidem unde reprehenderit iusto dolorum reiciendis quo tenetur magnam! Odio, earum? Quis accusamus magni dolorum officia amet sunt iusto beatae?",
    },
    {
        type: "success",
        duration: 6000,
        time: "2023-01-10 17:30:55",
        icon: true,
        title: "New Notification 2",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis rerum quidem unde reprehenderit iusto dolorum reiciendis quo tenetur magnam! Odio, earum? Quis accusamus magni dolorum officia amet sunt iusto beatae?",
    }
]
```


You can send your notifications as an array with the items prop su to the notification component. 

In addition, with the componente class feature, you can determine the position of your notifications relative to the screen.


## Parameters

| Name             | Value | Default Value |
| ----------------- | ------------------------------------------------------------------ | ---- |
| type | Specifies the type of notifications. danger, warning, success, info | info
| duration | determines the display time of the notification in milliseconds | 5000 |
| time | It takes time for the notification to occur. example: 2023-01-10 17:30:55 when a certain time is entered, it calculates the time according to the current time and informs the user in the notification box | 0 |
| icon  | determines the appearance and appearance of the icon in the notification box. takes the value false and true |  true
|title | Represents the title in the notification box | empty |
|text | Represents the Descriptive text in the notification box | empty |

## Position

With the following classes, you can determine its position on the screen with the notification component.

| Name             | Value |
| ----------------- | ------------------------------------------------------------------ |
| p-lt | Left Top |
| p-ct | Center Top |
| p-rt | Right Top |
| p-lb  | Left Bottom |
|p-cb | Center Bottom |
|p-rb | Right Bottom |