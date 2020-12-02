
const w = window as any;

export class Lightbox {
    init = () => {
        setImmediate(() => {
            require("wa-mediabox/dist/wa-mediabox.min");
            w.WAMediaBox.bindAll(document.querySelector("body"));
            w.WAMediaBox.lang = {
                prev: "Previous",
                next: "Next",
                close: "Close",
                openInNew: "Open in new window"
            };
        });
    };
}