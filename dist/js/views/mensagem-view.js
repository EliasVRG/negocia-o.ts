import { View } from "./view.js";
export class MensagemView extends View {
    template(model) {
        return `
            <p class="alet alert-info">${model}</p>
        `;
    }
}
