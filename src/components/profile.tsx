import styled from "styled-components";
import { color } from "../styles/global";
import { useEffect } from "react";
// import { GetUser } from "../apis/getMy";

export const ProfileComponents = () => {
  useEffect(() => {
    // const res = GetUser("123");
  }, []);

  return (
    <Wapper>
      <ProfileContainer>
        <img src="/img/profile.svg" />
        <div>
          <Name>길동맨</Name>
          <Email>qwer1234@gmail.com</Email>
        </div>
      </ProfileContainer>
      <FixBtn>내정보 수정하기</FixBtn>
    </Wapper>
  );
};

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 30px 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${color.black};
`;

const Email = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${color.gray[400]};
`;

const FixBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: ${color.white};
  background-color: ${color.green[100]};
  border: none;
  border-radius: 8px;
  padding: 9px 0;
  outline: none;
`;
