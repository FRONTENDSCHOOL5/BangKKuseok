import React from 'react';
import { HeaderWrapper, SearchBtn, HeaderH2, HeaderH3 } from './HeaderStyle';
import { ReactComponent as BackIcon } from '../../../assets/icons/icon-arrow-left.svg';
import { ReactComponent as MoreIcon } from '../../../assets/icons/icon-more.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icons/icon-search.svg';
import Button from '../Button/Button/Button';
import RoundedInput from '../Input/RoundedInput/RoundedInput';

export default function Header({
  type,
  title,
  btnText,
  isBtnActive,
  onClickLeftButton,
  onClickRightButton,
}) {
  const HeaderLayout = {
    home: (
      <HeaderWrapper type={type}>
        <SearchBtn>
          <SearchIcon stroke='#fff' />
        </SearchBtn>
      </HeaderWrapper>
    ),
    feed: (
      <HeaderWrapper type={type}>
        <SearchBtn>
          <SearchIcon stroke='#000' />
        </SearchBtn>
      </HeaderWrapper>
    ),
    search: (
      <HeaderWrapper type={type}>
        <button>
          <BackIcon stroke='#000' />
        </button>
        <RoundedInput id='search' placeholder='계정을 검색하세요' />
      </HeaderWrapper>
    ),
    profile: (
      <HeaderWrapper type={type}>
        <button type='button' onClick={onClickLeftButton}>
          <BackIcon stroke='#fff' />
        </button>
        <button type='button' onClick={onClickRightButton}>
          <MoreIcon fill='#fff' stroke='#fff' />
        </button>
      </HeaderWrapper>
    ),
    post: (
      <HeaderWrapper type={type}>
        <button>
          <BackIcon stroke='#000' />
        </button>
        <HeaderH3>애월읍 위니브 감귤농장</HeaderH3>
        <button>
          <MoreIcon fill='#000' stroke='#000' />
        </button>
      </HeaderWrapper>
    ),
    imageSelect: (
      <HeaderWrapper type={type}>
        <button type='button' onClick={onClickLeftButton}>
          <BackIcon stroke='#000' />
        </button>
        <HeaderH2>{title}</HeaderH2>
        <Button disabled={!isBtnActive} size='sm' onClick={onClickRightButton}>
          {btnText}
        </Button>
      </HeaderWrapper>
    ),
  };
  return HeaderLayout[type];
}
