import { useState } from "react";
import Text from "../../Text/Text";
import _UserInfoDropdown from "./_UserInfoDropdown";
import { baseClasses, userImageInfoUrl } from "../../../../constants";

const UserInfo = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  function handleUserInfoClick(
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | undefined
  ) {
    e?.preventDefault();
    setShowDropdown((prev) => !prev);
  }

  function renderUserDisplayName() {
    return <Text text={"Tim Cook"} />;
  }

  function renderUserImage() {
    return <img className={baseClasses.userInfo.img} src={userImageInfoUrl} />;
  }

  function renderDropdown() {
    if (!showDropdown) {
      return;
    }
    return <_UserInfoDropdown />;
  }

  return (
    <div className={baseClasses.userInfo.base} onClick={handleUserInfoClick}>
      {renderUserImage()}
      {renderUserDisplayName()}
      {renderDropdown()}
    </div>
  );
};

export default UserInfo;
