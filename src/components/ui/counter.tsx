import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
    value: number;
    direction?: "up" | "down";
    className?: string;
    suffix?: string;
}

export default function Counter({
    value,
    direction = "up",
    className,
    suffix = "",
}: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "0px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(direction === "down" ? 0 : value);
        }
    }, [motionValue, isInView, value, direction]);

    useEffect(() => {
        const updateText = (latest: number) => {
            if (ref.current) {
                const numberValue = Math.round(latest);
                ref.current.textContent = Intl.NumberFormat("en-US").format(numberValue) + suffix;
            }
        };

        // Set initial value
        updateText(springValue.get());

        const unsubscribe = springValue.on("change", (latest) => {
            updateText(latest);
        });

        return () => unsubscribe();
    }, [springValue, suffix]);

    return <span ref={ref} className={className} />;
}
