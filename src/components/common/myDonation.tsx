import styled from "styled-components";
import { color } from "../../styles/global";
import { useNavigate } from "react-router-dom";

export const MyDonation = () => {
  const navigate = useNavigate();

  return (
    <Wapper onClick={() => navigate(`/reviewall/${1}`)}>
      <Img src="/img/profile.svg" />
      <ContentContainer>
        <Title>
          벌레 잘 잡는 달란트를 가지신 분..벌레 잘 잡는 달란트를 가지신 분..벌레
          잘 잡는 달란트를 가지신 분..벌레 잘 잡는 달란트를 가지신 분..
        </Title>
        <Address>대전광역시 유성구 가정동 76</Address>
        <DateFlex>
          <Date>2024.07.16 ~ 2024.07.19</Date>
          <Review>
            <ReviewImg src="/img/review.svg" />
            <ReviewCnt>3</ReviewCnt>
          </Review>
        </DateFlex>
      </ContentContainer>
    </Wapper>
  );
};

const Wapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 100px;
  border-radius: 5px;
  object-fit: contain;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 100%;
  gap: 5px;
`;

const Title = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: ${color.black};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const Address = styled.p`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: ${color.gray[400]};
`;

const DateFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Date = styled.p`
  width: 70%;
  min-width: 151px;
  font-size: 14px;
  font-weight: 400;
  color: ${color.black};
`;

const Review = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ReviewImg = styled.img`
  width: 20px;
`;

const ReviewCnt = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${color.green[300]};
`;
