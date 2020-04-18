export class Lightbox {
    init = () => {
        setImmediate(() => {
            require("wa-mediabox/dist/wa-mediabox.min");
            window.WAMediaBox.bindAll(document.querySelector("body"));
            window.WAMediaBox.lang = {
                prev: "Previous",
                next: "Next",
                close: "Close",
                openInNew: "Open in new window"
            };
        });
    };
}