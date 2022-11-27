import React from "react";
import styled from "styled-components";

interface Props extends React.PropsWithChildren {
    id?: string;
    className?: string;
}

const Center = ({ children, className, ...props }: Props) => {
    return (
        <StyledDiv className={className} {...props}>
            <div className="center-content">{children}</div>
        </StyledDiv>
    );
};
const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.125rem 0rem;
    width: calc(100% - 20rem);
    min-height: 100vh;
    align-self: center;

    .center-content {
        width: 100%;
    }

    @media (max-width: 768px) {
        /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
        width: calc(100% - 2rem);
        padding: 2.125rem 2rem !important;

        .center-content {
            width: 100%;
        }
    }

    @media (max-width: 820px) {
        width: 85%;
    }

    @media (max-width: 360px) {
        width: 85%;
    }
`;
export default Center;
