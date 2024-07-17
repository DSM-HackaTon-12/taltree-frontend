import styled from "styled-components";
import { color } from "../styles/global";
import { useEffect, useState } from "react";
import { GetUser } from "../apis/getMy";
import axios from "axios";

interface ProfileType {
  username: string;
  email: string;
  user_id: number;
  profile_url: string;
}

const BASEURL = process.env.REACT_APP_BASE_URL;

export const ProfileComponents = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6InNveWVvbmtpbTAyMjdAbmF2ZXIuY29tIiwiaWF0IjoxNzIxMjAxOTA3LCJleHAiOjE3MjEyMDkxMDd9.z1XGqSRWOwf9bDo76XItuYsxSwllSO9Sq5O8s4ej9qQ";
  const [profile, setProfile] = useState<ProfileType>();

  const uuu = async () => {
    const res = await axios.get(`${BASEURL}/user/mypage`, {
      headers: { Authorization: token },
    });
    setProfile(res.data);
  };

  const handleLogin = async () => {
    // const res = await axios.post(`${BASEURL}/user/login`, {
    //   email: "soyeonkim0227@naver.com",
    //   password: "1234",
    // });
    // console.log(res.data);
  };

  useEffect(() => {
    uuu();
  }, []);

  return (
    <Wapper>
      <ProfileContainer>
        <ProfileImg src={profile?.profile_url} />
        <div>
          <Name>{profile?.username}</Name>
          <Email>{profile?.email}</Email>
        </div>
      </ProfileContainer>
      <FixBtn onClick={handleLogin}>내정보 수정하기</FixBtn>
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

const ProfileImg = styled.img`
  width: 100px;
  border-radius: 99px;
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
