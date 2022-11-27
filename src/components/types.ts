import { HTMLMotionProps } from "framer-motion";
import { HTMLProps } from "react";

export interface RevealProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
}
