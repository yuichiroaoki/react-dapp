import { useEffect, useRef } from "react";
import { Provider } from "@ethersproject/providers";

// helper hook to call a function regularly in time intervals
const DEBUG = false;


export default function useOnBlock(
    provider: Provider | null | undefined, fn: () => void
) {
    const savedCallback = useRef<() => void | undefined>();
    // Remember the latest fn.
    useEffect(() => {
        savedCallback.current = fn;
    }, [fn]);

    // Turn on the listener if we have a function & a provider
    useEffect(() => {
        if (fn && provider) {
            const listener = (blockNumber: number) => {
                if (DEBUG) console.log(blockNumber, fn, provider);

                if (savedCallback.current) {
                    savedCallback.current();
                }
            };

            provider.on("block", listener);

            return () => {
                provider.off("block", listener);
            };
        }
    }, [fn, provider]);
}