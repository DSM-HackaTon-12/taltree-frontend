import styled from "styled-components";
import { MyDonation } from "../components/common/myDonation";
import { color } from "../styles/global";
import { useNavigate } from "react-router-dom";

export const Reviewpage = () => {
  const navigate = useNavigate();
  return (
    <View>
      <Header>
        <Title>리뷰</Title>
      </Header>
      <Reviewlist>
        <List>
          <Reviewbox>
            <MyDonation />
          </Reviewbox>
        </List>
        <Checkreviewbtn onClick={() => navigate("/reviewwrite/1")}>
          리뷰 작성하러 가기
        </Checkreviewbtn>
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
  height: 70px;
  margin-top: 70px;
  padding-left: 20px;
`;
const Title = styled.p`
  font-size: 30px;
  font-weight: 500;
`;

const Reviewlist = styled.ul`
  padding-left: 7px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const List = styled.li``;

const Reviewbox = styled.div``;

const Checkreviewbtn = styled.div`
  width: 350px;
  height: 50px;
  border-radius: 50px;
  background-color: ${color.green[200]};
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 16px;
  font-weight: 500;
  color: ${color.white};
`;
