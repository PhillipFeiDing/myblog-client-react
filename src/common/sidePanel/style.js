import styled from 'styled-components'

export const SidePanelWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99;
  text-align: right;
  height: 100vh;
  overflow: visible;
`

export const ToolsWrapper = styled.div`
  margin: 15px;
  height: 100%;
  float: left;
  position: relative;
  left: 0;
  top: 0;
`

export const MenuButton = styled.label`
  font-size: .8rem;
  color: #7f8c8d;
  border: 1px solid rgba(127,140,141,0.6);
  line-height: 35px;
  border-radius: 4px;
  padding: 0 15px;
  cursor: pointer;
  text-transform: uppercase;
`

export const SearchBarWrapper = styled.div`
  position: relative;
  overflow: visible;
  height: 42px;
`

export const SearchIcon = styled.img.attrs({
  src: '/common/sidePanel/search.svg',
  alt: ''
})`
  opacity: 0.6;
  cursor: pointer;
  width: 35px;
  height: 35px;
  position: absolute;
  right: 5px;
  top: 2px;
`

export const SearchInput = styled.input.attrs({
    placeholder: 'Enter to Search'
})`
  &.display {
    width: 300px;
    opacity: 1;
  }
  &.hidden {
    opacity: 0;
    width: 42px;
  }
  height: 100%;
  padding-left: 15px;
  border-radius: 42px;
  border: 1px solid rgba(127,140,141,0.6);
  background: #fff;
  outline: none;
  position: absolute;
  right: 0;
  transition: all 0.4s;
  color: #555;
`

export const ToTopButton = styled.img.attrs({
  src: '/common/sidePanel/toTop.svg',
  alt: ''
})`
  opacity: 0.6;
  cursor: pointer;
  width: 42px;
  height: 42px;
  position: absolute;
  right: 20px;
  bottom: 50px;
`

export const Menu = styled.ul`
  margin: 0;
  background: #2c3e50;
  padding: 30px 0 0;
  width: 150px;
  height: 100%;
  overflow: auto;
  float: left;
  hr {
    border-top: 1px solid #eee;
  }
  &.hidden {
    width: 0px;
  }
  transition: all 0.2s ease-out;
`

export const MenuTitle = styled.p`
  font-size: 14px;
  padding-left: 15%;
  line-height: 48px;
  text-align: left;
  color: #ffff00;
  margin-bottom: 0;
`

export const MenuItem = styled.li`
  color: #fff;
  font-size: 12px;
  line-height: 48px;
  text-align: left;
  width: 100%;
  padding-left: 30%;
`