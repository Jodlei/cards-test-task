import { useState } from 'react';
import {
  Item,
  ButtonWrap,
  Button,
  Circle,
  Img,
  Line,
  Logo,
  Text,
  Description,
  UserImg,
  UserImgPreview,
} from './TweetItem.styled';
import CardImage from '../../assets/image.png';

const TweetItem = ({
  user,
  avatar,
  tweets,
  followers,
  id,
  usersIFolow,
  setUsersIFolow,
  isFollowing,
}) => {
  const [followerCount, setFollowerCount] = useState(
    isFollowing ? followers + 1 : followers
  );

  const handleFollow = () => {
    if (!isFollowing) {
      setFollowerCount(prevNumber => prevNumber + 1);
      setUsersIFolow(prevUsersIFolow => [...prevUsersIFolow, id]);
    } else {
      setFollowerCount(prevNumber => prevNumber - 1);
      setUsersIFolow([...usersIFolow.filter(el => el !== id)]);
    }
  };

  return (
    <Item>
      <Logo />
      <Img src={CardImage} alt="Card background image" />
      <Line>
        <Circle>
          {avatar ? <UserImg src={avatar} alt={user} /> : <UserImgPreview />}
        </Circle>
      </Line>
      <Description>
        <Text>{tweets} Tweets</Text>

        <Text>{followerCount.toLocaleString('en-US')} Followers</Text>

        <ButtonWrap>
          <Button onClick={handleFollow} isFollowing={isFollowing}>
            {isFollowing ? 'Following' : 'Follow'}
          </Button>
        </ButtonWrap>
      </Description>
    </Item>
  );
};

export default TweetItem;
