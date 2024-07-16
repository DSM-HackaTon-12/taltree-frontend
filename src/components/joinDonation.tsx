import styled from "styled-components";
import { color } from "../styles/global";
import { MyDonation } from "./common/myDonation";

export const JoinDonation = () => {
  return (
    <Wapper>
      <TContainer>
        <Title>참여한 기부 활동</Title>
        <Count>13</Count>
      </TContainer>
      <DonationWarp>
        <MyDonation />
        <Line />
        <MyDonation />
        <Line />
        <MyDonation />
        <Line />
        <MyDonation />
        <Line />
        <MyDonation />
        <Line />
      </DonationWarp>
    </Wapper>
  );
};

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 20px;
  gap: 25px;
`;

const TContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${color.black};
`;

const Count = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${color.green[200]};
`;

const DonationWarp = styled.div`
  height: 400px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.gray[100]};
  margin: 12px 0;
`;
