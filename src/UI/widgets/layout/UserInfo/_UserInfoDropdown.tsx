import { baseClasses } from "../../../../constants"
import { translation } from "../../../../constants/translations"
import Text from "../../Text/Text"

const _UserInfoDropdown = () => {
  function renderItem(text: string) {
    return <div className={baseClasses.userInfo.dropdownItems}>
      <Text text={text} />
    </div>
  }

  return <div className={baseClasses.userInfo.dropdown}>
    {renderItem(translation.t.yourProfile)}
    {renderItem(translation.t.setting)}
    {renderItem(translation.t.signOut)}
  </div>
}

export default _UserInfoDropdown