import styled from "styled-components"
import { MyDonation } from "../components/common/myDonation"
import { Stats } from "fs"
import { color } from "../styles/global"


export const Revierwritepage = () => {
  return(
    <View>
      <Header>
        <Title>리뷰</Title>
      </Header>
      <Reviewbox>
        <MyDonation/>
      </Reviewbox>
      <Stars>
      <Star src="/images/star_filed.svg"/>
      <Star src="/images/star_filed.svg"/>
      <Star src="/images/star_filed.svg"/>
      <Star src="/images/star_empty.svg"/>
      <Star src="/images/star_empty.svg"/>
      </Stars>
      <Writereviewcontainer>
        <Writereviewtext>내용</Writereviewtext>
        <Writereview>
          <Wrriteviewinput placeholder="내용을 작성해 주세요" />
        </Writereview>
      </Writereviewcontainer>
      <Writereviewbtn> <Btntext>작성 완료</Btntext> </Writereviewbtn>
    </View>
  )
}

const View = styled.div`
  width: 393px;
  height: 852px;
`

const Header = styled.div`
  width: 393px;
  height: 70px;
  margin-top: 70px;
  padding-left: 20px;
`
const Title = styled.p`
  font-size: 30px;
  font-weight: 500;
`

const Reviewbox = styled.div`
  width: 393px;
  padding-left: 20px;
`

const Stars = styled.div`
  width: 393px;
  padding-left: 15px;
  margin-top: 20px;
`

const Star = styled.img`
  width: 35px;
  height: 35px;
`

const Writereviewcontainer = styled.div`
  width: 393px;
`

const Writereviewtext = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0 5px 22px;
`

const Writereview = styled.div`
width: 350px;
height: 197px;
border-radius: 8px;
background-color: ${color.gray[200]};
padding: 20px;
margin-left: 22px;
`

const Wrriteviewinput = styled.textarea`
  background-color: ${color.gray[200]};
  width: 300px;
  height: 160px;
  border: none;
  word-wrap: break-word;
  &:focus{
    outline: none;
  }
`

const Writereviewbtn = styled.div`
width: 350px;
height: 50px;
border-radius: 50px;
background-color: ${color.green[200]};
margin-left: 15px;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
left: 9px;
top: 694px;
`

const Btntext = styled.p`
  font-family: 16px;
  font-weight: 500;
  color: ${color.white};
`