import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown((prev) => !prev);
  };

  const dropdownRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (
        dropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
  }, [dropdown]);
  return (
    <div>
      <nav>
        <ul>
          <li> Home </li>
          <li> About </li>
          <li ref={dropdownRef}>
            <button onClick={handleClick}>
              Services <span> &#8595; </span>
            </button>
            {dropdown && (
              <ul>
                <li> Design </li>
                <li> Development </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
