import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck as farCircleCheck } from "@fortawesome/free-regular-svg-icons/faCircleCheck";
import { faCircleCheck as fasCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { faCircleXmark as farCircleXmark } from "@fortawesome/free-regular-svg-icons/faCircleXmark";
import { faCircleXmark as fasCircleXmark } from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import { faSpinner as fasSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { faArrowDownAZ as fasArrowDownAZ } from "@fortawesome/free-solid-svg-icons/faArrowDownAZ";
import { faArrowUpAZ as fasArrowUpAZ } from "@fortawesome/free-solid-svg-icons/faArrowUpAZ";
import { faSun as fasSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { faMoon as fasMoon } from "@fortawesome/free-solid-svg-icons/faMoon";

function initIcons() {
  library.add([
    farCircleCheck,
    farCircleXmark,
    fasCircleCheck,
    fasCircleXmark,
    fasSpinner,
    fasArrowUpAZ,
    fasArrowDownAZ,
    fasMoon,
    fasSun,
  ]);
}

export { initIcons };
