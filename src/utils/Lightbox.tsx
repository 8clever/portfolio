

export class Lightbox {
    init = () => {
        if (process.browser) {
            setTimeout(() => {
                require("wa-mediabox/dist/wa-mediabox.min");
                const w = typeof window === "object" ? window : {} as any;
                w.WAMediaBox.bindAll(document.querySelector("body"));
                w.WAMediaBox.lang = {
                    prev: "Previous",
                    next: "Next",
                    close: "Close",
                    openInNew: "Open in new window"
                };
            });
        }   
    };
}