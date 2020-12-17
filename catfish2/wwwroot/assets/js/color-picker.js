﻿Vue.component("color-picker", {
    props: ["uid", "toolbar", "model", "meta"],
    template: `
        <div>
            <label for="favcolor">Select the color for the header text:</label>
            <input type="color" id="header-text-color-picker" name="favcolor" v-model="model.value"><br><br>
        </div>
`
});