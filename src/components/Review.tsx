import styled from "styled-components"
import { color } from "../styles/global"

export const Reviw = () => {
  return(
    <div>
      <List>
        <Profile>
          <Icon src="/images/profile.svg"/>
          <Title>대전 노인 복지 센터</Title>
        </Profile>
        <Reviewinfo>
        <Stars>
          <Star src="/images/star_filed.svg"/>
          <Star src="/images/star_filed.svg"/>
          <Star src="/images/star_filed.svg"/>
          <Star src="/images/star_empty.svg"/>
          <Star src="/images/star_empty.svg"/>
        </Stars>
        <Date>2024.07.16 ~ 2024.07.19</Date>
        </Reviewinfo>
        <Reviewtextbox>
          <Reviewtext>
            벌레 잘 잡는 달란트를 가지신 분..
            벌레 잘 잡는 달란트를 가지신 분..벌레 잘 잡는 달란트를 가지신 분..
            벌레 잘 잡는 달란트를 가지신 분..벌레 잘 잡는 달란트를 가지신 분..
            벌레 잘 잡는 달란트를 가지신 분..벌레 잘 잡는 달란트를 가지신 분..
            </Reviewtext>
        </Reviewtextbox>
      </List>
    </div>
  )
}

const List = styled.div`
  width: 393px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 7px;
  margin-top: 30px;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  gap: 10px;
`
const Reviewinfo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  gap: 20px;
`
const Stars = styled.div`
  display: flex;
  align-items: center;
`

const Star = styled.img`
  width: 16px;
  height: 16px;
`

const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
`


const Icon = styled.img`
  width: 30px;
  height: 30px;
`

const Date = styled.p`
  font-size: 14px;
  font-weight: 200;
`

const Reviewtextbox = styled.div`
  width: 339px;
  margin: 0 26px;
`

const Reviewtext = styled.p`
  font-size: 12px;
  font-weight: 400px;
`