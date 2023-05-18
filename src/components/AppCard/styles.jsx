import styled from 'styled-components';
import RootBaseCard from '../BaseCard';

const RootAppCard = styled(RootBaseCard)`
    flex-direction: column;
    text-align: center;
    .info {
        margin-left: 1rem;
    }
    .status {
        display: flex;
        align-items: center;
        margin-top: 20px;
        p {
            font-size: 24px;
            margin-left: 10px;
        }
    }
    .arrow-right {
        margin-left: auto;
    }
    h3 {
        font-size: 36px;
        color: #434343;
    }
    small {
        font-size: 16px;
        color: #434343;
    }
    
    @media (max-width: 768px) {
        h3 {
            font-size: 22px;
        }
        small {
            font-size: 14px;
        }
        .status p {
            font-size: 16px;
        }
    }
`;
export default RootAppCard;
