import styled from 'styled-components';
import RootBaseCard from '../BaseCard';

const RootCard = styled(RootBaseCard)`
    .info {
        margin-left: 1rem;
    }
    h3 {
        font-size: 24px;
        color: #434343;
    }
    small {
        font-size: 16px;
        color: #434343;
    }
    .arrow-right {
        margin-left: auto;
    }
    @media (max-width: 768px) {
        h3 {
            font-size: 18px;
        }
        small {
            font-size: 14px;
        }
    }
`;
export default RootCard;
