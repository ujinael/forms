import { Plugin } from "vue";
import VInput from "./components/VInput.vue";
import VTextArea from "./components/VTextArea.vue";
import VSelect from "./components/VSelect.vue";

export const installFormPlugin:Plugin={
    install(app, ...options) {
        app.component("f-input",VInput)
        app.component("f-textarea",VTextArea)
        app.component("f-select",VSelect)

}
    }
    
