import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import vietnamFlag from '../../assets/vietnam-flag.svg';
import usFlag from '../../assets/us-flag.svg';
import './LanguageSwitcher.css';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { HiLanguage } from 'react-icons/hi2';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const languages = [
    {
      code: 'vi',
      title: 'Tiếng Việt',
      name: 'VI',
      flag: vietnamFlag,
    },
    {
      code: 'en',
      title: 'English',
      name: 'EN',
      flag: usFlag,
    },
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setShowDropdown(false);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <>
      <div className="language">
        <button
          className="language_button"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <HiLanguage width="20" />
          {currentLanguage.title}
          {showDropdown ? (
            <BiChevronUp width={40} />
          ) : (
            <BiChevronDown width={40} />
          )}
        </button>

        {showDropdown && (
          <div className="language__dropdown">
            {languages.map((lang) => (
              <div
                className="language__dropdown-element"
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
              >
                <img src={lang.flag} alt={lang.name} width="20" height="20" />
                <span>{lang.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default LanguageSwitcher;
