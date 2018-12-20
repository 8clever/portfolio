export class Lightbox {
    init = () => {
        setImmediate(() => {
            require("wa-mediabox/src/wa-mediabox");
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