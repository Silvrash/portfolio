import { HTMLMotionProps, motion, useAnimation, Variant } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { RevealProps } from "./types";

interface BaseRevealProps extends Omit<HTMLMotionProps<"div">, "hidden" | "children"> {
    v: Variant;
    h: Variant;
    children: React.ReactNode;
}

export const Reveal: React.FC<BaseRevealProps> = ({ children, v, h, ...props }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            ref={ref}
            variants={{ visible: v, hidden: h }}
            initial="hidden"
            {...props}
            animate={control}
        >
            {children}
        </motion.div>
    );
};

export const AppearReveal: React.FC<RevealProps> = (props) => {
    return (
        <Reveal
            v={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
            h={{ opacity: 0, scale: 0 }}
            {...props}
        />
    );
};

export const PopFromLeftReveal: React.FC<RevealProps> = (props) => {
    return (
        <Reveal
            v={{ x: 0, opacity: 1, scale: 1, transition: { duration: 0.5 } }}
            h={{ x: "50%", opacity: 0, scale: 0 }}
            {...props}
        />
    );
};

export const PopFromRightReveal: React.FC<RevealProps> = (props) => {
    return (
        <Reveal
            v={{ x: 0, opacity: 1, scale: 1, transition: { duration: 0.5 } }}
            h={{ x: "-50%", opacity: 0, scale: 0 }}
            {...props}
        />
    );
};

export const FadeReveal: React.FC<RevealProps & { duration?: number }> = ({
    duration,
    ...props
}) => {
    return (
        <Reveal
            v={{ opacity: 1, transition: { duration: duration ?? 0.25 } }}
            h={{ opacity: 0 }}
            {...props}
        />
    );
};
