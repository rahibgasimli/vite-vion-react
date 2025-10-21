
export const FacebookIcon = ({ footerIcon }) => {
  return (
    <svg
      width="28"
      height="32"
      viewBox="0 0 28 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="social_icon"
    >
      <path
        d="M4 2H24C26.1875 2 28 3.8125 28 6V26C28 28.25 26.1875 30 24 30H15.9375V20.9375H20.25L21.125 16H15.9375V14.3125C15.9375 11.6875 16.9375 10.6875 19.5625 10.6875C20.375 10.6875 21 10.75 21.375 10.75V6.375C20.6875 6.125 18.9375 5.9375 17.9375 5.9375C12.5625 5.9375 10.125 8.5 10.125 13.9375V16H6.8125V20.9375H10.125V30H4C1.75 30 0 28.25 0 26V6C0 3.8125 1.75 2 4 2Z"
        className={`social_icon_path ${footerIcon ? 'footer_social_icon_path' : ''}`}
      />
    </svg>
  );
};
