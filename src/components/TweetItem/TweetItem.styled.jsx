import styled, { css } from 'styled-components';
import { ReactComponent as LogoSvg } from '../../assets/icons/Logo.svg';
import { ReactComponent as UserSvg } from '../../assets/icons/Hansel.svg';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 380px;
  height: 460px;
  padding: 28px 36px 36px 36px;

  background: linear-gradient(
    114.99deg,
    rgb(71, 28, 169) -0.99%,
    rgb(87, 54, 163) 54.28%,
    rgb(75, 42, 153) 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  width: 196px;
  height: 50px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: rgb(55, 55, 55);
  background-color: rgb(235, 216, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3.43693px 3.43693px;
  border-radius: 10.3108px;
  cursor: pointer;
  border: none;

  ${p =>
    p.isFollowing &&
    css`
      background-color: rgb(92, 211, 168);
    `}
`;

export const Logo = styled(LogoSvg)`
  position: absolute;
`;

export const Img = styled.img`
  padding-top: 8px;
`;

export const Line = styled.div`
  position: absolute;
  top: 214px;
  left: 0;
  height: 8px;
  width: 100%;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Text = styled.span`
  display: block;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  :not(:first-child) {
    margin-top: 16px;
  }
  text-transform: uppercase;
`;

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border: 9px solid #ebd8ff;
  background: linear-gradient(
    114.99deg,
    rgb(71, 28, 169) -0.99%,
    rgb(87, 54, 163) 54.28%,
    rgb(75, 42, 153) 78.99%
  );
  border-radius: 50%;
`;

export const UserImg = styled.img`
  border-radius: 50%;
`;

export const UserImgPreview = styled(UserSvg)``;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
