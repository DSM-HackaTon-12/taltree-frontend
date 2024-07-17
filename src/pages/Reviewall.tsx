import styled from "styled-components";
import { Reviw } from "../components/Review";
import { useNavigate } from "react-router-dom";

export const Reviewallpage = () => {
  const navigate = useNavigate();

  return (
    <View>
      <Header>
        <Icon onClick={() => navigate("/my")} src="/images/leftarrow.svg" />
        <Title>리뷰 모두 보기</Title>
      </Header>
      <Reviewlist>
        <li>
          <Reviw />
        </li>
        <li>
          <Reviw />
        </li>
        <li>
          <Reviw />
        </li>
      </Reviewlist>
    </View>
  );
};

const View = styled.div`
  width: 393px;
  height: 852px;
`;

const Header = styled.div`
  width: 393px;
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 20px;
  gap: 20px;
`;

const Icon = styled.img`
  width: 10px;
  height: 15px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const Reviewlist = styled.ul`
  display: flex;
  flex-direction: column;
`;
