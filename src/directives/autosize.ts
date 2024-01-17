import { onCleanup, Accessor } from "solid-js";

export function autosize(image: HTMLImageElement, scale: Accessor<number>) {
    const setImageSize = () => {
        image.width = image.naturalWidth * scale();
        image.height = image.naturalHeight * scale();
    };

    if (image.naturalWidth) {
        setImageSize();
    }
    else {
        image.addEventListener("load", setImageSize, {
            once: true,
        });
        onCleanup(() => image.removeEventListener("click", setImageSize));
    }
}

declare module "solid-js" {
    namespace JSX {
        interface DirectiveFunctions {  // use:autosize
            autosize: typeof autosize;
        }
    }
}
