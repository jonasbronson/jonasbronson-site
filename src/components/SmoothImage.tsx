import React from "react";

type SmoothImageProps = {
    /** Imported image source. */
    src: string;
    /** Aspect ratio as width / height. Reserves space up front so the image
     *  causes no layout shift (jitter) when it finishes loading. */
    ratio: number;
    /** Class that controls the image's size/position. Applied to the wrapper
     *  so existing CSS keeps working; the image fills the wrapper. */
    className?: string;
    alt?: string;
    style?: React.CSSProperties;
};

export default function SmoothImage({ src, ratio, className, alt = "", style }: SmoothImageProps) {
    const [loaded, setLoaded] = React.useState(false);

    // A new src means a new image to load, so hide it again until it's ready.
    React.useEffect(() => {
        setLoaded(false);
    }, [src]);

    return (
        <span
            className={`smoothImg${className ? ` ${className}` : ""}`}
            style={{ aspectRatio: String(ratio), ...style }}
            data-loaded={loaded}
        >
            <img
                src={src}
                alt={alt}
                decoding="async"
                onLoad={() => setLoaded(true)}
                // Handles images already in cache, which may skip onLoad.
                ref={(node) => {
                    if (node?.complete) setLoaded(true);
                }}
            />
        </span>
    );
}
