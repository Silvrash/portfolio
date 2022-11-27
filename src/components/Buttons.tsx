import styled from "styled-components";
import { toDesignRatio } from "../utilities";

export const ShowMore = styled.a`
    width: calc(14.435rem * 0.8);
    height: calc(3.498rem * 0.8);
    border: 1px solid rgba(100, 208, 255, 1);
    background: transparent;
    font-size: calc(0.875rem * 0.8);
    line-height: calc(1.313rem * 0.8);
    color: #64d0ff;
    border-radius: 5px;
    margin-top: ${toDesignRatio(37)};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;
