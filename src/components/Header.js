import React, { useState, useRef, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDarkMode } from '../index';

const NavGapOverride = createGlobalStyle`
  .sc-cZSric.bCuuTs {
    gap: 28px !important;
  }
`;

const CustomPaddingOverride = createGlobalStyle`
  .sc-Qotzb.bIdxGn,
  .sc-Qotzb.OcjtE,
  .sc-iCmUMC.UwBgl,
  .sc-iCmUMC.dwufEC {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
`;

const CustomColorOverride = createGlobalStyle`
  .sc-hZARmv.gRSQzZ .bMvdiZ {
    color: #111 !important;
  }
`;

// Main header row
const MainHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1300px;
  margin: 0 auto;
  padding: 18px 0 0 0;
  background: ${({ theme }) => theme.background};
`;
const HeaderCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: flex-start;
`;
const CenterCol = styled(HeaderCol)`
  align-items: center;
  justify-content: center;
  flex: 2;
`;

const DateEpaper = styled.div`
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 12px;
`;
const Epaper = styled.span`
  color: ${({ theme }) => theme.accent};
  font-weight: 700;
  margin-left: 6px;
`;

const LogoImg = styled.img`
  width: 475px;
  height: 45px;
  margin: 0 auto;
  filter: ${({ theme }) => theme.background === '#000' ? 'invert(1) grayscale(1)' : 'none'};
`;

const RightStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;
const Account = styled.button`
  color: ${({ theme }) => theme.text};
  font-family: 'Merriweather Sans', sans-serif;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px 10px;
  font-size: 1rem;
  transition: background 0.2s;
  border-radius: 4px;
  &:hover, &:focus {
    background: ${({ theme }) => theme.cardBg};
    outline: none;
  }
`;
const SubscribeBtn = styled.button`
  background: #B00020;
  border-radius: 3px;
  border: 2px solid #B00020;
  color: #fff;
  font-family: 'Merriweather Sans', sans-serif;
  text-transform: uppercase;
  width: max-content;
  padding: 0 15px;
  transition: background 0.3s ease-out, border-color 0.3s ease-out, color 0.3s ease-out;
  margin-left: 15px;
  position: relative;
  height: 34px;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #fff;
    color: #B00020;
    border-color: #B00020;
  }
`;
const DarkToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  transition: color 0.3s;
`;

// Nav bar
const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  border-bottom: 1px solid ${({ theme }) => theme.cardBorder};
  margin-top: 2px;
  background: ${({ theme }) => theme.background};
`;
const NavInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 16px;
`;
const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 180px;
`;
const Hamburger = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text};
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
`;
const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text};
`;
const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  font-size: 1.1rem !important;
  font-weight: 700 !important;
  font-family: 'Merriweather', Georgia, 'Times New Roman', Times, serif !important;
  letter-spacing: 0.5px;
`;
const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-family: 'Merriweather', Georgia, 'Times New Roman', Times, serif !important;
  font-weight: 700 !important;
  font-size: 1.1rem !important;
  letter-spacing: 0.5px;
  height: 36px;
  line-height: 36px;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  &:hover {
    color: ${({ theme }) => theme.text};
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 2px;
  }
`;
const PremiumWrap = styled.li`
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: 'Merriweather', Georgia, 'Times New Roman', Times, serif !important;
  font-weight: 700 !important;
  font-size: 1.1rem !important;
  height: 36px;
`;
const PremiumCircle = styled.span`
  background: ${({ theme }) => theme.premium};
  color: #222;
  font-weight: 700;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
`;

const NotificationToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  transition: color 0.3s;
  margin-right: 8px;
`;

const NotificationPopup = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  padding: 18px 22px 14px 22px;
  z-index: 1000;
  min-width: 220px;
`;

const NotificationLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  font-size: 1rem;
`;

const categories = [
  'national',
  'international',
  'business',
  'sports',
  'entertainment',
  'education',
  'science',
];

function getToday() {
  const d = new Date();
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function Header() {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifPrefs, setNotifPrefs] = useState(() => {
    const saved = localStorage.getItem('notificationPrefs');
    return saved ? JSON.parse(saved) : {};
  });
  const popupRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    }
    if (notifOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [notifOpen]);

  const handleNotifToggle = () => setNotifOpen((v) => !v);

  const handleCategoryChange = (cat) => async (e) => {
    const checked = e.target.checked;
    let newPrefs = { ...notifPrefs, [cat]: checked };
    setNotifPrefs(newPrefs);
    localStorage.setItem('notificationPrefs', JSON.stringify(newPrefs));
    if (checked && 'Notification' in window && Notification.permission === 'default') {
      await Notification.requestPermission();
    }
  };

  return (
    <>
      <NavGapOverride />
      <CustomPaddingOverride />
      <CustomColorOverride />
      <header>
        <MainHeaderRow>
          <HeaderCol align="flex-start">
            <DateEpaper>
              <span>{getToday()}</span>
              <Epaper>e-Paper</Epaper>
            </DateEpaper>
          </HeaderCol>
          <CenterCol>
            <LogoImg src={process.env.PUBLIC_URL + '/thehindu-logo.svg'} alt="The Hindu Logo" />
          </CenterCol>
          <HeaderCol align="flex-end">
            <RightStack>
              <Account>
                Login
                <img 
                  src={process.env.PUBLIC_URL + '/account-btn-icon-black.svg'} 
                  alt="Account Icon" 
                  style={{
                    width: '16px', 
                    height: '16px', 
                    marginLeft: '6px',
                    filter: darkMode ? 'invert(1) grayscale(1)' : 'none'
                  }}
                />
              </Account>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', position: 'relative' }}>
                <NotificationToggle onClick={handleNotifToggle} aria-label="Toggle notifications">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                </NotificationToggle>
                {notifOpen && (
                  <NotificationPopup ref={popupRef}>
                    <div style={{fontWeight:600, marginBottom:10}}>Allow notifications for:</div>
                    {categories.map(cat => (
                      <NotificationLabel key={cat}>
                        <input
                          type="checkbox"
                          checked={!!notifPrefs[cat]}
                          onChange={handleCategoryChange(cat)}
                        />
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </NotificationLabel>
                    ))}
                  </NotificationPopup>
                )}
                <DarkToggle onClick={toggleDarkMode} aria-label="Toggle dark mode">
                  {darkMode ? (
                    // Sun icon
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                  ) : (
                    // Moon icon
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
                  )}
                </DarkToggle>
                <SubscribeBtn>SUBSCRIBE</SubscribeBtn>
              </div>
            </RightStack>
          </HeaderCol>
        </MainHeaderRow>
        <NavBar>
          <NavInner>
            <NavLeft>
              <Hamburger aria-label="Menu">
                <svg width="28" height="28" viewBox="0 0 24 24">
                  <rect y="4" width="24" height="2" rx="1" fill="currentColor" />
                  <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
                  <rect y="18" width="24" height="2" rx="1" fill="currentColor" />
                </svg>
              </Hamburger>
              <SearchBox>
                <SearchIcon>
                  <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2"/></svg>
                </SearchIcon>
                <span>Search</span>
              </SearchBox>
            </NavLeft>
            <NavLinks style={{ marginLeft: 0 }}>
              <li><NavLink to="/category/india">India</NavLink></li>
              <li><NavLink to="/category/world">World</NavLink></li>
              <li><NavLink to="/category/movies">Movies</NavLink></li>
              <li><NavLink to="/category/sport">Sport</NavLink></li>
              <li><NavLink to="/category/data">Data</NavLink></li>
              <li><NavLink to="/category/health">Health</NavLink></li>
              <li><NavLink to="/category/opinion">Opinion</NavLink></li>
              <li><NavLink to="/category/science">Science</NavLink></li>
              <li><NavLink to="/category/business">Business</NavLink></li>
              <PremiumWrap>
                <PremiumCircle>TH</PremiumCircle>
                <NavLink to="/category/premium">Premium</NavLink>
              </PremiumWrap>
            </NavLinks>
          </NavInner>
        </NavBar>
      </header>
    </>
  );
}

export default Header; 