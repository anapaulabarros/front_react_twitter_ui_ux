import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Tab = styled.div`
    margin-top: 10px;
    padding: 11px 0 15px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    text-align: center;

    outline: 0;
    color: var(--twitter);
    border-bottom: 1px solid var(--twitter);
    transition: all 0.2s;

    &:hover {
        color: var(--gray);
        background: var(--twitter-dark-hover);
    }
`;

export const Tweets = styled.div`
    display: flex;
    flex-direction: column;

    flex-shrink: 0; /* não encolhe os elementos nos dispositivos mobiles */
`;